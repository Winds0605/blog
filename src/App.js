import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home/home'
import Blog from './pages/blog/blog'
import Article from './pages/article/article'
import Movie from './pages/movie/movie'

import { BackTop } from 'antd'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './App.css';

// import Cube from './components/Cube/Cube'


function App () {

    return (
        < div className="App">
            <BrowserRouter>
                <Header />
                <Redirect path="/" to="/home" />
                <Route path='/home' exact component={Home}></Route>
                <Route path='/blog' exact component={Blog}></Route>
                <Route path='/movie' exact component={Movie}></Route>
                <Route path='/blog/:articleId' exact component={Article}></Route>
                {/* <Cube /> */}
                <Footer />
                <BackTop style={{ paddingLeft: '20px' }} />
            </BrowserRouter>
        </div >
    );
}

export default App;
