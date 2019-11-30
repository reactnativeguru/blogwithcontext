import React, {useState, useContext} from "react";
import { 
    View,
    Text,
    StyleSheet, TextInput, Button
} from "react-native";

const BlogPostForm = ({onSubmit, initialValues}) => {
    // set initial values to form from initialValues prop
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View style={styles.container}>
        <Text  style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(newTitle) => setTitle(newTitle)}/>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput  style={styles.input} value={content} onChangeText={(newContent) => setContent(newContent)}/>
        <Button title="Save blog post" onPress={() => onSubmit(title, content)} />
      </View>
    )
}

// default props for form TextInput values
BlogPostForm.defaultProps = {
    initialValues :{
        title:'',
        content:''
    }
}


export default BlogPostForm;

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
  