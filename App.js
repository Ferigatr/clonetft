 import React from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   Image,
   View,
   TextInput,
   TouchableOpacity,
 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 
 const imageicon = {uri: "https://www.riotgames.com/darkroom/original/354d0e8b7bc007f90345b4cc32e74ad1:428a0a83efb4aabcac5a25efaee41b1e/riot-pairedlogo-red-rgb.png"}
 
 const App = () => {
   return (

     <View style={styles.container}>
       <View style={{flexDirection:"row",flex:1}}>
       <Image source ={imageicon} style={styles.logoImg} resizeMode={"cover"}/>
      </View>

      <TouchableOpacity
        style={styles.botaox}>
        <Text
        style={styles.xxxx}> 
         X
        </Text>
      </TouchableOpacity>

       <Text style={styles.texto}>
         Iniciar o estresse
       </Text>

       <TextInput 
       style={styles.barraescrita}
       placeholder="NOME DO USUARIO"/>

      <TextInput 
       style={styles.barraescrita}
       secureTextEntry={true}
       placeholder="SENHA"/>

      <TouchableOpacity>
        <Text
        style={styles.textinhomaroto}> 
         NÃO CONSEGUE FAZER O LOGIN?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoseta}>
        <Text
        style={styles.seta}> 
         ➜
        </Text>
      </TouchableOpacity>

     </View>
   );
 };
 
 const styles = StyleSheet.create({

  conteiner:{
  flex:1,
  justifyContent: "center",
  alignItems: "center"
  },
  
  texto:{
  marginTop:30,
  marginLeft:30,
  marginBottom:30,
  color: "black",
  fontWeight: "bold",
  fontSize: 30,
  },

  logoImg: {
    marginTop:30,
    width: 150,
    height: 50,
    marginLeft:30,
    },

  barraescrita:{
    marginTop:10,
    marginLeft:30,
    backgroundColor: "#EFEFEF",
    width: 400,
    fontSize: 16,
    borderRadius: 3
  },
  
  botaox:{
    marginLeft:30,
    width:60,
    height:60,
    borderRadius:10,
    backgroundColor: "#EFEFEF",
    marginLeft:650
  },

  xxxx:{
  marginTop:10,
  fontSize: 30,
  alignSelf: "center"
  },

  textinhomaroto:{
    color:"#626262",
    marginLeft:30,
  },

  botaoseta:{
    marginTop:10,
    marginLeft:30,
    width:60,
    height:60,
    borderRadius:10,
    marginLeft:650
  },

  seta:{
    marginTop:10,
    fontSize: 30,
    alignSelf: "center",
    borderRadius: 400,
    borderColor: "#626262",
    tintColor: "#626262",
    },



 });
 
 export default App;
