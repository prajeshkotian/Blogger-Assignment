// JavaScript source code
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../Components/Post/Post';

class SearchedData extends Component {

    //as soon as component is mounted get the search results
    componentDidMount() {
        this.getSearchValue();   
    }
    
    //when ever component updates get the new search results
    componentDidUpdate() {
        //condition check to make sure it does not go to infinite loop of updates
        if (this.searchString !== this.props.match.params.data) {
            this.getSearchValue();
            
        }
    }


    getSearchValue = () => {
        this.searchString = this.props.match.params.data;
        //console.log(this.searchString);

        //iterate over all keys and check if each value in array of keys includes the search string
        this.searchedData = this.props.posts.filter(ele => {
            var final;
            var value = Object.values(ele);
            for (var i = 0; i < value.length; i++) {
                final = false;
                if (value[i].includes(this.searchString)) {
                    final = true;
                    break;
                }
            }             
            if (final === true) {
                return ele;
            }
        })
        this.props.searchResults(this.searchedData);
        
    }

    render() {
        //get all searched posts
        var searchedPosts = this.props.search_result.map(ele => {
            return (<Post title={ele.Title} body={ele.Body } />);
        });
        //console.log(searchedData);
        return (
            <div>
                {searchedPosts}
                
            </div>
            );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.Posts,
        search_result: state.searchedPosts 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchResults: (data) => { dispatch({ type: 'SEARCH', value: data }) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchedData);