import React from 'react'
import { Cube, CubeWrap, CubeFace, CubeContainer, Controller, CubeImg, Indicators } from './style'
require('./style')

export default () => {
    return (
        <CubeContainer>
            <CubeWrap>
                <Controller className="controller" type="radio" name="cuber" id="1" defaultChecked={true} />
                <Controller className="controller" type="radio" name="cuber" id="2" defaultChecked={false} />
                <Controller className="controller" type="radio" name="cuber" id="3" defaultChecked={false} />
                <Controller className="controller" type="radio" name="cuber" id="4" defaultChecked={false} />
                <Controller className="controller" type="radio" name="cuber" id="5" defaultChecked={false} />
                <Controller className="controller" type="radio" name="cuber" id="6" defaultChecked={false} />
                <Cube className="cube">
                    <CubeFace className="front"><CubeImg alt="1.jpg" src={require('../../assets/imgs/1.jpg')} /></CubeFace>
                    <CubeFace className="back"><CubeImg alt="2.jpg" src={require('../../assets/imgs/2.jpg')} /></CubeFace>
                    <CubeFace className="left"><CubeImg alt="3.jpg" src={require('../../assets/imgs/3.jpg')} /></CubeFace>
                    <CubeFace className="right"><CubeImg alt="4.jpg" src={require('../../assets/imgs/4.jpg')} /></CubeFace>
                    <CubeFace className="top"><CubeImg alt="5.jpg" src={require('../../assets/imgs/5.jpg')} /></CubeFace>
                    <CubeFace className="bottom"><CubeImg alt="6.jpg" src={require('../../assets/imgs/6.jpg')} /></CubeFace>
                </Cube>
                <div className="cube_left">
                    <label htmlFor="6" className="cube_action"></label>
                    <label htmlFor="1" className="cube_action"></label>
                    <label htmlFor="2" className="cube_action"></label>
                    <label htmlFor="3" className="cube_action"></label>
                    <label htmlFor="4" className="cube_action"></label>
                    <label htmlFor="5" className="cube_action"></label>
                </div>
                <div className="cube_right">
                    <label htmlFor="2" className="cube_action"></label>
                    <label htmlFor="3" className="cube_action"></label>
                    <label htmlFor="4" className="cube_action"></label>
                    <label htmlFor="5" className="cube_action"></label>
                    <label htmlFor="6" className="cube_action"></label>
                    <label htmlFor="1" className="cube_action"></label>
                </div>
                <Indicators className="indicators">
                    <label htmlFor="1" className="indicator"></label>
                    <label htmlFor="2" className="indicator"></label>
                    <label htmlFor="3" className="indicator"></label>
                    <label htmlFor="4" className="indicator"></label>
                    <label htmlFor="5" className="indicator"></label>
                    <label htmlFor="6" className="indicator"></label>
                </Indicators>
            </CubeWrap>
        </CubeContainer>
    )
}
