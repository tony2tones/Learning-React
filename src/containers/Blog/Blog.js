import React, { Component } from 'react';

import FullPost from '../Blog/FullPost/FullPost';
import NewPost from '../Blog/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                        <nav>
                            <ul>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/new-post'>New Post</a></li>
                            </ul>
                        </nav>
                </header>
                
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;