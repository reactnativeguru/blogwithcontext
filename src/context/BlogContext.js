import createDataContext from './createDataContext';

const initialState = [];
const blogReducer = (state, action) => {
  // reducer takes state and action type
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
      break;

    default:
      return state;
      break;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

// context created from our createDataContext function using defined reducer, function to change state, and initial state
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  initialState
);
