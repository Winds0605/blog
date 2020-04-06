import React, { useEffect, useRef, useState } from 'react'
import { WaterContainer } from './style'
import { post } from 'utils/http'
import { message } from 'antd'

const data = [
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_1.jpg',
        width: '673',
        height: '449'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_2.jpg',
        width: '673',
        height: '405'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_3.jpg',
        width: '675',
        height: '220'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_4.jpg',
        width: '652',
        height: '408'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_5.jpg',
        width: '673',
        height: '437'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_6.jpg',
        width: '900',
        height: '596'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_7.jpg',
        width: '673',
        height: '465'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_8.jpg',
        width: '673',
        height: '451'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_9.jpg',
        width: '673',
        height: '447'
    },
    {
        url: 'https://markdowncun.oss-cn-beijing.aliyuncs.com/movie/photo_10.jpg',
        width: '673',
        height: '461'
    }
]

export default () => {
    const [movie, setMovie] = useState([])

    let page = 1
    let total = 0
    const INCREMENT = 300
    const water = useRef()

    let windowHeight = window.screen.height;

    const start = (e, url) => {
        e.src = url
    }

    const insertImg = async (page) => {
        const res = await post('tools/getPhoto', {
            page
        })
        total = res.data.total
        setMovie(movie.push.apply(movie, res.data.data))
        for (let i of res.data.data) {
            var mDiv = main();
            var container = document.createElement("div");
            var img = document.createElement('img')
            container.style.background = `url(${require(`assets/imgs/load.gif`)}) no-repeat center`
            // 10是padding值
            const width = mDiv.clientWidth - 10
            img.width = width
            img.height = i.height / (i.width / width)
            container.appendChild(img)
            img.onload = start(img, i.url)
            mDiv.appendChild(container)
        }
    }

    // 计算高度
    const computedContainerHeight = (ele) => {
        let height = 0
        if (ele === null || ele.length === 0) {//这一列还没有图片
            return 0;
        } else {
            for (let item of ele) {
                height += item.clientHeight
            }
        }
        return height
    }

    const main = () => {
        let maxHeightNode = []
        for (let item of water.current.children) {
            item.len = computedContainerHeight(item.children)
            maxHeightNode = maxHeightNode.length === 0 || maxHeightNode[1] > item.len ? [item, item.len] : maxHeightNode
        }
        return maxHeightNode[0]
    }

    useEffect(() => {
        insertImg();
        window.document.addEventListener("scroll", function () {
            if (document.documentElement.scrollTop + window.screen.height > document.documentElement.scrollHeight && movie.length !== total) {
                //插入图片
                page++;
                // eslint-disable-next-line react-hooks/exhaustive-deps
                windowHeight += INCREMENT;
                insertImg(page);
            }
        });
    }, [])

    return (
        <WaterContainer ref={water}>
            <div className="water-item">
            </div>
            <div className="water-item">
            </div>
            <div className="water-item">
            </div>
        </WaterContainer>
    )
}
