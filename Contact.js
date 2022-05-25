import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function Post() {

    return (
      <View style={styles.container}> 
      <Text>Hello</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });