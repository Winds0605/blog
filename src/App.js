import React from 'react';
import { BackTop } from 'antd'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { MyIcon } from './utils/util'

import Footer from './components/footer'

import Home from './pages/home/home'
import Blog from './pages/blog/blog'
import Article from './pages/article/article'
import Movie from './pages/movie/movie'
import MovieDetail from './pages/movie-detail/index'


import './App.css';



export default () => {
    return (
        < div className="App">
            <BrowserRouter>
                <Redirect path="/" to="/blog" />
                <Route path='/blog' exact component={Blog}></Route>
                <Route path='/movie' exact component={Movie}></Route>
                <Route path='/blog/:articleId' exact component={Article}></Route>
                <Route path='/movie/:movieId' exact component={MovieDetail}></Route>
                {/* <Route path='/home' exact component={Home}></Route> */}
                <Footer />
                <BackTop className="back-top">
                    <MyIcon type="icon-up" className="to-top" />
                </BackTop>
            </BrowserRouter>
        </div >
    );
}

