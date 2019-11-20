import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import  BlogContext  from '../../context/BlogContextReducer';

const IndexScreen = props => {
//   const value = useContext(BlogContext);
//   const blogPosts = useContext(BlogContext);
// destructure data from value prop passed by Context
  const {data, addBlogPost} = useContext(BlogContext);
  return (
    <View style={styles.container}>
      <Button title="Add Post" onPress={addBlogPost}></Button>  
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item}) => {
            return (
                <Text>
                    {item.title}
                </Text>
            )
        }}
       />
    
    </View>
  );
};
export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
