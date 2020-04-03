import styled from 'styled-components'

export const Container = styled.div`
    width:50%;
    margin:20px auto 0;
    background-color:white;
    overflow:hidden;
    border-radius:3px;
    .ant-pagination {
        margin:20px 0;
    }
`

export const WaterImg = styled.img`
    height:20%;
`

export const Article = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
    width: 100%;
    img{
        height:250px
    }

`

export const MovieItem = styled.div`
    width:35%
    margin:20px 0;
    cursor:pointer;
    
    .name{
        margin-top:10px;
        display:inline-block;
        color:#616161;
        width:70%;
    }
    .name:hover{   
        text-decoration: underline;
    }
`
