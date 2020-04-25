import React from 'react';
import {Router} from '@reach/router';

import Home from './';
import Post from '../partials/post';

const Posts = () => {
    return (
        <Router basepath="/posts" style={{height: '100%', width: '100%'}}>
            <Home path="/" />
            <Post path="/:slug" />
        </Router>
    );
};

export default Posts;
