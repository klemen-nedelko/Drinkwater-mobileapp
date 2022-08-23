import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    StyleSheet,
    View,
    Text,
    Button,
    ScrollView,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  import { AntDesign } from '@expo/vector-icons';
import { auth } from '../firebase';


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
        color: "#2C3E50",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  })

function FooterBar () {
    
  const navigation = useNavigation();
  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  const InputScreen = () => {
        navigation.replace("InputScreen");
  }

    return (
        <>    
        <View style={{flexDirection: 'row', width: 'auto'}}>
            <TouchableOpacity style={styles.appButtonContainer} >
                <Text style={styles.appButtonText}>
                <AntDesign name="home" size={24} color="black" />
                Home
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer} onPress={InputScreen}>
                <Text style={styles.appButtonText}>
                  Write data
                  <AntDesign name="edit" size={24} color="black" /></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer}  onPress={handleSignOut}>
                <Text style={styles.appButtonText}>
                  Log out<AntDesign name="logout" size={24} color="black" /></Text>
            </TouchableOpacity>
        </View> 
        </>

    );
}

export default  FooterBar;