import React, {useState} from 'react'

 const BlogContext = React.createContext();

// setting up the provider with Context and passing in 'children', child components into the context
export const BlogProvider = ({ children}) => {
    const [blogPosts, setBlogPosts] = useState([])

    const addBlogPost = () => {
        // change state to trigger a re-render of UI and add new blogpost with increasing blog number id
        setBlogPosts([
            ...blogPosts,
             {title: `Blog Post #${blogPosts.length + 1}`}])
    }

    // possible to create rest of CRUD operations with useState for efficient to use useReducer and switch statement and action type rather than lots of separate functions

    return (
        // passing in data and callback function to manage data state
        <BlogContext.Provider value={{data : blogPosts, addBlogPost}}> 
        {children}
    </BlogContext.Provider>
    )
}

export default BlogContext