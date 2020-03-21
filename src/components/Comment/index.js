import React, { useState, useEffect, useImperativeHandle } from 'react'
import { Comment, List, Pagination, message, Modal, Icon, Empty } from 'antd';
import Message from 'components/Message'
import { Container } from './style'
import { post } from 'utils/http'
import { formatDate } from 'utils/util'

const paginationStyle = {
    textAlign: 'center',
    margin: '10px 0px',
    bottom: '0',
    position: "absolute",
    transform: 'translateX(-50%)',
    left: '50%'
}

// 子评论组件
const SubMessage = (messages) => {
    if (messages.sub.length > 0) {
        const comment = messages.sub
        return (
            comment.map(value => {
                return (
                    <Comment
                        author={value.author}
                        avatar={value.avatar}
                        key={value.modifyOn}
                        content={value.content}
                        datetime={formatDate(value.modifyOn, 'yyyy年MM月dd hh:mm:ss')}
                    >
                    </Comment>
                )
            })

        )
    } else {
        return <></>
    }
}

// 评论列表组件
const MessageList = ({ messages, total, reply, handleShowSubMessage }) => {
    return (
        <List
            dataSource={messages}
            header={`Has ${total} ${total > 1 ? 'replies' : 'reply'}`}
            itemLayout="horizontal"
            renderItem={(props) => (
                <Comment
                    actions={[
                        <span key="comment-nested-reply-to" onClick={reply.bind(this, [props.messageId ? props.messageId : props.commentId, props.author])}>
                            <Icon type="edit" style={{ marginRight: '5px' }} />回复
                        </span>,
                        <span onClick={handleShowSubMessage.bind(this, props.author)}>
                            {props.sub.length > 0 && !props.show ? `查看${props.sub.length}条评论` :
                                props.sub.length > 0 ? '收起评论' : ''}
                        </span>
                    ]}
                    author={props.author}
                    avatar={props.avatar}
                    content={props.content}
                    datetime={formatDate(props.modifyOn, 'yyyy年MM月dd日 hh:mm:ss')}
                >
                    {props.show ?
                        (
                            <SubMessage {...props} />
                        ) : null}
                </Comment>
            )}
        />
    )
}

export default ({ cRef, MessageUrl, routerParams }) => {
    const [visible, setVisible] = useState(false)
    const [params] = useState(routerParams ? routerParams : '')
    const [messages, setMessages] = useState([])
    const [page, setPage] = useState(1)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState(0)
    const [submitting, setSubmitting] = useState(false)
    const [messageInfo, setMessageInfo] = useState({
        author: '',
        content: ''
    })
    const [replayInfo, setReplayInfo] = useState({
        id: '',
        mentions: ''
    })

    useImperativeHandle(cRef, () => ({
        // 暴露给父组件更新评论的方法
        updateData: (val) => {
            setPage(val)
            fetchData(val, MessageUrl, params)
            setCurrent(val)
        }
    }));

    // 获取评论数据
    let fetchData = async (page, url, params = {}) => {
        let { articleId } = params
        try {
            const result = await post(url, {
                page,
                articleId
            });
            if (result.data.errorCode === 0) {
                result.data.data.forEach(value => {
                    value.sub.sort((a, b) => {
                        return b.modifyOn - a.modifyOn
                    })
                })
                setMessages(result.data.data)
                setTotal(result.data.total)
            } else {
                message.error('留言数据获取失败 😖')
            }
        } catch (error) {
            throw error
            // message.error('数据获取失败 😖')
        }
    };

    // 页码改变回调
    let onPageChange = (current) => {
        setPage(current)
        setCurrent(current)
    }

    // 开启回复评论对话框
    let reply = (info) => {
        const [id, mentions] = info
        setVisible(true)
        setReplayInfo({
            id,
            mentions: `@${mentions}`
        })
    }

    // 子评论是否展示
    let handleShowSubMessage = (author) => {
        let _messages = messages.map(value => {
            if (value.author === author) {
                if (value.show) {
                    value.show = false
                } else {
                    value.show = true
                }
            }
            return value
        })
        setMessages(_messages)
    }

    // 回复留言
    let handleMessageReply = async () => {
        if (!messageInfo.author || !messageInfo.content) {
            message.warning('你还没输入内容呢 😫')
            return;
        }
        setSubmitting(true)
        try {
            let result = await post('/messages/addSubMessage', {
                messageId: replayInfo.id,
                ...messageInfo
            })
            if (result.data.errorCode === 0) {
                message.success('留言成功 🥰')
                fetchData(page, MessageUrl, params)
                setVisible(false)
                setSubmitting(false)
            } else {
                message.error('留言失败 😖')
            }
        } catch (error) {
            message.error('留言失败 😖')
        }
        setMessageInfo({
            author: '',
            content: ''
        })
    };

    // 回复评论
    let handleCommentReply = async () => {
        if (!messageInfo.author || !messageInfo.content) {
            message.warning('你还没输入内容呢 😫')
            return;
        }
        setSubmitting(true)
        try {
            let result = await post('/comments/addSubComment', {
                commentId: replayInfo.id,
                ...messageInfo
            })
            if (result.data.errorCode === 0) {
                message.success('评论成功 🥰')
                fetchData(page, MessageUrl, params)
                setVisible(false)
                setSubmitting(false)
            } else {
                message.error('评论失败 😖')
            }
        } catch (error) {
            message.error('评论失败 😖')
        }
        setMessageInfo({
            author: '',
            content: ''
        })
    };

    // 作者输入框改变事件
    let handleAuthorChange = e => {
        setMessageInfo({
            ...messageInfo,
            author: e.target.value
        })
    };

    // 内容输入框改变事件
    let handleContentChange = e => {
        setMessageInfo({
            ...messageInfo,
            content: e.target.value
        })
    };


    let handleCancel = () => {
        setVisible(false)
    }

    useEffect(() => {
        fetchData(page, MessageUrl, params)
    }, [page, MessageUrl, params]);

    return (
        <Container>

            {
                messages.length > 0 ?
                    (
                        <>
                            <MessageList
                                messages={messages}
                                total={total}
                                reply={reply}
                                handleShowSubMessage={handleShowSubMessage} />
                            <Modal
                                title="回复评论"
                                visible={visible}
                                footer={null}
                                onCancel={handleCancel}>
                                <Message
                                    handleContentChange={handleContentChange}
                                    handleAuthorChange={handleAuthorChange}
                                    params={params}
                                    handleMessageReply={handleMessageReply}
                                    handleCommentReply={handleCommentReply}
                                    submitting={submitting}
                                    content={messageInfo.content}
                                    author={messageInfo.author}
                                    mentions={replayInfo.mentions}
                                />
                            </Modal>
                            <Pagination
                                defaultCurrent={page}
                                defaultPageSize={5}
                                current={current}
                                onChange={onPageChange}
                                total={total}
                                style={paginationStyle}
                            />
                        </>
                    ) :
                    <Empty description={'暂无评论'} />
            }
        </Container>
    );
}

