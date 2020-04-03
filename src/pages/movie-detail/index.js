import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
    Container,
    Description,
    Introduction
} from './style'
import { PageHeader, message, Rate, Tooltip, Divider, Modal, Button, Form, Input } from 'antd'
import MovieComment from 'components/movie-comment/index'
import { post } from 'utils/http'
import { movieAarryFormat } from 'utils/util'
// 路由
import { MOfindById } from 'route/movie'
import { MCadd, MCfindCommentsById } from 'route/movieComments'

const { TextArea } = Input;


export default () => {
    const [data, setData] = useState({})
    const [visible, setVisible] = useState(false)
    const [currentMovieId, setCurrentMovieId] = useState('')
    const [comments, setComments] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [formInfo, setFormInfo] = useState({
        rate: 0,
        author: '',
        content: ''
    })
    const routerParams = useParams()
    const history = useHistory()
    const INIT_PAGE = 1

    const loadData = async (params, page) => {
        let movie;
        let comments;
        try {
            movie = await post(MOfindById, {
                movieId: params.movieId
            })
            comments = await post(MCfindCommentsById, {
                movieId: params.movieId,
                page
            })
        } catch (error) {
            message.error('载入数据失败')
        }
        setTotal(comments.data.total)
        setComments(comments.data.data)
        setData(movie.data.data)
    }

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
    };

    const onSubmit = async () => {
        if (!formInfo.content || !formInfo.author || !formInfo.rate || !currentMovieId) {
            message.warning('评论信息未完善')
        } else {
            const result = await post(MCadd, {
                ...formInfo,
                movieId: currentMovieId
            })
            if (result.data.code !== 200) {
                message.error(result.data.msg || '载入数据失败')
                return
            }
            message.success('评论成功')
            setVisible(false)
            setFormInfo({
                rate: 0,
                author: '',
                content: ''
            })
            loadData(routerParams, INIT_PAGE)
        }
    };

    const back = () => {
        history.goBack()
    }

    const nameChange = (e) => {
        setFormInfo({
            ...formInfo,
            author: e.target.value
        })
    }

    const commentChange = (e) => {
        setFormInfo({
            ...formInfo,
            content: e.target.value
        })
    }

    const rateChange = (value) => {
        setFormInfo({
            ...formInfo,
            rate: value
        })
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const showModal = () => {
        setVisible(true)
    }

    const onPageChange = async (current) => {
        setPage(current)
        const comments = await post(MCfindCommentsById, {
            movieId: routerParams.movieId,
            page: current
        })
        setComments(comments.data.data)
    }

    const commentUpdateCallback = () => {
        loadData(routerParams, INIT_PAGE)
    }

    useEffect(() => {
        setCurrentMovieId(routerParams.movieId)
        loadData(routerParams, INIT_PAGE)
    }, [routerParams, INIT_PAGE])


    return (
        <>
            <Container>
                <PageHeader
                    className="site-page-header"
                    onBack={back}
                    title="返回电影列表"
                    subTitle="电影详情"
                />
                <Description>
                    <img src={data.image} alt="" />
                    <div className="desc">

                        <div>
                            <b>影名：</b>
                            <Tooltip placement="top" title={data.name}>
                                <span>{data.name}</span>
                            </Tooltip>
                        </div>
                        <div><b>导演：</b><span>{data.director}</span></div>
                        <div><b>制片国家/地区：</b><span>{movieAarryFormat(data.country)}</span></div>
                        <div><b>类型：</b><span>{movieAarryFormat(data.type)}</span></div>
                        <div><b>评分：</b><span><Rate disabled allowHalf value={data.rate} /></span></div>
                    </div>
                </Description>
                <Introduction>
                    <b>简介</b>
                    <p>{data.introduction}</p>
                </Introduction>

                <Divider orientation="left">评论区</Divider>
                <div className="btn">
                    <Button type="dashed" onClick={showModal}>
                        发表评论
                    </Button>
                </div>
                <MovieComment value={comments} page={page} onPageChange={onPageChange} total={total} commentUpdateCallback={commentUpdateCallback} />
            </Container>

            <Modal
                title="评论电影"
                okText="提交评论"
                cancelText="取消"
                visible={visible}
                onOk={onSubmit}
                onCancel={handleCancel}
            >
                <Form
                    {...layout}
                    name="basic"
                >
                    <Form.Item
                        label="请选择评分"
                        name="rate"
                        rules={[{ required: true, message: '还未选择评分' }]}
                    >
                        <Rate onChange={rateChange} />
                    </Form.Item>

                    <Form.Item
                        label="请输入昵称"
                        name="name"
                        rules={[{ required: true, message: '还未输入昵称' }]}
                    >
                        <Input onChange={nameChange} />
                    </Form.Item>

                    <Form.Item
                        label="请输入影评"
                        name="comment"
                        rules={[{ required: true, message: '还未输入影评' }]}
                    >
                        <TextArea rows={4} onChange={commentChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
