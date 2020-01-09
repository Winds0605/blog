import React from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import { Nav, Container, NavItem } from './style'

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1597339_8qf8urtamts.js',
});

export default () => {
    return (
        <Container>
            <IconFont type="icon-Wind" style={{ fontSize: '35px', margin: '0 10px', float: 'left', lineHeight: '70px' }} />
            <Nav>
                <NavItem><Link style={{ color: 'black' }} to="/home">Home</Link></NavItem>
                <NavItem><Link style={{ color: 'black' }} to="/blog">Blog</Link></NavItem>
                <NavItem>Movies</NavItem>
                <NavItem>About</NavItem>
            </Nav>
        </Container>
    )
}
