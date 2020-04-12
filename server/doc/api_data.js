define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/main.js",
    "group": "/Users/Wind's/Desktop/blog-react/server/routes/main.js",
    "groupTitle": "/Users/Wind's/Desktop/blog-react/server/routes/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/articleComments/add",
    "title": "增加一条评论",
    "description": "<p>增加一条评论</p>",
    "name": "add",
    "group": "ArticleComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>留言者</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/articleComment.js",
    "groupTitle": "ArticleComments"
  },
  {
    "type": "post",
    "url": "/articleComments/addSubComment",
    "title": "增加一条子留言",
    "description": "<p>增加一条子留言</p>",
    "name": "addSubMessage",
    "group": "ArticleComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageId",
            "description": "<p>被回复的留言id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>回复人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>回复内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "avatar",
            "description": "<p>头像</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/articleComment.js",
    "groupTitle": "ArticleComments"
  },
  {
    "type": "post",
    "url": "/articleComments/deleteByArticleId",
    "title": "删除某篇文章的评论",
    "description": "<p>删除某篇文章的评论</p>",
    "name": "deleteByArticleId",
    "group": "ArticleComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/articleComment.js",
    "groupTitle": "ArticleComments"
  },
  {
    "type": "post",
    "url": "/articleComments/deleteByCommentId",
    "title": "删除某个评论",
    "description": "<p>删除某个评论</p>",
    "name": "deleteByCommentId",
    "group": "ArticleComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "commentId",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/articleComment.js",
    "groupTitle": "ArticleComments"
  },
  {
    "type": "post",
    "url": "/articleComments/deleteSubCommentByCommentId",
    "title": "删除某个子评论",
    "description": "<p>删除某个子评论</p>",
    "name": "deleteSubCommentByCommentId",
    "group": "ArticleComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subId",
            "description": "<p>子评论id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/articleComment.js",
    "groupTitle": "ArticleComments"
  },
  {
    "type": "post",
    "url": "/articleComments/deleteSubMessageBySubId",
    "title": "删除某个子留言",
    "description": "<p>删除某个子留言</p>",
    "name": "deleteSubMessageBySubId",
    "group": "ArticleComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subId",
            "description": "<p>子评论id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/message.js",
    "groupTitle": "ArticleComments"
  },
  {
    "type": "post",
    "url": "/articleComments/findCommentsById",
    "title": "根据文章ID获取所有评论",
    "description": "<p>根据文章ID获取所有评论</p>",
    "name": "findCommentsById",
    "group": "ArticleComments",
    "version": "1.0.0",
    "filename": "routes/controller/articleComment.js",
    "groupTitle": "ArticleComments"
  },
  {
    "type": "post",
    "url": "/articles/add",
    "title": "添加一篇文章",
    "description": "<p>添加一篇文章</p>",
    "name": "add",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "desc",
            "description": "<p>文章简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "banner",
            "description": "<p>文章图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": "<p>文章类型</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/articles/addViews",
    "title": "增加某篇文章阅读数",
    "description": "<p>增加某篇文章阅读数</p>",
    "name": "addViews",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/articles/delete",
    "title": "删除一篇文章",
    "description": "<p>删除一篇文章</p>",
    "name": "delete",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/articles/edit",
    "title": "编辑一篇文章",
    "description": "<p>编辑一篇文章</p>",
    "name": "edit",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "desc",
            "description": "<p>文章简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "banner",
            "description": "<p>文章图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": "<p>文章标签</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/articles/findAll",
    "title": "获取所有文章",
    "description": "<p>获取所有文章</p>",
    "name": "findAll",
    "group": "Article",
    "version": "1.0.0",
    "filename": "routes/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/articles/findById",
    "title": "获取某篇文章信息",
    "description": "<p>获取某篇文章信息</p>",
    "name": "findById",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/article.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/messages/addSubMessage",
    "title": "增加一条子留言",
    "description": "<p>增加一条子留言</p>",
    "name": "addSubMessage",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageId",
            "description": "<p>被回复的留言id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>回复内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>留言人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "avatar",
            "description": "<p>头像</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/message.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/messages/deleteByMessageId",
    "title": "删除某个留言",
    "description": "<p>删除某个留言</p>",
    "name": "deleteByMessageId",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageId",
            "description": "<p>留言id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/message.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/messages/add",
    "title": "增加一条留言",
    "description": "<p>增加一条留言</p>",
    "name": "findAll",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>留言人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>留言内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "avatar",
            "description": "<p>头像</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/message.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/messages/findAll",
    "title": "获取所有留言",
    "description": "<p>获取所有留言</p>",
    "name": "findAll",
    "group": "Messages",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>内容长度</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/message.js",
    "groupTitle": "Messages"
  },
  {
    "type": "post",
    "url": "/movieComments/add",
    "title": "增加一条评论",
    "description": "<p>增加一条评论</p>",
    "name": "add",
    "group": "MovieComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>留言者</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "articleId",
            "description": "<p>电影id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movieComment.js",
    "groupTitle": "MovieComments"
  },
  {
    "type": "post",
    "url": "/movieComments/addSubComment",
    "title": "增加一条子评论",
    "description": "<p>增加一条子评论</p>",
    "name": "addSubMessage",
    "group": "MovieComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "messageId",
            "description": "<p>被回复的留言id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>回复人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>回复内容</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movieComment.js",
    "groupTitle": "MovieComments"
  },
  {
    "type": "post",
    "url": "/movieComments/deleteByCommentId",
    "title": "删除电影某个评论",
    "description": "<p>删除电影某个评论</p>",
    "name": "deleteByCommentId",
    "group": "MovieComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "commentId",
            "description": "<p>评论id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movieComment.js",
    "groupTitle": "MovieComments"
  },
  {
    "type": "post",
    "url": "/movieComments/deleteSubCommentBySubId",
    "title": "删除某个子评论",
    "description": "<p>删除某个子评论</p>",
    "name": "deleteSubCommentByCommentId",
    "group": "MovieComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subId",
            "description": "<p>子评论id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movieComment.js",
    "groupTitle": "MovieComments"
  },
  {
    "type": "post",
    "url": "/movieComments/findCommentById",
    "title": "根据电影ID获取所有评论",
    "description": "<p>根据电影ID获取所有评论</p>",
    "name": "findCommentById",
    "group": "MovieComments",
    "version": "1.0.0",
    "filename": "routes/controller/movieComment.js",
    "groupTitle": "MovieComments"
  },
  {
    "type": "post",
    "url": "/movies/edit",
    "title": "编辑一部电影",
    "description": "<p>编辑一部电影</p>",
    "name": "edit",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieId",
            "description": "<p>电影id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>电影名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>电影图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "director",
            "description": "<p>电影导演</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "country",
            "description": "<p>制作国家</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "type",
            "description": "<p>电影类型</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rate",
            "description": "<p>电影评分</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>电影简介</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movie.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "/movies/add",
    "title": "添加一部电影",
    "description": "<p>添加一部电影</p>",
    "name": "add",
    "group": "Movies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>电影ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "image",
            "description": "<p>电影ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "director",
            "description": "<p>电影导演</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "country",
            "description": "<p>制作地区/国家</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "type",
            "description": "<p>电影类型</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "rate",
            "description": "<p>电影评分</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "introduction",
            "description": "<p>电影介绍</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movie.js",
    "groupTitle": "Movies"
  },
  {
    "type": "post",
    "url": "/movies/delete",
    "title": "删除一部电影",
    "description": "<p>删除一部电影</p>",
    "name": "delete",
    "group": "Movies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieId",
            "description": "<p>电影id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movie.js",
    "groupTitle": "Movies"
  },
  {
    "type": "get",
    "url": "/movies/findAll",
    "title": "获取所有电影数据",
    "description": "<p>获取所有电影数据</p>",
    "name": "findAll",
    "group": "Movies",
    "version": "1.0.0",
    "filename": "routes/controller/movie.js",
    "groupTitle": "Movies"
  },
  {
    "type": "post",
    "url": "/movies/findById",
    "title": "获取单个电影数据",
    "description": "<p>获取单个电影数据</p>",
    "name": "findById",
    "group": "Movies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieId",
            "description": "<p>电影ID</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movie.js",
    "groupTitle": "Movies"
  },
  {
    "type": "post",
    "url": "/tags/articleTasAdd",
    "title": "添加文章分类标签",
    "description": "<p>添加文章分类标签</p>",
    "name": "articleTasAdd",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "get",
    "url": "/tags/articleTasfindAll",
    "title": "获取所有文章分类标签",
    "description": "<p>获取所有文章分类标签</p>",
    "name": "articleTasfindAll",
    "group": "Tags",
    "version": "1.0.0",
    "filename": "routes/controller/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "post",
    "url": "/tags/articleTagsDelete",
    "title": "删除文章分类标签",
    "description": "<p>删除文章分类标签</p>",
    "name": "movieTagsDelete",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "post",
    "url": "/tags/movieTagsDelete",
    "title": "删除电影分类标签",
    "description": "<p>删除电影分类标签</p>",
    "name": "movieTagsDelete",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "post",
    "url": "/tags/movieTasAdd",
    "title": "添加文章分类标签",
    "description": "<p>添加电影分类标签</p>",
    "name": "movieTasAdd",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "get",
    "url": "/tags/movieTasfindAll",
    "title": "获取所有电影分类标签",
    "description": "<p>获取所有电影分类标签</p>",
    "name": "movieTasfindAll",
    "group": "Tags",
    "version": "1.0.0",
    "filename": "routes/controller/tags.js",
    "groupTitle": "Tags"
  },
  {
    "type": "post",
    "url": "/movieComments/deleteByMovieId",
    "title": "删除某部电影的评论",
    "description": "<p>删除某部电影的评论</p>",
    "name": "deleteByMovieId",
    "group": "movieComments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "movieId",
            "description": "<p>电影id</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/movieComment.js",
    "groupTitle": "movieComments"
  },
  {
    "type": "post",
    "url": "/other/getPhoto",
    "title": "获取所有照片",
    "description": "<p>获取所有照片</p>",
    "name": "getPhoto",
    "group": "other",
    "version": "1.0.0",
    "filename": "routes/controller/other.js",
    "groupTitle": "other"
  },
  {
    "type": "post",
    "url": "/other/transform",
    "title": "读取文件内容",
    "description": "<p>读取文件内容</p>",
    "name": "transform",
    "group": "other",
    "version": "1.0.0",
    "filename": "routes/controller/other.js",
    "groupTitle": "other"
  },
  {
    "type": "post",
    "url": "/other/uploadImg",
    "title": "上传图片返回路径",
    "description": "<p>上传图片返回路径</p>",
    "name": "uploadImg",
    "group": "other",
    "version": "1.0.0",
    "filename": "routes/controller/other.js",
    "groupTitle": "other"
  }
] });
