import styled from 'styled-components'

export const Container = styled.div`
    width:80%;
    margin:100px auto;
`

export const Left = styled.div`
    border:1px solid #758184;
    border-radius:5px;
`

export const Middle = styled.div`

`

export const Right = styled.div`
    height:300px;
    border:1px solid #758184;
    border-radius:5px;
`

export const BlogItem = styled.div`
    position:relative;
    height:250px;
    margin-bottom:40px;
    padding:20px;
    border:1px solid #758184;
    border-radius:5px;

    p{
        text-indent:2em;
        text-align:left;
        color:grey;
    }

    .split{
        display:inline-block;
        width:2px;
        height:20px;
        background-color:black;
    }
`

export const Detail = styled.div`
    position:absolute;
    bottom:0;
`

export const Classif = styled.div`
    height:100px;
    border:1px solid #758184;
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
