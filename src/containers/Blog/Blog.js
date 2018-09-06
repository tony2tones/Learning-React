import React, { Component } from 'react';
import axios from 'axios';

import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
   

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Tony'
                    }
                });
                this.setState({ posts: updatedPosts });
            })
    }

    selectAPost(id) {
        this.setState({ selectedPostID: id })
    }

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
                    <FullPost id={this.state.selectedPostID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;