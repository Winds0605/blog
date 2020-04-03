const base = '/movieComments'


// 根据文章ID获取所有评论
export const MCfindCommentsById = `${base}/findCommentById`

// 增加一条评论
export const MCadd = `${base}/add`

// 增加一条子评论
export const MCaddSubComment = `${base}/addSubComment`
