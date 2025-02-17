import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {

    state = {
        feed: [],
    };

    async componentDidMount(){

        this.registerToSocket();
        const response = await api.get('posts');
        this.setState({feed:response.data});

    };

    registerToSocket = () =>{
        const socket = io('http://192.168.0.7:3333/');

        socket.on('post', newPost =>{
            this.setState({feed: [newPost, ...this.state.feed]});
        });

        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post => 
                    post._id === likedPost._id ? likedPost : post
                )
            });
        });
    }

    handleLike = id =>{
        api.post(`/posts/${id}/like`);
    };

    render(){
        return(
            <section id="post-list">
                { this.state.feed.map(post=> (
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            <img src={more} alt="Mais"/>
                        </header>
                        <img src={`http://192.168.0.7:3333/files/${post.image}`} alt=""/>
                        <footer>
                            <div className="actions">
                                <button type="buttom" onClick={() => this.handleLike(post._id)}>
                                    <img src={like} alt="" />
                                </button>
                                <img src={comment} alt="" />
                                <img src={send} alt="" />
                            </div>

                            <strong>{post.likes} curtidas</strong>

                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>
                        </footer>
                    </article>
                )) }
            </section>
        );
    }
}

export default Feed;