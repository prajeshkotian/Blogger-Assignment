// JavaScript source code
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../Components/Post/Post';
import './Posts.css';

class Posts extends Component {

    componentDidMount() {
        //var posts = JSON.parse(localStorage.getItem('Data'));
    }

    render() {
        
        const posts = this.props.posts.length>0 ? this.props.posts.map(ele => {
            return (
                <Post title={ele.Title} body={ele.Body} key={ele.Title} />
            );
        }) : <h3>No Posts Found!!!</h3>;
        
        return (
            //<p>All Posts!!!</p>
                <div className="Posts">
                    {posts}
                </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.Posts
    }
}

export default connect(mapStateToProps)(Posts);