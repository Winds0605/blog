import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home/home'
import Blog from './pages/blog/blog'
import Article from './pages/article/article'

import { BackTop } from 'antd'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

// import Cube from './components/Cube/Cube'


function App () {
    return (

        < div className="App">
            <BrowserRouter>
                <Header />
                <Route path='/home' exact component={Home}></Route>
                <Route path='/blog' exact component={Blog}></Route>
                <Route path='/blog/:articleId' exact component={Article}></Route>
                {/* <Cube /> */}
                <Footer />
                <BackTop />
            </BrowserRouter>
        </div >
    );
}

export default App;
