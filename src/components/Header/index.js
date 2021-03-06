import React from 'react'
// import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { Nav, Container, NavItem, AvatarContainer, Name, Desciption, IconArea } from './style'
import { MyIcon } from 'utils/util'
import ReactTooltip from 'react-tooltip'

import avatar from "assets/imgs/avatar.JPG"

import weixin from 'assets/imgs/weixin.JPG'
import weibo from 'assets/imgs/weibo.JPG'
import qq from 'assets/imgs/qq.JPG'



export default () => {
    return (
        <Container>
            <Nav>
                <Link to="/home"><NavItem>Home</NavItem></Link>
                <Link to="/article"><NavItem>Blog</NavItem></Link>
                <Link to="/movie"><NavItem>Movies</NavItem></Link>
            </Nav>
            <AvatarContainer src={avatar} />
            <IconArea >
                <a href="true" data-tip data-for='weixin'>
                    <MyIcon type="icon-weixinkaifa" style={{ fontSize: '24px', margin: '0 10px' }} data-html={true} />
                </a>
                <ReactTooltip id='weixin' type='dark' place="bottom" >
                    <img src={weixin} alt="" style={{ width: '100px', height: '140px' }} />
                </ReactTooltip>

                <a href="true" data-tip data-for='weibo'>
                    <MyIcon type="icon-weibo2" style={{ fontSize: '24px', margin: '0 10px' }} data-html={true} />
                </a>
                <ReactTooltip id='weibo' type='dark' place="bottom" >
                    <img src={weibo} alt="" style={{ width: '100px', height: '140px' }} />
                </ReactTooltip>

                <a href="true" data-tip data-for='qq'>
                    <MyIcon type="icon-QQ1" style={{ fontSize: '24px', margin: '0 10px' }} data-html={true} />
                </a>
                <ReactTooltip id='qq' type='dark' place="bottom" >
                    <img src={qq} alt="" style={{ width: '100px', height: '140px' }} />
                </ReactTooltip>
            </IconArea>
            <Name>风走了以后</Name>
            <Desciption>生活碎片、电影以及日志</Desciption>
        </Container>
    )
}
