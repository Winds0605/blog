import styled from 'styled-components'

export const Introduction = styled.div`
    width:80%;
    margin:100px auto 100px;
    text-align:left;
    font-size:25px;
`
export const IntroductionItem = styled.div`
    h1{
        color: #444444
    }

    p{
        color: #CCCCCC
    }

    height:150px;
    width:100%;
`

export const Banner = styled.img`
    width:100%;
    height:100%;
`
export const CubeShow = styled.div`
    width:100%;
    height:500px;
`

export const Person = styled.div`
    height:400px;
    width:80%;
    margin:20px auto;
`

export const LeftArea = styled.div`
    height:400px;
    border-radius:5px;
    cursor:pointer;
    box-shadow: rgba(0,0,0,.2) 0 1px 10px 0px;
    &:hover {
        box-shadow: rgba(0,0,0,.3) 0 1px 10px 0px;
    }
`

export const RightArea = styled.div`
    height:400px;
    box-shadow: rgba(0,0,0,.2) 0 1px 10px 0px;
    border-radius:5px;
    font-family:monospace;
    &:hover {
        box-shadow: rgba(0,0,0,.3) 0 1px 10px 0px;
    }
`

export const Describe = styled.div`
    width:100%;
    margin-top:40px;
    p{
        font-family:'jdzhonyuanjian1e281948852104b';
        font-size:19px;
        line-height:35px;
    }
`



export const PhotoWall = styled.div`
    width:80%;
    height:500px;
    margin:30px auto 100px;
    box-shadow: rgba(0,0,0,.2) 0 1px 10px 0px;
    &:hover {
        box-shadow: rgba(0,0,0,.3) 0 1px 10px 0px;
    }
    border-radius:5px;
`

export const WallTitle = styled.h1`
    width:80%;
    margin:100px auto 0;
    font-size:40px;
    color:#758184;
    font-family:'jdzhonyuanjian1e281948852104b';
`

export const PhotoItem = styled.img`
    width:100%;
    height:100%;
`

