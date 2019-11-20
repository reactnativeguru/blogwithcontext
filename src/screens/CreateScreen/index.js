import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // destructure addBlogPost function to add a post from Context for Button
  const { addBlogPost}  = useContext(Context)

  return (
    <View style={styles.container}>
      <Text  style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput  style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
      <Button title="Add blog post" onPress={() => addBlogPost(title, content, () => {
        navigation.navigate("Index")
      })} />
    </View>
  );
};
export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  input:{
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5

  },
  label:{
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  }
});
