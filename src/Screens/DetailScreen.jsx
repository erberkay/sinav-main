import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native'
import Arrowicon from '../assets/icon/Arrow';
const today = new Date();
const day = today.getDate().toString().padStart(2, "0");
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const year = today.getFullYear();
const defaultDate = `${year}-${month}-${day} bugün`;


const detailScreen = ({ navigation, route }) => {
  
  const navigateToHomeScreen1 = () => {
    navigation.navigate("HomeScreen");
};

  
  return (
    <SafeAreaView style={styles.container}>
      

      <View>
        <TouchableOpacity 
        style={styles.button}
        onPress={navigateToHomeScreen1}>
          <Arrowicon/>
            
          
        </TouchableOpacity>
        <ScrollView>
          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          <View
            style={styles.Flatlist}>
            <Text style={styles.flatlistTxt}>Memory Title</Text>
            <Text style={styles.flatlistTxt1}>{defaultDate}</Text>
          </View>

          


        </ScrollView>
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
    justifyContent: "center",
    flexDirection: "row"
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
  Flatlist: {
    width: 342,
    height: 88,
    borderRadius: 90,
    borderWidth: 2,
    marginTop: 10,
    borderColor:"rgba(177, 178, 178, 1)"

  },
  flatlistTxt: {
    marginTop: 2,
    fontSize: 24,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 77,
    fontFamily: 'Lora-Regular',
    textShadowColor:"rgba(177, 178, 178, 1)",
    

  }
  ,
  flatlistTxt1: {
    fontSize: 12,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 77,
    fontFamily: 'Lora-Regular',
    color:"rgba(177, 178, 178, 1)"

  },
  button:{
    width:150,
    height:50,
    borderRadius:10,
    marginLeft:23,
    marginEnd:10

    
  },
buttontxt: {
    marginLeft: 15,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: 'Lora-Regular',
}
})

export default detailScreen;