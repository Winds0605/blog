import React from 'react'
import { Row, Col } from 'antd'
import {
    Person,
    LeftArea,
    RightArea,
    Describe,
    Introduction,
    IntroductionItem,
    PhotoWall,
    WallTitle,
} from './style'
import Character from 'components/Character/'
import Draw from 'components/Draw/'
import 'App.css'

export default () => {
    return (
        <>
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
            {/* <Banner src={banner} /> */}

            <Person>
                <Row gutter={16} height={100}>
                    <Col className="gutter-row" span={6}>
                        <LeftArea>
                            <Character />
                        </ LeftArea>
                    </Col>
                    <Col className="gutter-row" span={18}>
                        <RightArea>
                            <h1>Welcome To My World</h1>
                            <Describe>
                                <p>
                                    {/* 来自闽江学院，一名大四的学生。计控学院，软件工程，所学方向是Web前端<br />
                                    喜欢好吃的，喜欢电影、阅读、音乐，喜欢生活中一切美好的事物<br />
                                    讨厌等待，讨厌没有逻辑的人，讨厌出门时下雨，讨厌听音乐时网络差<br />
                                    特立独行，不好随波逐流<br />
                                    有时候会很抑郁，有时候会很阳光，或许取决于今天有没有吃饱饭<br />
                                    话题终结者，就算和喜欢的女生聊天也经常 "哈哈哈哈哈哈哈"<br />
                                    未来的梦想是：走遍世界的每一个角落，记录下所见的美好<br /> */}
                                    ...
                                </p>
                            </Describe>
                        </RightArea>
                    </Col>
                </Row>
            </Person>
            <WallTitle>记录生活中的一些照片...</WallTitle>

            <PhotoWall>
            </PhotoWall>
            {/* <Tail>
                <Row gutter={16} >
                    <Col className="gutter-row" span={8}>
                        <Timeline mode="alternate">
                            <Timeline.Item>Create the Blog</Timeline.Item>
                            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </Timeline.Item>
                            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        </Timeline>
                    </Col>
                    <Col className="gutter-row" span={16}>
                        <Message>
                            <MessageTip>留下你想说的话</MessageTip>
                            <MessageContainer>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <div style={{ textAlign: 'left' }}>
                                            <Avatar size="large" icon="user" />
                                            <UserName>用户1</UserName>
                                        </div>
                                        <UserText>这真是太棒了</UserText>
                                    </Col>
                                    <Col span={8}>
                                        <div style={{ textAlign: 'left' }}>
                                            <Avatar size="large" icon="user" />
                                            <UserName>用户2</UserName>
                                        </div>
                                        <UserText>设计 编程 摄影 没有足够的时间知识沉淀很难作出这种博客，向往的小伙伴们任重道远哦～</UserText>
                                    </Col>
                                    <Col span={8}>
                                        <div style={{ textAlign: 'left' }}>
                                            <Avatar size="large" icon="user" />
                                            <UserName>用户3</UserName>
                                        </div>
                                        <UserText>设计得好！</UserText>
                                    </Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={8}>
                                        <div style={{ textAlign: 'left' }}>
                                            <Avatar size="large" icon="user" />
                                            <UserName>用户1</UserName>
                                        </div>
                                        <UserText>这真是太棒了</UserText>
                                    </Col>
                                    <Col span={8}>
                                        <div style={{ textAlign: 'left' }}>
                                            <Avatar size="large" icon="user" />
                                            <UserName>用户2</UserName>
                                        </div>
                                        <UserText>设计 编程 摄影 没有足够的时间知识沉淀很难作出这种博客，向往的小伙伴们任重道远哦～</UserText>
                                    </Col>
                                    <Col span={8}>
                                        <div style={{ textAlign: 'left' }}>
                                            <Avatar size="large" icon="user" />
                                            <UserName>用户3</UserName>
                                        </div>
                                        <UserText>设计得好！</UserText>
                                    </Col>
                                </Row>
                            </MessageContainer>
                            <TextArea rows={5} />
                            <Button type="primary" style={{ float: 'left', marginTop: '10px' }}>提交留言</Button>
                            <More>更多留言<Icon type="right" /></More>
                        </Message>
                    </Col>
                </Row>
            </Tail> */}
            <Draw />
        </>
    )
}
