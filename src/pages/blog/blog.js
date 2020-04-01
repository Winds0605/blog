import React, { useEffect, useState, useRef } from 'react'
import { Container, Middle, BlogItem } from './style'
import { Tabs, Pagination, Empty } from 'antd'
import Header from 'components/Header'
import { Link } from 'react-router-dom'
import { get } from 'utils/http.js'
import { formatDate, scrollAnimation, getPageStartAndEnd } from 'utils/util'

const { TabPane } = Tabs;

export default () => {
    const [articles, setArticles] = useState([])
    const [displayArticles, setDisplayArticles] = useState([])
    const [currentDisplayArticles, setCurrentDisplayArticles] = useState([])
    const [tags, setTags] = useState([]);
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(5)


    const INIT_PAGE_SIZE = 5
    const SCROLL_DISTANCE = 380
    const article = useRef()

    const loadData = async () => {
        let result = await get('/articles/findAll');
        let tags = await get('/tags/articleTasfindAll')
        setTotal(result.data.total)
        // 全部数据
        setArticles(result.data.data)
        // 当前标签的数据
        setDisplayArticles(result.data.data)
        // 当前标签展示的数据
        setCurrentDisplayArticles(result.data.data.slice(0, INIT_PAGE_SIZE))

        tags = tags.data.data.map(value => {
            return value.type
        })
        setTags(['全部', ...tags])
    }

    const tabSwitch = (current) => {
        const { start, end } = getPageStartAndEnd(page, pageSize)

        if (current === '全部') {
            setTotal(articles.length)
            setDisplayArticles(articles)
            setCurrentDisplayArticles(articles.slice(start, end))
            return
        }
        const display = articles.filter(value => {
            return value.tag === current
        })
        setTotal(display.length)
        setDisplayArticles(display)
        setCurrentDisplayArticles(display.slice(start, end))
    }

    const onShowSizeChange = (current, size) => {
        setPageSize(size)
        const { start, end } = getPageStartAndEnd(current, size)
        setCurrentDisplayArticles(displayArticles.slice(start, end))
        scrollAnimation(document.documentElement.scrollTop || document.body.scrollTop, SCROLL_DISTANCE)
    }

    const onPageChange = (page, pageSize) => {
        setPage(page)
        const { start, end } = getPageStartAndEnd(page, pageSize)
        setCurrentDisplayArticles(displayArticles.slice(start, end))
        scrollAnimation(document.documentElement.scrollTop || document.body.scrollTop, SCROLL_DISTANCE)
    }

    const showTotal = total => {
        return `Total ${total} items`;
    }


    useEffect(() => {
        loadData()
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Middle ref={article}>
                    <Tabs defaultActiveKey="1" tabPosition={'top'} onChange={tabSwitch}>
                        {
                            tags.map(value => (
                                <TabPane tab={value} key={value}>
                                    {
                                        currentDisplayArticles.length > 0 ?
                                            (currentDisplayArticles.map(value => {
                                                return (
                                                    <BlogItem key={value.articleId}>
                                                        <div className="desc">
                                                            <span className="tag">{value.tag}</span>
                                                            <span className="time">{formatDate(value.modifyOn, 'yyyy-MM-dd')}</span>
                                                            <Link to={`/blog/${value.articleId}`}>
                                                                <h1>{value.title}</h1>
                                                            </Link>
                                                        </div>
                                                        <div className="image">
                                                            <img src={value.banner} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                {value.desc}
                                                            </p>
                                                        </div>
                                                        <Link to={`/blog/${value.articleId}`} key={value.articleId}>
                                                            <div className="footer">
                                                                <p>- 阅读全文 -</p>
                                                            </div>
                                                        </Link>
                                                    </BlogItem>
                                                )
                                            }))
                                            : <Empty />
                                    }
                                </TabPane>
                            )
                            )
                        }
                    </Tabs>

                    {
                        currentDisplayArticles.length > 0 ?
                            <Pagination
                                size="small"
                                showSizeChanger
                                showQuickJumper
                                total={total}
                                defaultPageSize={5}
                                onChange={onPageChange}
                                showTotal={showTotal}
                                pageSizeOptions={['5', '10', '15', '20']}
                                onShowSizeChange={onShowSizeChange}
                            /> : null
                    }
                </Middle>
            </Container >
        </>

    )
}
