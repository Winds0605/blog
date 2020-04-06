import styled from 'styled-components'

export const Container = styled.div`
    
    
    
    overflow:hidden;
    
`

export const Middle = styled.div`
    border-radius:2px;
    width:50%;
    background:white;
    margin:20px auto;
    padding:10px 10px;
    box-shadow: rgba(0,0,0,.2) 0 1px 10px 0px;
    &:hover {
        box-shadow: rgba(0,0,0,.3) 0 1px 10px 0px;
    }
    .ant-pagination {
        margin-bottom:20px;
    }
    .ant-empty {
        margin:50px 8px;
    }
`

export const Right = styled.div`
    height:300px;
    box-shadow: rgba(0,0,0,.2) 0 1px 10px 0px;
    &:hover {
        box-shadow: rgba(0,0,0,.3) 0 1px 10px 0px;
    }
    margin-top:20px;
    border-radius:5px;
`

export const BlogItem = styled.div`
    position:relative;
    margin-bottom:25px;
    padding:20px;
    border-radius:5px;
    color:#797979;

    .content{
        overflow:hidden;
        text-align:left;
        font-weight:600;
        p {
            margin-top:1em;
            margin-bottom:1em;
        }
    }

    .image {
        width:100%;
        img {
            width:100%;
        }
    }

    .desc {
        text-align:center;
        font-size:10px;
        font-weight:600;
        margin-bottom:10px;
        h1 {
            font-size: 25px;
            margin: 25px 0;
        }
        .tag {
            width:fit-content;
            display:inline-block;
            margin-right:10px;
            border-bottom: 1px solid #797979;
            cursor:pointer;
            &:hover {
                color:#000;
                border-bottom: 1px solid #000;
            }
        }
    }

    .footer{
        margin-top:20px;
        font-size: 12px;
        font-weight: 600;
        text-align:center;
        letter-spacing: 2px;
        color:#797979;
        border-bottom: 1px solid #eee;
        cursor:pointer;
        &:hover {
            color:#000;
        }
    }
`

export const Detail = styled.div`
    position:absolute;
    bottom:0;
`

export const Classif = styled.div`
    height:100px;
    box-shadow: rgba(0,0,0,.2) 0 1px 10px 0px;
    &:hover {
        box-shadow: rgba(0,0,0,.3) 0 1px 10px 0px;
    }
    border-radius:5px;
    padding:0 10px;
    margin-top:20px;
    text-align:left;
    .tag{
        margin:5px;
        background:#FAFAFA;
        border:1px solid #D9D9D9;
        color:#5C5C5C;
    }
`
