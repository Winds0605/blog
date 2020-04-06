import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from 'components/header/index'
import { Container, Article, MovieItem } from './style'
import { message, Pagination, Tabs, Empty } from 'antd'
import { getPageStartAndEnd, scrollAnimation } from 'utils/util'
import { get } from 'utils/http'
// 路由
import { MOfindAll } from 'route/movie'
import { TAmovieTagsfindAll } from 'route/tags'

const { TabPane } = Tabs;

export default () => {
    const [movies, setMovies] = useState([])
    const [currentTabsMovie, setCurrentTabsMovie] = useState([])
    const [currentTabsDisplayMovie, setCurrentTabsDisplayMovie] = useState([])
    const [tags, setTags] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const INIT_PAGE_SIZE = 10
    const SCROLL_DISTANCE = 380

    let loadData = async (length) => {
        let movies;
        let tags;
        try {
            movies = await get(MOfindAll)
            tags = await get(TAmovieTagsfindAll)
        } catch (error) {
            message.error('获取电影数据失败')
        }
        setTags(["全部", ...tags.data.data.map(value => value.type)])

        // 全部电影数据
        setMovies(movies.data.data)
        // 当前tab所有电影数据
        setCurrentTabsMovie(movies.data.data)
        // 当前tab展示电影数据
        setCurrentTabsDisplayMovie(movies.data.data.slice(0, INIT_PAGE_SIZE))
        // 设置所有电影长度
        setTotal(movies.data.total)
    }

    const tabSwitch = (current) => {
        const { start, end } = getPageStartAndEnd(page, pageSize)

        if (current === '全部') {
            setTotal(movies.length)
            setCurrentTabsMovie(movies)
            setCurrentTabsDisplayMovie(movies.slice(start, end))
            return
        }
        const display = movies.filter(value => {
            return value.type.includes(current)
        })
        setTotal(display.length)
        setCurrentTabsMovie(display)
        setCurrentTabsDisplayMovie(display.slice(start, end))
    }

    const onShowSizeChange = (current, size) => {
        setPageSize(size)
        const { start, end } = getPageStartAndEnd(current, size)
        setCurrentTabsDisplayMovie(currentTabsMovie.slice(start, end))
        scrollAnimation(document.documentElement.scrollTop || document.body.scrollTop, SCROLL_DISTANCE)
    }

    const onPageChange = (page, pageSize) => {
        setPage(page)
        const { start, end } = getPageStartAndEnd(page, pageSize)
        setCurrentTabsDisplayMovie(currentTabsMovie.slice(start, end))
        scrollAnimation(document.documentElement.scrollTop || document.body.scrollTop, SCROLL_DISTANCE)
    }

    const showTotal = total => {
        return `Total ${total} items`;
    }


    useEffect(() => {
        loadData()
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Tabs defaultActiveKey="1" tabPosition={'top'} onChange={tabSwitch}>
                    {
                        tags.map(value => (
                            <TabPane tab={value} key={value}>
                                <Article>
                                    {
                                        currentTabsDisplayMovie.length > 0 ? currentTabsDisplayMovie.map(value => {
                                            return (

                                                <MovieItem key={value.name}>
                                                    <Link to={`/movie/${value.movieId}`}>
                                                        <img src={value.image} alt={value.name} />
                                                        <div className="text">
                                                            <div className="name"><span>{value.name}</span></div>
                                                        </div>
                                                    </Link>
                                                </MovieItem>
                                            )
                                        }) : <Empty />
                                    }
                                </Article>
                            </TabPane>
                        )
                        )
                    }
                </Tabs>
                {
                    currentTabsDisplayMovie.length > 0 ? <Pagination
                        size="small"
                        showSizeChanger
                        showQuickJumper
                        total={total}
                        defaultPageSize={10}
                        onChange={onPageChange}
                        showTotal={showTotal}
                        pageSizeOptions={['10', '20', '30']}
                        onShowSizeChange={onShowSizeChange}
                    /> : null
                }
            </Container>
        </>
    )
}
