import styled from 'styled-components'

export const Container = styled.div`
    background-color:white;
    width:50%;
    margin:20px auto 0;
    overflow:hidden;
    min-height:600px;
    border-radius:3px;
    .btn{
        text-align:left;
        margin-left:40px;
    }
    .ant-pagination{
        margin:20px;
        text-align:center;
    }
`

export const Description = styled.div`
    width:100%;
    padding:60px;
    padding-bottom:10px;
    overflow:hidden;

    img {
        width:20%;
        float:left;
    }
    .desc{
        float: left;
        text-align: left;
        width: 60%;
        line-height: 3em;
        font-size: 12px;
        padding-left: 70px;
        margin-left: 70px;
        border-left: 1px solid #CECECE;
    }
    .desc > div{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const Introduction = styled.div`
    width:100%;
    padding:0 60px;
    height:100px;
    text-align:left;
    p {
        color: #888787;
        font-size: 12px;
        margin-top:10px;
    }
`

export const ModalContainer = styled.div`
    #basic .ant-form-item:nth-of-type(3){
        text-align:center;
    }
`
