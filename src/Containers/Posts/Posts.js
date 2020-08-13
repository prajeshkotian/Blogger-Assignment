// JavaScript source code
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../Components/Post/Post';
import './Posts.css';


//Simple Component to display each Blog Post
class Posts extends Component {

   

    render() {
        //check if any posts are available
        const posts = this.props.posts.length>0 ? this.props.posts.map(ele => {
            return (
                <Post title={ele.Title} body={ele.Body} key={ele.Title} />
            );
        }) : <h3>No Posts Found!!!</h3>;
        
        return (
            
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