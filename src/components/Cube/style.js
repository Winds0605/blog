import styled, { keyframes } from 'styled-components'

const entrance = keyframes`
    from {
        transform: rotateX(-225deg) rotateY(-225deg);
    }
`


const spin = keyframes`
    from {
        transform: rotateX(45deg) rotateY(45deg);
    }
    to {
        transform: rotateX(405deg) rotateY(765deg);
    }
`

export const CubeContainer = styled.div`
    width: 600px;
    height: 600px;
    position: absolute;
    transition: all .5s ease;
    transform: scale(0.25);
    float:left;
    
    &:hover {
        transform: scale(1);
    }
    &:hover .cube{
        animation: ${entrance} .5s ease;
    }

    &:hover .indicators{
        opacity: 1;
    }

    &:hover .controller:nth-of-type(1):checked ~ .cube_left .cube_action:nth-of-type(1), 
    &:hover .controller:nth-of-type(1):checked ~ .cube_right .cube_action:nth-of-type(1){
        display: block;
    }
    &:hover .controller:nth-of-type(2):checked ~ .cube_left .cube_action:nth-of-type(2),
    &:hover .controller:nth-of-type(2):checked ~ .cube_right .cube_action:nth-of-type(2){
        display: block;
    }
    &:hover .controller:nth-of-type(3):checked ~ .cube_left .cube_action:nth-of-type(3),
    &:hover .controller:nth-of-type(3):checked ~ .cube_right .cube_action:nth-of-type(3){
        display: block;
    }
    &:hover .controller:nth-of-type(4):checked ~ .cube_left .cube_action:nth-of-type(4),
    &:hover .controller:nth-of-type(4):checked ~ .cube_right .cube_action:nth-of-type(4){
        display: block;
    }
    &:hover .controller:nth-of-type(5):checked ~ .cube_left .cube_action:nth-of-type(5),
    &:hover .controller:nth-of-type(5):checked ~ .cube_right .cube_action:nth-of-type(5){
        display: block;
    }
    &:hover .controller:nth-of-type(6):checked ~ .cube_left .cube_action:nth-of-type(6),
    &:hover .controller:nth-of-type(6):checked ~ .cube_right .cube_action:nth-of-type(6){
        display: block;
    }
`

export const Cube = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: all .5s ease;
    animation: ${spin} 10s linear infinite;
    
    .front {
        transform: translateZ(75px);
    }
    
    .back {
        transform: rotateX(180deg) translateZ(75px);
    }
    
    .left {
        transform: rotateY(-90deg) translateZ(75px);
    }
    
    .right {
        transform: rotateY(90deg) translateZ(75px);
    }
    
    .top {
        transform: rotateX(90deg) translateZ(75px);
    }
    
    .bottom {
        transform: rotateX(-90deg) translateZ(75px);
    }
`

export const Indicators = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: -80px;
    padding: 20px;
    text-align: center;
    opacity:0;
    transition: opacity .3s;

    .indicator{
        background-color: #433e3e;
        border-radius: 50%;
        cursor: pointer;
        display: inline-block;
        width: 14px;
        height: 14px;
        margin: 6px;
        opacity: .15;
    }
`

export const Controller = styled.input`
    :nth-of-type(1):checked ~ .cube{
        transform: translateZ(-75px);
    }
    :nth-of-type(2):checked ~ .cube{
        transform: translateZ(-75px) rotateX(-180deg) ;
    }
    :nth-of-type(3):checked ~ .cube{
        transform: translateZ(-75px) rotateY(90deg) ;
    }
    :nth-of-type(4):checked ~ .cube{
        transform: translateZ(-75px) rotateY(-90deg) ;
    }
    :nth-of-type(5):checked ~ .cube{
        transform: translateZ(-75px) rotateX(-90deg) ;
    }
    :nth-of-type(6):checked ~ .cube{
        transform: translateZ(-75px) rotateX(90deg) ;
    }

    :nth-of-type(1):checked ~ .indicators .indicator:nth-of-type(1){ opacity: 1; }
    :nth-of-type(2):checked ~ .indicators .indicator:nth-of-type(2){ opacity: 1; }
    :nth-of-type(3):checked ~ .indicators .indicator:nth-of-type(3){ opacity: 1; }
    :nth-of-type(4):checked ~ .indicators .indicator:nth-of-type(4){ opacity: 1; }
    :nth-of-type(5):checked ~ .indicators .indicator:nth-of-type(5){ opacity: 1; }
    :nth-of-type(6):checked ~ .indicators .indicator:nth-of-type(6){ opacity: 1; }
`

export const CubeWrap = styled.div`
    width: 150px;
    height: 150px;
    perspective: 1000px;
    user-select: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .cube_left .cube_action{
        left: -75px;
        top: 50%;
        transform: translateY(-50%);
    }
    .cube_right .cube_action{
        right: -75px;
        top: 50%;
        transform: translateY(-50%);
    }
    .cube_action{
        background-color: #fafafa;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        width: 40px;
        height: 40px;
        opacity: 0.15;
        position: absolute;
        transition: opacity 0.5s ease;
        z-index: 5;
    }

    .cube_action:hover{
        opacity: 1;
    }
    
    .cube_action::before{
        border-bottom: 4px solid #111;
        border-right: 4px solid #111;
        content: '';
        display: block;
        height: 25%;
        left: 50%;
        position: absolute;
        top: 50%;
        width: 25%;
        transform: translate(-70%, -50%) rotate(-45deg);
    }

    .cube_left .cube_action::before{
        transform: translate(-40%, -50%) rotate(135deg);
    }

    .controller{
        display: none;
    }
`

export const CubeFace = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    opacity: 0.9;
    border: 1px solid #ccc;
`

export const CubeImg = styled.img`
    width: 100%;
    height: 100%;
`
