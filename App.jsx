import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, TextInput } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import detailScreen from "./src/Screens/DetailScreen";
import saveScreen from "./src/Screens/SaveScreens";
import kitap from "./src/assets/icon/Kitap icon";

const HomeScreen = ({ navigation, route }) => {
     const [price, setPrice] = useState("");
     const [date, setDate] = useState("");
     const [category, setCategory] = useState("");
   
     const handleButtonPress = (buttonText) => {
       setSelectedButton(buttonText);
       setCategory(buttonText);
     };

     const navigateToDetailScreen = () => {
          navigation.navigate("detailScreen");
     };
     const navigateToSaveScreen = () => {
          navigation.navigate("saveScreen");
     };

     const navigateToEditExpense = (expense) => {
          navigation.navigate("detailScreen", { expense });
     };

     const handleBuy = async () => {
          if ( price && date) {
            try {
              const expenseData = {
                id: new Date().getTime().toString(),
                category,
                price,
                date,
              };
      
              // AsyncStorage'de mevcut giderler burda aliniyo
              const existingExpenses = await AsyncStorage.getItem("expenses");
      
              if (existingExpenses) {
                // Mevcut giderler bir diziye dönüşuyo
                const parsedExpenses = JSON.parse(existingExpenses);
      
                // Yeni gideri ekliyorum
                parsedExpenses.push(expenseData);
      
                // Diziyi tekrar AsyncStorage'e kaydet
                await AsyncStorage.setItem("expenses", JSON.stringify(parsedExpenses));
              } else {
                // Daha önce hiç gider yoksa yeni bir dizi oluştur
                const newExpenses = [expenseData];
      
                // Diziyi AsyncStorage'e kaydet
                await AsyncStorage.setItem("expenses", JSON.stringify(newExpenses));
              }
      
              // Ana ekrana geri dön
              navigation.navigate("detailScreen");
            } catch (error) {
              console.error("Veri kaydetme hatası:", error);
            }
          } else {
            Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
          }
        };
      

     return (
          <SafeAreaView style={styles.container}>

               <View style={styles.dateView}>

                    <TextInput
                         placeholder="Bir Başlık Giriniz"
                         style={styles.textinputstyle}
                         value={price}
                    />
                    <TextInput
                         placeholder="Bir Metin Giriniz"
                         style={styles.textinputstyle1}
                         value={category}
                    />

               </View>


               <TouchableOpacity style={styles.touchStyle} onPress={navigateToDetailScreen}
               >

                    <Text style={styles.harcamastyle}>See My Memories</Text>


               </TouchableOpacity>

               <TouchableOpacity style={styles.touchStyle1}
                    onPress={navigateToSaveScreen} >
                    <Text style={styles.harcamastyle}>Save</Text>
               </TouchableOpacity>

          </SafeAreaView>
     );
};

const Stack = createNativeStackNavigator();
const App1 = () => {
     return (
          <NavigationContainer>
               <Stack.Navigator
                     screenOptions={{ headerShown: false, }}
               >

                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="detailScreen" component={detailScreen} />
                    <Stack.Screen name="saveScreen" component={saveScreen} />

               </Stack.Navigator>
          </NavigationContainer>
     );
};

const styles = StyleSheet.create({
     container: {
          width: "100%",
          height: "100%",
          backgroundColor: "white",
     },
     dateView: {
          backgroundColor: "white",
          height: 600,
          flexDirection: "column",
          marginLeft: 24,
          marginEnd: 8

     },
     dateView1: {
          flex: 1,
     },
     dateView2: {
          flex: 1,
     },
     touchStyle: {
          backgroundColor: "#rgba(255, 215, 0, 1)",
          height: "5%",
          width: "60%",
          borderRadius: 30,
          justifyContent: "center",
          marginLeft: "20%",
          marginTop: 30,
     },
     touchStyle1: {
          backgroundColor: "#rgba(255, 215, 0, 1)",
          height: "5%",
          width: "60%",
          borderRadius: 30,
          justifyContent: "center",
          marginLeft: "20%",
          marginTop: 30,
     },
     harcamastyle: {
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          color: "rgba(62, 76, 89, 1)",
     },
     textinputstyle: {
          fontSize: 24,
          fontFamily: 'Lora-Regular',
     },
     textinputstyle1: {
          fontSize: 14,
          fontFamily: 'Lora-Regular',
     }

});

export default App1;











