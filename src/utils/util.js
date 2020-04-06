import { createFromIconfontCN } from '@ant-design/icons'


export function formatDate (time, fmt) {
    var o = {
        "M+": new Date(time).getMonth() + 1,                 //月份   
        "d+": new Date(time).getDate(),                    //日   
        "h+": new Date(time).getHours(),                   //小时   
        "m+": new Date(time).getMinutes(),                 //分   
        "s+": new Date(time).getSeconds(),                 //秒   
        "q+": Math.floor((new Date(time).getMonth() + 3) / 3), //季度   
        "S": new Date(time).getMilliseconds()             //毫秒   
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (new Date(time).getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


export function parseArticle (content) {
    var toc = [];
    var reg = /(?<!#+)(#{1,2})\s+?(.+?)\n/g;
    var regExecRes = null
    while ((regExecRes = reg.exec(content))) {
        if (regExecRes[1].length)
            toc.push({
                level: regExecRes[1].length,
                title: regExecRes[2]
            });
    }
    return toc
}


export function movieAarryFormat (arr) {
    if (Array.isArray(arr)) {
        if (arr.length < 2) {
            return arr[0]
        }
        return arr.join(' / ')
    }
}


export function scrollAnimation (currentY, targetY) {
    // 获取当前位置方法
    // const currentY = document.documentElement.scrollTop || document.body.scrollTop

    // 计算需要移动的距离
    let needScrollTop = targetY - currentY
    let _currentY = currentY
    setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 10)
        _currentY += dist
        window.scrollTo(_currentY, currentY)
        // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 10 || needScrollTop < -10) {
            scrollAnimation(_currentY, targetY)
        } else {
            window.scrollTo(_currentY, targetY)
        }
    }, 1)
}

export const getPageStartAndEnd = (p, s) => {
    let start = (p - 1) * s
    let end = (p - 1) * s + s
    return {
        start, end
    }
}

export const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1597339_cz0qmc28vo8.js'
});
