import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const initialState = [];
const blogReducer = (state, action) => {
  // reducer takes state and action type
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
      break;
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload); // return blogpost with filtered out the blogpost.id , not returned into new posts
      break;
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          //   title: `Blog Post #${state.length + 1}`
          title: action.payload.title,
          content: action.payload.content
        }
      ];
      break;
    case 'edit_blogpost':
      // iterate through all blog posts
      return state.map(blogPost => {
        // ternary expression equiv below
        // return blogPost.id === action.payload.id
        // ? action.payload
        // : blogPost

        // find current blog post
        if (blogPost.id === action.payload.id) {
          // find current selected post
          return action.payload; // return new edited blog post in action.payload
        } else {
          return blogPost; // return current post
        }
      });
      break;

    default:
      return state;
      break;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({
      type: 'get_blogposts',
      payload: response.data
    });
  };
};

const addStaticBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({
      type: 'delete_blogpost',
      payload: id
    });
  };
  // return id => {
  //   dispatch({
  //     type: 'delete_blogpost',
  //     payload: id
  //   });
  // };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content });
        dispatch({
      type: 'edit_blogpost',
      payload: { id: id, title: title, content: content }
    });
       if (callback) {
      callback();
    }
  }
  // return (id, title, content, callback) => {
  //   dispatch({
  //     type: 'edit_blogpost',
  //     payload: { id: id, title: title, content: content }
  //   });
  //   if (callback) {
  //     callback();
  //   }
  // };
};

// context created from our createDataContext function using defined reducer, function to change state, and initial state
// all actions added to data context
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  initialState
  // [{ title: 'test post', content: 'test content', id: 1 }]
);
