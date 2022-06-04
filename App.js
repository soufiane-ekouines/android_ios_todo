import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React ,{useState} from 'react'
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

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

const submitHandler = (text) =>{
  if(text.length > 3){
  set_todo((prevTodos)=>{
    return [{text:text,key:Math.random().toString()},...prevTodos];
  })
  }else{
    Alert.alert('Error','Todo must be at least 3 characters',[{text:'Okay'}]);
  }

}
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      
      // Keyboard.dismiss();
      
    }}>
    <View style={styles.container}>   

      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding:40,
  },
  list:{
    flex:1,
    marginTop:20,
  }
  
});


// project soufiane ekouines
// soufianeekouines@gmail.com