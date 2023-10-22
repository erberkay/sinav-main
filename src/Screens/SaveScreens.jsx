import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, TextInput } from 'react-native'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
const today = new Date();
const day = today.getDate().toString().padStart(2, "0");
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const year = today.getFullYear();
const defaultDate = `${year}-${month}-${day} bugün`;
import Arrowicon from '../assets/icon/Arrow';



const saveScreen = ({ navigation, route }) => {
    const navigateToHomeScreen = () => {
        navigation.navigate("HomeScreen");
    };


    return (
        <SafeAreaView style={styles.container}>

<TouchableOpacity 
        style={styles.button}
        onPress={navigateToHomeScreen}>
          <Arrowicon/>
            
          
        </TouchableOpacity>
            <View style={styles.dateView}>

                <Text style={styles.textinputstyle}>
                    Title For This Particular
                </Text>
                <Text style={styles.textinputstyle2} >
                    {defaultDate}
                </Text>

                <Text style={styles.textinputstyle3}>
                    Body Medium. Most fonts have a particular weight which corresponds to one of the numbers in Common weight name mapping. However some fonts, called variable fonts, can support a range of weights with a more or less fine granularity, and this can give the designer a much closer degree of control over the chosen weight.
                </Text>

            </View>






        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: 'Lora-Regular',
        fontSize: 24
    },
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
        marginEnd: 8,
        marginTop:10

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
    textinputstyle3: {
        fontSize: 14,
        fontFamily: 'Lora-Regular',
        marginTop: 5,
    },
    textinputstyle2: {
        fontSize: 14,
        fontFamily: 'Lora-Regular',
        fontWeight: "bold",
        marginTop: 5,

    },
    button:{
        width:120,
        height:50,
        borderRadius:10,
        marginLeft:23,
        marginEnd:10

        
      },
    buttontxt: {
        marginLeft: 2,
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 15,
        fontFamily: 'Lora-Regular',
    }
})

export default saveScreen;