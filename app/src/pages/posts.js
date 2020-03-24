import React from 'react';
import {Router} from '@reach/router';

import Post from '../templates/post';

const Posts = () => {
    return (
        <Router basepath='/posts'>
            <Post path='/:slug' />
        </Router>
    );
};

export default Posts;
