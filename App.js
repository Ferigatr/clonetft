import React from 'react';
import 'react-native-gesture-handler';
import Jogo from './componetes/jogo';
import Configuracao from './componetes/Configuracao';


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
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const imagetft = {uri: "https://img.ibxk.com.br/2020/03/18/18122831750006.jpg?w=704&h=264&mode=crop&scale=both"}

const Stack =createStackNavigator();

const Tft = ({navigation}) => {
  return (
    <View>

    <Image source ={imagetft} style={styles.pinguImg} resizeMode={"cover"}/>

      <Button title="Jogo"
       onPress={() => {navigation.navigate(Jogo);
       }}/>
      <Button title="Configuracao"
       onPress={() => {navigation.navigate(Configuracao);
       }}/>
    </View>
  )
}

// const Details = ({navigation}) => {
//   return (
//     <View>
//       <Button title="Jogar"
//        onPress={() => {navigation.navigate(Jogo);
//        }}/>
//         <Button title="Configuracao"
//        onPress={() => {navigation.navigate('Configuracao');
//        }}/>
//     </View>
//   )
// }

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Team Fight Tatics"component={Tft} />
          <Stack.Screen name="Jogo"component={Jogo} />
          <Stack.Screen name="Configuracao"component={Configuracao} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  pinguImg: {
      marginLeft:30,
      marginTop:5,
      width: 700,
      height: 200,
      marginLeft:25,
      marginBottom:30,
      borderRadius: 30
      },
    })

export default App;
