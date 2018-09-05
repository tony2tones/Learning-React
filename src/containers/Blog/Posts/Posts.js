import React, { Component } from 'react';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostID: null
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostID: id});
    }

    render() {
        let posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                // clicked={() => { this.selectAPost(id) }}
                 />
        })
        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}