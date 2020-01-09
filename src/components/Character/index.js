import React from 'react'
import { Name, IconArea } from './style'
import { Avatar, Icon } from 'antd'
import avatar from "assets/imgs/avatar.JPG"

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1597339_u91q9e97qgo.js',
});

export default () => {
    return (
        <>
            <Avatar className="avatar" size={256} icon="user" src={avatar} style={{ marginTop: '20px' }} />
            <Name>Zephyr</Name>
            <IconArea >
                <IconFont type="icon-weixinkaifa" style={{ fontSize: '24px', margin: '0 10px' }} />
                <IconFont type="icon-weibo2" style={{ fontSize: '24px', margin: '0 10px' }} />
                <IconFont type="icon-QQ1" style={{ fontSize: '24px', margin: '0 10px' }} />
            </IconArea>
        </>
    )
}
