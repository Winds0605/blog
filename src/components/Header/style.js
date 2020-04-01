import styled from 'styled-components'



export const Container = styled.div`
    position:relative;
    border-radius:2px;
    height:300px;
    width:50%;
    margin:50px auto 0;
    top:0;
    line-height:70px;
    background-color:white;
`

export const Nav = styled.ul`
    margin:auto;
    height:50px;
    line-height:50px;
    padding:0;
    width:fit-content;
`

export const NavItem = styled.li`
    float:left;
    color:black;
    list-style:none;
    margin:0 20px;
    cursor:pointer;
    color:black;
    &:hover {
        text-decoration:underline
        color: black;
    }
`

export const AvatarContainer = styled.img`
    height:100px;
    width:100px;
    margin-top:20px
    border-radius:50%;
`

export const Name = styled.span`
    display:block;
    font-size:20px;
    text-align:center;
    height:50px;
    line-height:50px;
    font-weight:900;
    font-family:"Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif
`

export const Desciption = styled.span`
    font-size:12px;
    display:block;
    padding:0;
    color: #5a5a5a;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.09);
    line-height: 1em;
`

export const IconArea = styled.div`
    width:100%;
    height:50px;
    margin:0;
`





