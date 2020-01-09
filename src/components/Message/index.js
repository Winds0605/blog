import React from 'react'
import { Form, Input, Button } from 'antd'
const { TextArea } = Input

export default ({ handleContentChange, handleAuthorChange, onSubmit, submitting, content, author, mentions }) => {
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
                            <TextArea placeholder="留下你的昵称 😉" onChange={handleContentChange} value={content} />
                        </Form.Item>
                    )
            }
            <Form.Item>
                <Input placeholder="留下你的昵称 😉" onChange={handleAuthorChange} value={author} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    发表留言
        </Button>
            </Form.Item>
        </>
    )
}
