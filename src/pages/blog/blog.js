import React, { useEffect, useState } from 'react'
import { Row, Col, Affix, Tabs, Tag } from 'antd'
import { Container, Middle, Right, Left, BlogItem, Classif } from './style'
import { Link } from 'react-router-dom'
import Character from 'components/Character/'
import { get } from 'utils/http.js'

const { CheckableTag } = Tag;

const { TabPane } = Tabs;

function callback (key) {
    console.log(key);
}

function handleChange (tag, checked) {
    console.log(tag, checked)
    // const { selectedTags } = this.state;
    // const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    // console.log('You are interested in: ', nextSelectedTags);
    // this.setState({ selectedTags: nextSelectedTags });
}

export default () => {
    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await get('/articles/findAll');
            const tags = await get('/tags/findAll')
            setData(result.data.data)
            setTags(tags.data.data[0].tags)
        };
        fetchData()
    }, []);

    return (
        <Container>
            <Row gutter={16} height={100}>
                <Col className="gutter-row" span={6}>
                    <Affix offsetTop={10}>
                        <Left>
                            <Character />
                        </Left>
                    </Affix>
                </Col>

                <Col className="gutter-row" span={12}>
                    <Middle>
                        {
                            data.map(value => {
                                return (
                                    <Link to={`/blog/${value.articleId}`} key={value.articleId}>
                                        <BlogItem>
                                            <h1>{value.title}</h1>
                                            <p>
                                                {value.desc}
                                            </p>
                                        </BlogItem>
                                    </Link>
                                )
                            })
                        }
                    </Middle>
                </Col>
                <Col className="gutter-row" span={6}>
                    <Affix offsetTop={10}>
                        <>
                            <Right>
                                <Tabs defaultActiveKey="1" onChange={callback}>
                                    <TabPane tab="最新文章" key="1">
                                        Content of Tab Pane 1
                                </TabPane>
                                    <TabPane tab="最热文章" key="2">
                                        Content of Tab Pane 2
                                </TabPane>
                                    <TabPane tab="推荐文章" key="3">
                                        Content of Tab Pane 3
                                </TabPane>
                                </Tabs>
                            </Right>
                            <Classif>
                                {
                                    // console.log(tags)
                                    tags.map(value => {
                                        return (
                                            <CheckableTag checked key={value} className="tag" onChange={checked => handleChange(value, checked)}>{value}</CheckableTag>
                                        )
                                    })
                                }
                            </Classif>
                        </>
                    </Affix>
                </Col>
            </Row>
        </Container>
    )
}
