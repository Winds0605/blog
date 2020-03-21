import React from 'react'
import { Name, IconArea, Container } from './style'
import { Avatar, Icon } from 'antd'
import ReactTooltip from 'react-tooltip'

import avatar from "assets/imgs/avatar.JPG"
import weixin from 'assets/imgs/weixin.JPG'
import weibo from 'assets/imgs/weibo.JPG'
import qq from 'assets/imgs/qq.JPG'


const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1597339_u91q9e97qgo.js',
});


export default () => {
    return (
        <Container>
            <Avatar className="avatar" size={256} icon="user" src={avatar} style={{ marginTop: '20px' }} />
            <Name>Zephyr</Name>
            <IconArea >
                <a href="true" data-tip data-for='weixin'>
                    <IconFont type="icon-weixinkaifa" style={{ fontSize: '24px', margin: '0 10px' }} data-html={true} />
                </a>
                <ReactTooltip id='weixin' type='dark' place="bottom" >
                    <img src={weixin} alt="" style={{ width: '100px', height: '140px' }} />
                </ReactTooltip>

                <a href="true" data-tip data-for='weibo'>
                    <IconFont type="icon-weibo2" style={{ fontSize: '24px', margin: '0 10px' }} data-html={true} />
                </a>
                <ReactTooltip id='weibo' type='dark' place="bottom" >
                    <img src={weibo} alt="" style={{ width: '100px', height: '140px' }} />
                </ReactTooltip>

                <a href="true" data-tip data-for='qq'>
                    <IconFont type="icon-QQ1" style={{ fontSize: '24px', margin: '0 10px' }} data-html={true} />
                </a>
                <ReactTooltip id='qq' type='dark' place="bottom" >
                    <img src={qq} alt="" style={{ width: '100px', height: '140px' }} />
                </ReactTooltip>
            </IconArea>
        </Container>
    )
}
