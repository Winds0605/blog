import React, { useState, useRef } from 'react'
import { Drawer, Tooltip, Icon, Modal, Button, message } from 'antd'
import Comment from 'components/Comment/'
import Message from 'components/Message'
import { Draw } from './style'
import { post } from 'utils/http'

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1597339_u91q9e97qgo.js',
});

export default () => {
    const [visible, setVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [messageInfo, setMessageInfo] = useState({
        author: '',
        content: ''
    })
    const inputEl = useRef();
    const INITCOMMENT = 1;
    const MessageUrl = '/messages/findAll'

    // 提交留言
    let handleSubmit = async () => {
        if (!messageInfo.author || !messageInfo.content) {
            message.warning('你还没输入内容呢 😫')
            return;
        }
        setSubmitting(true)
        try {
            let res = await post('/messages/add', messageInfo)
            if (res.data.errorCode === 0) {
                message.success('留言成功 🥰')
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
        inputEl.current.updateData(INITCOMMENT, MessageUrl)
        setModalVisible(false)
        setSubmitting(false)
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

    let onClose = () => {
        setVisible(false)
    };

    let onOpen = () => {
        setVisible(true)
    };

    let showModal = () => {
        setModalVisible(true)
    };

    let hideModal = () => {
        setModalVisible(false)
    };
    return (
        <>
            <Draw>
                <Tooltip title="给我留言吧 :)">
                    <IconFont className="icon" type="icon-message1" onClick={onOpen} />
                </Tooltip>
                <Drawer
                    // title="留言板 😍"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    width={550}
                >
                    <Button type="primary" onClick={showModal} style={{ float: 'right', zIndex: '10' }}>
                        留言
                    </Button>
                    <Modal
                        title="写下你的留言"
                        footer={null}
                        onCancel={hideModal}
                        visible={modalVisible}
                    >
                        <Message
                            handleContentChange={handleContentChange}
                            handleAuthorChange={handleAuthorChange}
                            onSubmit={handleSubmit}
                            submitting={submitting}
                            content={messageInfo.content}
                            author={messageInfo.author} />
                    </Modal>
                    <Comment cRef={inputEl} MessageUrl={MessageUrl} />
                </Drawer>
            </Draw>
        </>
    )
}
