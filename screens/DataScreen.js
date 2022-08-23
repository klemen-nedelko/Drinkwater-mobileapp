import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  TextInput
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { db } from '../firebase';
import * as Progress from 'react-native-progress';

function DataScreen () {
  const [water, setWater] = useState([]);
  const [date, setDate] =  useState([]);
  const [infos, setInfos] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const info = [];
  const dates = [];

  useEffect(() => {
      setTimeout(function() { 
        getDocs(collection(db, "water")).then(docSnap => {
        docSnap.forEach(doc => {
          info.push(doc.data().water_amount);
          dates.push(doc.data().date);
        });
      const amount = info; 
      const amountdate = dates;   
      setInfos(amount);
      setDate(amountdate);
      setIsLoading(false);
      });
    },2000);
  }, []);
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: infos
  };
    const chartConfig = {
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    return (
      <>
      {!isLoading ?
      <ScrollView>
      <View style={styles.container}>
        
  <Text>Water </Text>
  <LineChart
    data={{
      labels: date,
      datasets: [
        {
          data: infos,
        }
      ]
    }}
    width={350} // from react-native
    height={550}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#2c3e50",
      backgroundGradientFrom: "#2C3E50",
      backgroundGradientTo: "#FD746C",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />


</View>
</ScrollView>
:<Progress.Circle size={100} indeterminate={true} duration={2500} />
}
</>
      // <ScrollView
      //   style={styles.container}
      //   contentContainerStyle={styles.contentContainerStyle}>
      //   <View>
      //     {/* Empty view: will contain to-do items soon */}
      //   </View>
  
      //   <TextInput
      //     placeholder="New todo"
      //     value={presentTodo}
      //     style={styles.textInput}
      //     onChangeText={text => {
      //       setPresentTodo(text);
      //     }}
      //     onSubmitEditing={addNewTodo}
      //   />
  
      //   <View>
      //     <View style={{marginTop: 20}}>
      //       <Button
      //         title="Add new todo"
      //         onPress={addNewTodo}
      //         color="green"
      //         disabled={presentTodo == ''}
      //         />
      //     </View>
  
      //     <View style={{marginTop: 20}}>
      //       <Button
      //         title="Clear the todo list"
      //         onPress={clearTodos}
      //         color="red"
      //         style={{marginTop: 20}}
      //       />
      //     </View>
      //   </View>
      // </ScrollView>
    );
  }
  export default DataScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 12
    },
    contentContainerStyle: {
      padding: 24
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#afafaf',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 20,
      fontSize: 20,
    },
    todoItem: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center'
    },
    todoText: {
      paddingHorizontal: 5,
      fontSize: 16
    },
  });