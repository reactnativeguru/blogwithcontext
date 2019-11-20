import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  // const id = navigation.getParam('id');

  // const blogPost = state.find((blogPost) => blogPost.id === id)
  return (
    <View style={styles.container}>
    <Text>Edit {navigation.getParam('id')}</Text>
    </View>
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
