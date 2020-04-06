import React from 'react';
import { BackTop } from 'antd'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { MyIcon } from './utils/util'

import Footer from './components/footer'

import Home from './pages/home'
// 博客
import Article from './pages/article'
import ArticleDetail from './pages/article-detail'
// 电影
import Movie from './pages/movie'
import MovieDetail from './pages/movie-detail/index'


import './App.css';



export default () => {
    return (
        < div className="App">
            <BrowserRouter>
                <Redirect path="/" to="/home" />
                <Route path='/home' exact component={Home}></Route>
                <Route path='/article' exact component={Article}></Route>
                <Route path='/article/:articleId' exact component={ArticleDetail}></Route>
                <Route path='/movie' exact component={Movie}></Route>
                <Route path='/movie/:movieId' exact component={MovieDetail}></Route>
                <Footer />
                <BackTop className="back-top">
                    <MyIcon type="icon-up" className="to-top" />
                </BackTop>
            </BrowserRouter>
        </div >
    );
}

