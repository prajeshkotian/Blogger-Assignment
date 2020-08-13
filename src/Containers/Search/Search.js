// JavaScript source code
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';
import { Route } from 'react-router-dom';
import SearchedData from '../SearchedData/SearchedData';

class Search extends Component {
   
    searchString = '';


    OnSearchChangeHandler = (event) => {
        this.searchString = event.target.value;
       
    }

    onSearchHandler = (event) => {
        //console.log(this.searchString);
        if (!this.searchString)
            alert('Enter a value to search');
        else {
            this.props.history.push('/Search-Data/' + this.searchString);
        }
        //this.searchedData = this.searchedData.concat(this.searchString);
    }

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