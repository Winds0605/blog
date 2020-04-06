import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Description, Introduction, ModalContainer } from './style'
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

    const [form] = Form.useForm()
    const routerParams = useParams()
    const history = useHistory()
    const INIT_PAGE = 1

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 },
    };

    // 加载电影数据
    const loadMovie = async (params) => {
        let movie;
        try {
            movie = await post(MOfindById, {
                movieId: params.movieId
            })
        } catch (error) {
            message.error('载入数据失败')
            throw error
        }
        setData(movie.data.data)
    }

    // 加载评论数据
    const loadComments = async (params, page) => {
        let comments
        try {
            comments = await post(MCfindCommentsById, {
                movieId: params.movieId,
                page
            })
        } catch (error) {
            message.error('载入数据失败')
            throw error
        }
        setTotal(comments.data.total)
        setComments(comments.data.data)
    }

    // 添加评论
    const addComments = async (formInfo) => {
        let result
        try {
            result = await post(MCadd, {
                ...formInfo,
                movieId: currentMovieId
            })
        } catch (error) {
            message.error('载入数据失败')
            throw error
        }

        if (result.data.code !== 200) {
            message.error(result.data.msg || '载入数据失败')
            return
        }
        message.success('评论成功')
        setVisible(false)
    }

    // 路由回退
    const back = () => {
        history.goBack()
    }

    // 隐藏评论框
    const handleCancel = () => {
        setVisible(false)
    }

    // 展示评论框
    const showModal = () => {
        setVisible(true)
    }

    // 页码改变回调
    const onPageChange = async (current) => {
        setPage(current)
        loadComments(routerParams, current)
    }

    // 子评论组件评论后回调
    const commentUpdateCallback = () => {
        loadComments(routerParams, page)
    }

    // 评论提交事件
    const onFinish = async values => {
        addComments(values)
        loadComments(routerParams, page)
        form.setFieldsValue({
            rate: 0,
            author: '',
            content: ''
        })
    };

    useEffect(() => {
        setCurrentMovieId(routerParams.movieId)
        loadMovie(routerParams)
        loadComments(routerParams, INIT_PAGE)
    }, [routerParams])


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

            <ModalContainer>
                <Modal
                    title="评论电影"
                    onCancel={handleCancel}
                    visible={visible}
                    footer={null}
                >
                    <Form
                        {...layout}
                        form={form}
                        name="comment-reply"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="请选择评分"
                            name="rate"
                            rules={[{ required: true, message: '还未选择评分' }]}
                        >
                            <Rate />
                        </Form.Item>

                        <Form.Item
                            label="请输入昵称"
                            name="author"
                            rules={[{ required: true, message: '还未输入昵称' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="请输入影评"
                            name="content"
                            rules={[{ required: true, message: '还未输入影评' }]}
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="submit">
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </ModalContainer>
        </>
    )
}
