// JavaScript source code
const initialState = {
    Title: '',
    Body: '',
    Posts: [],
    searchedPosts: []
}

function PostsReducer(state = initialState, action) {
    if (action.type === 'CHANGE-TITLE') {

        //console.log(state.Title);
        
        return {
            ...state,
            Title: action.value
        }
    }
    else if (action.type === 'CHANGE-BODY') {

        //console.log(state.Title);

        return {
            ...state,
            Body: action.value
        }
    }
    else if (action.type === 'SUBMIT-POST') {
        //console.log(state.Posts);

        const post = {
            Title: state.Title,
            Body: state.Body
        }
        const Posts = state.Posts.concat(post);

        //localStorage.setItem('Data', JSON.stringify(Posts));
        //const data = JSON.parse(localStorage.getItem('Data'));
        //console.log(data);
        alert('New Post Added!!');
        return {
            ...state,
            Title: '',
            Body: '',
            Posts: Posts
        }
       
    }
    else if (action.type === 'SEARCH') {
        console.log(action.value);
        return {
            ...state,
            searchedPosts: action.value
        }
    }
    else {
        return state;
    }
}

export default PostsReducer;