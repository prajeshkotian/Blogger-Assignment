// JavaScript source code
import React, { Component } from 'react';
import './NewPost.css';
import { connect } from 'react-redux';

class NewPost extends Component {
    state = {
        Title: null,
        Body: null,
        posts: [],
    }

  
    //simple form which take 2 inputs a title and body and one submit button to publish the post.
    render() {
       
        //console.log(this.props.title);
        return (
            <div>
                
                <form className="NewPost" onSubmit={this.props.onSubmitChangeHandler}>
                    <label>New Post</label>
                    <input type='text' placeholder='Title' value={this.props.title } onChange={this.props.onTitleChangeHandler } required />
                    <textarea rows='10' placeholder="Content" value={ this.props.body} onChange={this.props.onBodyChangeHandler } required />
                    <button type='submit'>Post</button>
                </form>
            </div>
        );
    }
}

//mapping store state to local props
const mapStateToProps = state => {
    return {

        title: state.Title,
        body: state.Body

    };
};


//mapping methods to dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        onTitleChangeHandler: (event) => { dispatch({ type: 'CHANGE-TITLE', value: event.target.value }) },
        onBodyChangeHandler: (event) => dispatch({ type: 'CHANGE-BODY', value: event.target.value }),
        onSubmitChangeHandler: (event) => { event.preventDefault(); dispatch({ type: 'SUBMIT-POST' }) }
    }
};


//connecting the Component to Store
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);