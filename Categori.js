import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button,Linking
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class Categori  extends Component {
 
  state={
    
    showWebView: false
  }
  
 
  render() {
   return (
     
     <View style={styles.container}>
      
     <Text style={{fontSize:20,color:'red'}}>what can i help desd?</Text>
   
     </View>
   )
  }
  }
  
  const styles = StyleSheet.create({
   container: {
     
     justifyContent: 'center',
     backgroundColor: 'white',
   },
  });


