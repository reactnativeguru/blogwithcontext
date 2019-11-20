import createDataContext from './createDataContext';

const initialState = [];
const blogReducer = (state, action) => {
  // reducer takes state and action type
  switch (action.type) {
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

    default:
      return state;
      break;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({
      type: 'delete_blogpost',
      payload: id
    });
  };
};

// context created from our createDataContext function using defined reducer, function to change state, and initial state
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
//   initialState
  [{title: "test post", content: "test content", id: 1}]
);
