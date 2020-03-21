import React from 'react'
import { Form, Input, Button } from 'antd'
const { TextArea } = Input

export default ({ handleContentChange, handleAuthorChange, handleMessageReply, handleCommentReply, submitting, content, author, mentions, params }) => {
    return (
        <>
            {
                mentions ?
                    (
                        <Form.Item>
                            <TextArea placeholder={mentions} onChange={handleContentChange} value={content} />
                        </Form.Item>
                    ) :
                    (
                        <Form.Item>
                            <TextArea placeholder="留下你想说的话 😉" onChange={handleContentChange} value={content} />
                        </Form.Item>
                    )
            }
            <Form.Item>
                <Input placeholder="留下你的昵称 😉" onChange={handleAuthorChange} value={author} />
            </Form.Item>
            <Form.Item>
                {
                    params ? (
                        <Button htmlType="submit" loading={submitting} onClick={handleCommentReply} type="primary">
                            发表留言
                        </Button>
                    ) : (
                            <Button htmlType="submit" loading={submitting} onClick={handleMessageReply} type="primary">
                                发表留言
                            </Button>
                        )
                }

            </Form.Item>
        </>
    )
}
