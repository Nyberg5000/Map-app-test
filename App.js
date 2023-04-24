import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { createOpenLink } from 'react-native-open-maps';

//const startAddress ='1 Infinite Loop, Cupertino, CA';
//const endAddress ='1600 Amphitheatre Pkwy, Mountain View, CA';
const directions = {end:'Sanderumvej 16, Odense, DK'};
const openDirections= createOpenLink(directions);

export default class example extends Component{
  render(){
    return (
      <View style={styles.container}>
<Text style={styles.header}>Go to place</Text>
<Button
color={'#bdc3c7'}
onPress={openDirections}
title={"Click to open"}>
</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1'
  },
  header: {
    fontSize:28,
    fontWeight:'bold',
    color:'#ecf0f1'
  }
});
// import React from 'react';
// //import React, { Component } from 'react';
// //import openMap from 'react-native-open-maps';
// import MapView from 'react-native-maps';
// import { StyleSheet,  View, Dimensions } from 'react-native';
// import { Button } from 'react-native';

// //sæt start kort til Odense:
// //finder skærmens størrelse
// const {width, height} = Dimensions.get("window");
// //udregninger der gør noget ift. kortets placering på skærm og zoom
// const ASPECT_RATIO = width/height;
// const LATITUDE_DELTA = 0.02;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// //koordinater for start position
// const INITIAL_POSITION = {
//   latitude:55.368007,
//   longitude:10.343260,
//   latitudeDelta: LATITUDE_DELTA,
//   longitudeDelta: LONGITUDE_DELTA,
//  };

// export default function App() {
  
//   return (
    
//       <View >
//      <MapView style={styles.map} initialRegion={INITIAL_POSITION} />
//      </View>

//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });