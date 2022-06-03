import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React ,{useState} from 'react'
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
const [todos,set_todo] = useState([
  {text:'project laravel',key:'1'},
  {text:'project React Native',key:'2'},
  {text:'foughal bus',key:'3'},
  {text:'dashbord in github',key:'4'},
]);

const pressHandler = (key) =>{
  set_todo((prevTodos)=>{
    return prevTodos.filter(todo=>todo.key != key);
  })
}

  return (
    <View style={styles.container}>   

      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={ ( { item } )=> (
              <TodoItem item={item} pressHandler={pressHandler}/>          
            )}
          />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
  
});
