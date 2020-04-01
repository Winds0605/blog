import styled from 'styled-components'

export const Container = styled.div`
    height:400px;
    box-shadow: rgba(0,0,0,.2) 0 1px 10px 0px;
    &:hover {
        box-shadow: rgba(0,0,0,.3) 0 1px 10px 0px;
    }
    border-radius:5px;
`

export const Name = styled.div`
    width:100%;
    margin-top:15px;
    text-align:center;
    font-size:25px;
    font-family:monospace;
`

export const IconArea = styled.div`
    width:100%;
    height:50px;
    margin:15px 0px;
`
