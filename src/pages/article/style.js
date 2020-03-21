import styled from 'styled-components'

export const Container = styled.div`
    overflow:hidden;
    width:80%
    margin:0 auto;
    padding:0 5px;
`

export const ArticleContainer = styled.div`
    text-align:left;
    float:left;
    width:75%;
    padding: 0 100px 50px;
    margin:30px auto 50px;
    margin-right:50px;
    box-shadow: rgba(0,0,0,.2) 0 1px 10px 0px;
    border-radius:5px;
`

export const Sider = styled.div`
    margin-top:30px;
    text-align:left;
    float:right;
    width:20%;
    .ant-anchor-link:hover{
        background:#EBEDEF;
        color:black;
        white-space:normal;
        word-wrap:break-word; 
        word-break:break-all;
    }
    h2 {
        font-size:20px;
        color:#8D9CAA;
    }
`

export const LinkContainer = styled.div`
    &.level1 .ant-anchor-link-title{
        color:black;
        font-size:16px;
        font-weight:600;
    }

    &.level2 .ant-anchor-link-title{
        padding-left:30px;
        color:rgba(51,51,51);
        font-size:14px;
        font-weight:normal;
    }

    &.level2 .ant-anchor-link-title::before{
        content:" ";
        width:5px;
        height:5px;
        border-radius:50%;
        position:absolute;
        left:8%;
        top:50%;
        transform:translateY(-50%);
        background:rgba(51,51,51)
    }
`

export const ArticleHeader = styled.div`
    width:100%;
    padding:10px 0;
    margin:10px auto;
    text-align:center;
    border-bottom: 1px solid #e0dee3;
`

export const ArticleTitle = styled.div`
    margin-top:20px;
    font-size:40px
`
export const ArticleInfo = styled.div`
    height: 40px;
    padding-top: 10px;
    color:#9B9B9B;
    font-size:12px;

    .views,.tag{
        margin-left:20px;
    }
`

export const CommentContainer = styled.div`

    h1 {
        text-align: center;
        color: #8D9CAA;
        font-size: 20px;
    }
    margin-top:50px;
    position:relative;
    overflow:hidden;
    padding-bottom: 50px;
    width:100%;
    height:auto;

    .commentArea{
        display:flex;
        align-items:center;
        .avatar {
            float:left;
        }
        .send{
            float:right;
        }
    }
`
