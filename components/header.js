import { StyleSheet, Text, View } from 'react-native';
import React  from 'react'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Header
            </Text>
        </View>
    );
} 

const styles = StyleSheet.create({
    header: {
        paddingTop:20,
        // top:30,
        width: '100%',
        backgroundColor:'coral',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
    }
});


// project soufiane ekouines
// soufianeekouines@gmail.com