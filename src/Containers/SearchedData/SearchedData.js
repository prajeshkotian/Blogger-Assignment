// JavaScript source code
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../../Components/Post/Post';

class SearchedData extends Component {
    
    //searchString = '';
    //searchedData = [];


    
    componentDidMount() {
        this.getSearchValue();
        //this.searchString = this.props.match.params.data;
        
        //this.searchedData = this.props.posts.filter(ele => {
        //    if (Object.values(ele).includes(this.searchString)) {
        //        return ele;
        //    }
        //})

        //this.props.searchResults(this.searchedData);
       
    }
    

    componentDidUpdate() {
        
        if (this.searchString !== this.props.match.params.data) {
            this.getSearchValue();
            //this.searchString = this.props.match.params.data;
            ////console.log(this.searchString);
            //this.searchedData = this.props.posts.filter(ele => {
            //    if (Object.values(ele).includes(this.searchString))
            //        return ele;
            //})
            //this.props.searchResults(this.searchedData);
        //     //this.getSearchValue();

        //    //console.log(this.searchedData);
        }
    }


    getSearchValue = () => {
        this.searchString = this.props.match.params.data;
        //console.log(this.searchString);
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