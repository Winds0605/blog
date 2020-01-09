import React, { useState, useEffect, useImperativeHandle } from 'react'
import { Comment, List, Pagination, message, Modal, Icon } from 'antd';
import Message from 'components/Message'
import { post } from 'utils/http'
import { formatDate } from 'utils/util'
import { StyleRoot } from 'radium'
import { styles } from './style'

// 子评论组件
const SubComment = (comments) => {
    if (comments.subComment.length > 0) {
        const comment = comments.subComment
        return (
            comment.map(value => {
                return (
                    <Comment
                        author={value.author}
                        avatar={value.avatar}
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
const CommentList = ({ comments, total, reply, handleShowSubComment }) => {
    return (
        <List
            dataSource={comments}
            header={`Has ${total} ${total > 1 ? 'replies' : 'reply'}`}
            itemLayout="horizontal"
            renderItem={(props) => (
                <Comment
                    actions={[
                        <span key="comment-nested-reply-to" onClick={reply.bind(this, [props.commentId, props.author])}>
                            <Icon type="edit" style={{ marginRight: '5px' }} />回复
                        </span>,
                        <span onClick={handleShowSubComment.bind(this, props.author)}>
                            {props.subComment.length > 0 && !props.show ? `查看${props.subComment.length}条评论` :
                                props.subComment.length > 0 ? '收起评论' : ''}
                        </span>
                    ]}
                    author={props.author}
                    avatar={props.avatar}
                    content={props.content}
                    datetime={formatDate(props.modifyOn, 'yyyy年MM月dd日 hh:mm:ss')}
                >
                    {props.show ?
                        (
                            <StyleRoot>
                                <SubComment {...props} style={styles.bounce} />
                            </StyleRoot>
                        ) : null}
                </Comment>

            )}
        />
    )
}

export default ({ cRef }) => {
    const [visible, setVisible] = useState(false)
    const [comments, setComments] = useState([])
    const [page, setPage] = useState(1)
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState(0)
    const [submitting, setSubmitting] = useState(false)
    const [commentInfo, setCommentInfo] = useState({
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
            fetchData(val)
            setCurrent(val)
        }
    }));

    // 获取评论数据
    let fetchData = async (page) => {
        try {
            const result = await post('/comments/findAll', { page: page });
            if (result.data.errorCode === 0) {
                setComments(result.data.data)
                setTotal(result.data.total)
            } else {
                message.error('评论数据获取失败 😖')
            }
        } catch (error) {
            message.error('评论数据获取失败 😖')
        }


    };

    // 页码改变回调
    let onPageChange = (current, pageSize) => {
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
    let handleReplay = (author) => {
        let _comments = comments.map(value => {
            if (value.author === author) {
                if (value.show) {
                    value.show = false
                } else {
                    value.show = true
                }

            }
            return value
        })
        setComments(_comments)
        // setShowSubComment(!showSubComment)
    }

    // 回复评论
    let handleReply = async () => {
        if (!commentInfo.author || !commentInfo.content) {
            message.warning('你还没输入内容呢 😫')
            return;
        }
        setSubmitting(true)
        try {
            let result = await post('/comments/addSubComment', {
                commentId: replayInfo.id,
                ...commentInfo
            })
            if (result.data.errorCode === 0) {
                message.success('留言成功 🥰')
            } else {
                message.error('留言失败 😖')
            }
        } catch (error) {
            message.error('留言失败 😖')
        }
        setCommentInfo({
            author: '',
            content: ''
        })
        fetchData(page)
        setVisible(false)
        setSubmitting(false)
    };

    // 作者输入框改变事件
    let handleAuthorChange = e => {
        setCommentInfo({
            ...commentInfo,
            author: e.target.value
        })
    };

    // 内容输入框改变事件
    let handleContentChange = e => {
        setCommentInfo({
            ...commentInfo,
            content: e.target.value
        })
    };


    let handleCancel = () => {
        setVisible(false)
    }

    useEffect(() => {
        fetchData(page)
    }, [page]);

    return (
        <div>
            {
                comments.length > 0 &&
                <CommentList
                    comments={comments}
                    total={total}
                    reply={reply}
                    handleShowSubComment={handleReplay} />}
            <Modal
                title="回复评论"
                visible={visible}
                footer={null}
                onCancel={handleCancel}>
                <Message
                    handleContentChange={handleContentChange}
                    handleAuthorChange={handleAuthorChange}
                    onSubmit={handleReply}
                    submitting={submitting}
                    content={commentInfo.content}
                    author={commentInfo.author}
                    mentions={replayInfo.mentions}
                />
            </Modal>
            <Pagination
                defaultCurrent={page}
                defaultPageSize={5}
                current={current}
                onChange={onPageChange}
                total={total}
                style={{ textAlign: 'center', margin: '10px 0px' }}
            />
        </div>
    );
}

