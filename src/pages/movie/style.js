import styled from 'styled-components'

export const Container = styled.div`
    width:80%;
    margin:20px auto;
    flex-wrap: wrap;
    display:flex;
    justify-content: space-between;
    .movie-item{
        height:250px;
        width:45%;
        margin-top:20px;
        float:left;
        text-align:left;
        font-size:12px;
        .ant-card-body{
            height:100%;
            padding:20px;
        }
        .text{
            padding:10px 0;
            display: flex;
            height: 100%;
            flex-direction: column;
        }
        img{
            height:100%;
            float:left;
            margin-right:10px;
        }
        .name{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .name,
        .type,
        .rate,
        .director,
        .country{
            flex:1;
        }
        .desc{
            flex:3;
            display:flex;
            align-items:center;
            justify-content: space-around;
            .btn{
                width:100px;
            }
        }
    }

    .more {
        margin-top:20px;
    }
`
