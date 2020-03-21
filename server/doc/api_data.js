define({ "api": [
  {
    "type": "post",
    "url": "/comments/add",
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
          }
        ]
      }
    },
    "version": "1.0.0",
    "filename": "routes/controller/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/comments/addViews",
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
    "filename": "routes/controller/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/comments/findAll",
    "title": "获取所有文章",
    "description": "<p>获取所有文章</p>",
    "name": "findAll",
    "group": "Article",
    "version": "1.0.0",
    "filename": "routes/controller/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/comments/findById",
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
    "filename": "routes/controller/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/comments/findAll",
    "title": "获取所有评论",
    "description": "<p>获取所有评论</p>",
    "name": "findAll",
    "group": "Comment",
    "version": "1.0.0",
    "filename": "routes/controller/comments.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/tags/findAll",
    "title": "获取所有分类标签",
    "description": "<p>获取所有分类标签</p>",
    "name": "findAll",
    "group": "Tags",
    "version": "1.0.0",
    "filename": "routes/controller/tags.js",
    "groupTitle": "Tags"
  }
] });
