import React from 'react'
import {
    HomeContainer,
    Introduction,
    IntroductionItem,
} from './style'
import Header from 'components/header'
import Water from 'components/water'
import Draw from 'components/draw'
import 'App.css'

export default () => {
    return (
        <HomeContainer>
            <Header></Header>
            <Introduction className="iconfot">
                <IntroductionItem>
                    <h1>Hey There, I'm Zephyr,</h1>
                    <p>based in FuJian, China.</p>
                </IntroductionItem>
                <IntroductionItem>
                    <h1>Just Another Front-end Web Developer.</h1>
                    <p>And still growing.</p>
                </IntroductionItem>
                <IntroductionItem>
                    <h1>Interested in photography</h1>
                    <p>I hope to take photos that everyone likes.<span role="img" aria-label="sheep">😝</span></p>
                </IntroductionItem>
            </Introduction>
            <Water />
            <Draw />
        </HomeContainer>
    )
}
