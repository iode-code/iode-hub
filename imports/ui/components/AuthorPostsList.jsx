import React, { Component } from 'react';

import Post from './Post.jsx';

export default class App extends Component {
    getPosts() {
        return [
            { _id: 1, text: 'This is post 1' },
            { _id: 2, text: 'This is post 2' },
            { _id: 3, text: 'This is post 3' },
        ];
    }

    renderPosts() {
        return this.getPosts().map((post) => (
            <Post key={post._id} post={post} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Posts</h1>
                </header>

                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}
