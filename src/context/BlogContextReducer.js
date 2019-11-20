import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const initialState = [];
const blogReducer = (state, action) => { // reducer takes state and action type
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {title: `Blog Post #${state.length + 1}`}]
            break;
    
        default:
            return state;
            break;
    }
};


export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, initialState);
  const addBlogPost = () => {
    dispatch({
        type: 'add_blogpost',

    })
}

  return (
// setting up the provider with Context and passing in 'children', child components into the context
<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
