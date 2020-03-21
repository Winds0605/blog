import React, { useEffect, useState } from 'react'
import { Container } from './style'
import { Rate, Card, Tooltip, Popover, Button, message } from 'antd'
import { post } from 'utils/http'
import { movieAarryFormat } from 'utils/util'

export default () => {

    const [movie, setMovie] = useState([])
    const [displayMovieLength, setDisplayMovieLength] = useState(8)
    const [allMovieLength, setAllMovieLength] = useState(0)

    let loadData = async (length) => {
        try {
            const result = await post('/movies/findAll', {
                length
            })
            setMovie(result.data.data)
            // 设置所有电影长度
            setAllMovieLength(result.data.total)
            // 设置展示电影长度
            setDisplayMovieLength(result.data.data.length)
        } catch (error) {
            message.error('获取电影数据失败')
        }
    }

    let loadMore = () => {
        loadData(displayMovieLength + 8)
    }

    useEffect(() => {
        loadData(displayMovieLength)
    }, [displayMovieLength])

    return <>
        <Container>
            {
                movie.map(value => {
                    return (
                        <Card className="movie-item" key={value.movieId}>
                            <img src={value.image} alt={value.name} />
                            <div className="text">
                                <Tooltip placement="topLeft" title={value.name}>
                                    <div className="name">影名：<span>{value.name}</span></div>
                                </Tooltip>
                                <div className="director">导演：<span>{value.director}</span></div>
                                <div className="country">国家：<span>{movieAarryFormat(value.country)}</span></div>
                                <div className="type">类型：<span>{movieAarryFormat(value.type)}</span></div>
                                <div className="rate">评分：<Rate allowHalf disabled defaultValue={7.5} /></div>
                                <div className="desc">
                                    <Popover placement="bottom" content={value.Introduction} trigger="click">
                                        <Button className="btn">简介</Button>
                                    </Popover>
                                    <Popover placement="bottom" content={value.review} trigger="click">
                                        <Button className="btn">影评</Button>
                                    </Popover>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
            {
                displayMovieLength === allMovieLength ? <></> : (<Button block className="more" onClick={loadMore}>加 载 更 多</Button>)
            }
        </Container>
    </>
}
