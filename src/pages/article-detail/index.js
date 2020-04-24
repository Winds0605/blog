// import 'App.css'
import React, { useState, useEffect, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Container, Sider, ArticleContainer, ArticleHeader, ArticleTitle, ArticleInfo, CommentContainer, LinkContainer } from './style'
import { Tag, message, Anchor, Avatar, Input, Button, Row, Col, Divider, PageHeader } from 'antd'
import { MyIcon } from 'utils/util'
import ReactMarkdown from 'react-markdown'
import HeadingBlock from "utils/HeadingBlock"
import CodeBlock from 'utils/CodeBlock'
import Comment from 'components/comment'
import { formatDate, parseArticle } from 'utils/util'
import { post } from 'utils/http.js'
// 路由
import { ACfindComentsById, ACadd } from 'route/articleComments.js'
import { ARfindById, ARaddViews } from 'route/article'

const { Link } = Anchor;
const { TextArea } = Input


const indent = (level) => {
    if (level === 1) {
        return 'level1'
    } else {
        return 'level2'
    }
}


export default () => {
    const routerParams = useParams()
    const [data, setData] = useState([])
    const [catalog, setCatalog] = useState([])
    const [comment, setComment] = useState({
        content: '',
        author: ''
    })
    const commentEl = useRef();
    const history = useHistory()
    const INITCOMMENT = 1;
    const MessageUrl = ACfindComentsById

    // 加载页面数据
    let loadData = async (articleId) => {
        window.scrollTo(0, -1)
        try {
            let result = await post(ARfindById, {
                articleId
            });

            let addResult = await post(ARaddViews, {
                articleId
            });

            if (result.data.errorCode !== 0 || addResult.data.errorCode !== 0) {
                message.error('数据请求失败');
            } else {
                setData(result.data.data)
                setCatalog(parseArticle(result.data.data.content))
            }
        } catch (error) {
            message.error('数据请求失败');
        }
    }

    // 提交评论
    let handleCommentCommit = async () => {
        if (!comment.author || !comment.content) {
            message.warning('还未填写评论信息');
        }
        try {
            let result = await post(ACadd, {
                articleId: routerParams.articleId,
                ...comment
            })
            if (result.data.errorCode === 0) {
                message.success('评论成功');
                commentEl.current.updateData(INITCOMMENT, MessageUrl)
                setComment({
                    content: '',
                    author: ''
                })
            }
        } catch (error) {
            message.error('评论失败');
        }
    }

    let contentChange = (e) => {
        setComment({
            ...comment,
            content: e.target.value
        })
    }

    let authorChange = (e) => {
        setComment({
            ...comment,
            author: e.target.value
        })
    }

    const back = () => {
        history.push('/article')
    }

    useEffect(() => {
        loadData(routerParams.articleId)
    }, [routerParams.articleId])

    return (
        <Container>
            <PageHeader
                className="site-page-header"
                onBack={back}
                title="返回"
                subTitle="文章详情"
            />
            <ArticleContainer>
                <ArticleHeader>
                    <ArticleTitle className="iconfot">{data.title}</ArticleTitle>
                    <ArticleInfo>
                        <span>
                            <MyIcon type="icon-calendar" />{formatDate(data.modifyOn, 'yyyy-MM-dd hh:mm:ss')}
                        </span>
                        <span className="views">阅读数：{data.views}</span>
                        <span className="tag">分类：<Tag>{data.tag}</Tag></span>
                    </ArticleInfo>
                </ArticleHeader>

                <ReactMarkdown
                    source={data.content}
                    escapeHtml={false}
                    renderers={{
                        code: CodeBlock,
                        heading: HeadingBlock
                    }}
                >
                </ReactMarkdown>
                <CommentContainer>
                    <Divider>评论区</Divider>
                    <Row gutter={8} justify="space-between" className={'commentArea'}>
                        <Col className="gutter-row" span={2}>
                            <Avatar size="large" src={'https://markdowncun.oss-cn-beijing.aliyuncs.com/markdown/images.png'} className={'avatar'} />
                        </Col>
                        <Col className="gutter-row" span={19}>
                            <Input placeholder="请输入你的昵称" onChange={authorChange} value={comment.author} />
                        </Col>
                        <Col className="gutter-row" span={3}>
                            <Button type="primary" className="send" onClick={handleCommentCommit} >发送</Button>
                        </Col>
                    </Row>
                    <Row gutter={8} justify="space-between">
                        <Col className="gutter-row" span={2}>
                        </Col>
                        <Col className="gutter-row" span={22}>
                            <TextArea rows={4} placeholder="请输入你的评论" onChange={contentChange} value={comment.content} />
                        </Col>
                    </Row>
                    <Comment cRef={commentEl} MessageUrl={MessageUrl} routerParams={routerParams} />
                </CommentContainer>
            </ArticleContainer>
            <Sider>
                <h2>目录</h2>
                <Anchor>
                    {

                        catalog.map(value => {
                            return (
                                <LinkContainer className={indent(value.level)} key={value.title}>
                                    <Link href={`#${value.title}`} title={value.title} />
                                </LinkContainer>
                            )
                        })
                    }
                </Anchor>
            </Sider>
        </Container >
    );
}
