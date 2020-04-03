import React, { useState, useEffect } from 'react'
import { Comment, Avatar, Modal, Input, Form, Pagination, message } from 'antd'
import { CommentContainer } from './style'
import { formatDate } from 'utils/util'
import { MCaddSubComment } from 'route/movieComments'
import { post } from 'utils/http'

const { TextArea } = Input

const ExampleComment = ({ children, comment, toggleComment, showModal }) => (
    <Comment
        actions={
            toggleComment ? [
                <span key="comment-nested-reply-to" onClick={showModal}>回复</span>,
                <span key="comment-nested-reply-to" onClick={toggleComment}>{comment.sub && comment.sub.length > 0 ? (comment.show ? '收起' : `查看${comment.sub.length}条评论`) : null}</span>
            ] : null
        }
        author={comment.author}
        avatar={
            <Avatar
                src={comment.avatar}
                alt="author"
            />
        }
        content={
            <p>
                {comment.content}
            </p>
        }
        datetime={<span>{formatDate(comment.modifyOn, "yyyy-MM-dd hh:mm:ss")}</span>}
    >
        {comment.show ? children : null}
    </Comment>
);

export default ({ value, total, page, onPageChange, commentUpdateCallback }) => {
    const [visible, setVisible] = useState(false)
    const [commentList, setCommentList] = useState([])
    const [currentReplyAuthor, setCurrentReplyAuthor] = useState('')
    const [currentCommentID, setcurrentCommentID] = useState('')
    const [formInfo, setFormInfo] = useState({
        author: '',
        content: ''
    })

    const showModal = (author, id) => {
        setVisible(true)
        setCurrentReplyAuthor(`@${author}`)
        setcurrentCommentID(id)
    }

    const layout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 21 },
    };

    const handleCommit = async () => {
        if (!formInfo.author || !formInfo.content) {
            message.warn('评论未完善')
        } else {
            const result = await post(MCaddSubComment, {
                commentId: currentCommentID,
                ...formInfo
            })
            if (result.data.code !== 200) {
                message.error(result.data.msg || '请求数据失败')
            } else {
                message.success('回复成功')
                setVisible(false)
                commentUpdateCallback()
            }
        }
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const nameChange = (e) => {
        setFormInfo({
            ...formInfo,
            author: e.target.value
        })
    }

    const toggleComment = (item) => {
        setCommentList(commentList.map(i => {
            if (item.commentId === i.commentId) {
                i.show = i.show ? false : true
            }
            return i
        }))
    }

    const contentChange = (e) => {
        setFormInfo({
            ...formInfo,
            content: e.target.value
        })
    }

    useEffect(() => {
        setCommentList(value)
    }, [value])

    return (
        <CommentContainer>
            {
                commentList && commentList.length > 0 ? commentList.map(item => (
                    <ExampleComment comment={item} showModal={showModal.bind(this, item.author, item.commentId)} toggleComment={toggleComment.bind(this, item)} key={item.modifyOn}>
                        {
                            item.sub && item.sub.length > 0 ? item.sub.map(subItem => (
                                <ExampleComment comment={subItem} key={item.modifyOn} />
                            )) : null
                        }
                    </ExampleComment>
                )
                ) : null
            }
            <Pagination
                defaultCurrent={page}
                defaultPageSize={5}
                onChange={onPageChange}
                total={total}
            />
            {/* 子评论模态框 */}
            <Modal
                title="回复评论"
                okText="提交回复"
                cancelText="取消"
                visible={visible}
                closable={false}
                onOk={handleCommit}
                onCancel={handleCancel}
            >
                <Form
                    {...layout}
                    name="nest-messages"
                >
                    <Form.Item
                        label="昵称"
                        name="name"
                    >
                        <Input onChange={nameChange} placeholder="请输入你的昵称" />
                    </Form.Item>

                    <Form.Item
                        label="内容"
                        name="content"
                    >
                        <TextArea rows={4} onChange={contentChange} placeholder={currentReplyAuthor ? currentReplyAuthor : '请输入评论内容'} />
                    </Form.Item>
                </Form>
            </Modal>
        </CommentContainer>
    )
}
