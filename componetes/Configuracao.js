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

 
 const imagepingu = {uri: "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/tft-microsite/pt_BR/4627a7b383b9145327c711513ad2dc731c3c7f2d/assets/images/floating-3.png"}
 
 const Configuracao = ({}) => {
   return (

     <View>
        <Image source ={imagepingu} style={styles.pinguImg} resizeMode={"cover"}/>

     <TouchableOpacity
     style={styles.botao}>
       <Text
        style={styles.botaotext}> 
        Definitivamente é um botão
       </Text>
     </TouchableOpacity>

     </View>
     

    );
 };
 
 const styles = StyleSheet.create({

    pinguImg: {
        marginLeft:30,
        marginTop:5,
        width: 500,
        height: 300,
        marginLeft:70,
        },

    botao: {
        marginTop:-100,
        marginLeft:30,
        width:300,
        height:60,
        borderRadius:30,
        backgroundColor: "gold",
        marginLeft:40

    },

    botaotext: {
     marginTop:15,
     flex: 1,
     textAlign: 'center',
     fontSize: 20,
     color: "white"

    },
 });
 
 export default Configuracao;