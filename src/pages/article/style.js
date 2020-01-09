import styled from 'styled-components'

export const Container = styled.div`
    width:80%;
    text-align:left;
    min-height:600px;
    padding: 0 100px 50px;
    margin:30px auto 50px;
    border:1px solid #758184;
    border-radius:5px;
`

export const ArticleHeader = styled.div`
    height:100px;
    width:100%;
    margin:20px auto;
    text-align:center;
    border-bottom: 1px solid #e0dee3;
`

export const ArticleTitle = styled.div`
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
