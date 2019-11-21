import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../../context/BlogContext';
import BlogPostForm from '../../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');

  const blogPost = state.find((blogPost) => blogPost.id === id);


  // const [title, setTitle] = useState(blogPost.title)
  // const [content, setContent] = useState(blogPost.content)


  return (
    <BlogPostForm 
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
          editBlogPost(id, title, content, () => navigation.pop())
        }}
   />
    // <View style={styles.container}>
    // <Text>Edit Title:</Text>
    // <TextInput value={title}  onChangeText={(newTitle) => setTitle(newTitle)} />
    // <Text>Edit Content:</Text>
    // <TextInput value={content} onChangeText={(newContent) => setContent(newContent)} />

    // </View>
  );
};
export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
