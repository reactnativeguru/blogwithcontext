import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../../context/BlogContext';

import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
  //   const value = useContext(BlogContext);
  //   const blogPosts = useContext(BlogContext);
  // destructure data from value prop passed by Context
  const { state,  deleteBlogPost } = useContext(Context);
  return (
    <View style={styles.container}>
      {/* <Button title='Add Post' onPress={addBlogPost}></Button> */}
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id : item.id})}>
            <View style={styles.row}>
             <Text>{item.title}</Text>
              <Text>{item.id}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}><Feather style={styles.icon} name="trash"/></TouchableOpacity>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};



// configure header
IndexScreen.navigationOptions  =({navigation}) => {
  return {
    headerRight : <TouchableOpacity onPress={() => navigation.navigate("Create")}>
    <Feather name="plus" size={30}/>
    </TouchableOpacity>
    }
  }



export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  row :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10
  },
  icon:{
    fontSize: 20
  }
});
