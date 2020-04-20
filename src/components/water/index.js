import React, { useEffect, useRef } from 'react'
import { WaterContainer } from './style'

export default ({ photo }) => {

    const pageSize = 10

    const water = useRef()

    const start = (e, url) => {
        e.src = url
    }

    const insertImg = async () => {
        if (photo.length === 0) {
            return
        }
        if (document.documentElement.scrollTop + window.screen.height > document.documentElement.scrollHeight) {
            for (let i of photo.splice(0, pageSize)) {
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
        window.document.addEventListener("scroll", insertImg);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photo])

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
