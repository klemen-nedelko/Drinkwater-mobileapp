import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/core'
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { db } from '../firebase';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

function inputData () {
    
  const navigation = useNavigation();
    const [water, setWater] = useState([""]);
    const HomeScreen = () => {
        navigation.replace("Home");
  }
  function getDate()
  {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    //doc.id, '=>', doc.data().water_amount
    today = mm + '/' + dd ;
    return today;
  }
    function sendData(){
     addDoc(collection(db, "water"), {
       water_amount: water,
       date : getDate(),
     }).then(() => { 
         // Data saved successfully!
         console.log('data submitted');
    
       }).catch((error) => {
             // The write failed...
             console.log(error);
       });
}
const styles = StyleSheet.create({
  appButtonContainer: {
      elevation: 8,
      backgroundColor: "#ffe",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      flexDirection: "row",
      width:"33%",
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    waterInput: {
      borderWidth:1,
      borderBottomColor:'#000',
    }
})
    return(
        <View>
        <TextInput value={water} onChangeText={(water) => {setWater(water)}} placeholder="Water Input" style={styles.waterInput}></TextInput>
        <TouchableOpacity onPress={sendData}>
                <Text>
                  Send Data
                <Ionicons name="send" size={24} color="black" />
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={HomeScreen}>
                <Text>
                  Go Home
                <AntDesign name="home" size={24} color="black" />
                    </Text>
            </TouchableOpacity>
        {/* //<Button onPress={sendData}><Ionicons name="send" size={24} color="black" /></Button>      */}
        {/* <Button onPress={HomeScreen} title="Go home"/>      */}
        </View>
    );

}

export default inputData;