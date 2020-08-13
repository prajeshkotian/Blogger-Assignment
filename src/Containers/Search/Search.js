// JavaScript source code
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';

//Search component displays Search Bar and redirects urlon clicking search button
class Search extends Component {
   
    searchString = '';

    //Storing searched value
    OnSearchChangeHandler = (event) => {
        this.searchString = event.target.value;
       
    }

    //method to check if string is entered and if valid redirect to url
    onSearchHandler = (event) => {
        if (!this.searchString)
            alert('Enter a value to search');
        else {
            this.props.history.push('/Search-Data/' + this.searchString);
        }
        
    }

    //method to delete clear existing values in searchbox
    onDeleteSearchHandler = (event) => {
        document.getElementById("input").value = '';
    }

    render() {
        return (
            <div className="SearchBar">

                <img src="https://img.icons8.com/android/24/000000/search.png" onClick={this.onSearchHandler} />
                <input className="SearchBar-Input" type='text' placeholder="Search by Title" id="input" onChange={this.OnSearchChangeHandler} />
                <img src="https://img.icons8.com/material/24/000000/circled-x.png" onClick={ this.onDeleteSearchHandler}/>
            </div>

        );
    }
}

const mapStateToProps=(state)=>{
    return {
        posts: state.Posts
    }
}

export default connect(mapStateToProps)(Search);