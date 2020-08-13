// JavaScript source code
import React from 'react';
import './Post.css';
import ReactMarkdown from 'react-markdown';

function Post({ title,body}) {
    return (
        <article className="Post">
            <h3>{title}</h3>
            {/*<div>{props.body}</div>*/}
            <ReactMarkdown source={body } />
        </article>
        );
}

export default Post;