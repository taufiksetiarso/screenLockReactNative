/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button,Linking,TextInput
,ImageBackground} from 'react-native';
import Categori from './Categori'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class App  extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.logButton = React.createRef();

  }
  state={
    showWebView: false
  }
  componentDidMount(){
   
 }
 buttonClick=()=>{
 this.logButton.current.focus();
 }
  render() {
   return (
     
     <ImageBackground source={require("./gambar/Lock-Screen-Background-HD-Wallpaper-050.jpg")} style={{width: '100%', height: '100%'}}>
     <StatusBar translucent backgroundColor="transparent"></StatusBar>
     <View style={styles.container}>
     <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:"bold"}}>Lock!</Text>
     </View>
   
   </ImageBackground>
   
   );
  }
  }
  
  const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:20,
  
   },
  });


