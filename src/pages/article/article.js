import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Container, ArticleHeader, ArticleTitle, ArticleInfo } from './style'
import { Icon, Tag, message } from 'antd'
import { post } from 'utils/http.js'
import { formatDate } from 'utils/util'
import CodeBlock from 'utils/CodeBlock'
import 'App.css'


class Article extends React.Component {
    state = {
        data: []
    }
    async componentDidMount () {
        try {
            let result = await post('/articles/findById', {
                articleId: this.props.match.params.articleId
            });

            let addResult = await post('/articles/addViews', {
                articleId: this.props.match.params.articleId
            });

            if (result.data.errorCode !== 0 || addResult.data.errorCode !== 0) {
                message.error('数据请求失败');
            } else {
                this.setState({
                    data: result.data.data,
                })
            }
        } catch (error) {
            message.error('数据请求失败');
        }
    }

    render () {
        const { data } = this.state
        return (
            <>

                <Container>
                    <ArticleHeader>
                        <ArticleTitle className="iconfot">{data.title}</ArticleTitle>
                        <ArticleInfo>
                            <span>
                                <Icon type="schedule" style={{ marginRight: '5px' }} />{formatDate(data.modifyOn, 'yyyy-MM-dd hh:mm:ss')}
                            </span>
                            <span className="views">阅读数：{data.views}</span>
                            <span className="tag">分类：<Tag>{data.tag}</Tag></span>
                        </ArticleInfo>
                    </ArticleHeader>

                    <ReactMarkdown
                        source={data.content}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock
                        }}
                    >
                    </ReactMarkdown>
                </Container>
            </>
        );
    }
};

export default Article;


// export default () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await post(
//                 '/articles/findAll',
//             );
//             setData(result.data.data)
//         };
//         fetchData()
//     }, []);
//     return (
//         <>
//             {
//                 console.log()
//             }
//             {/* <ReactMarkdown></ReactMarkdown> */}
//         </>
//     )
// }
