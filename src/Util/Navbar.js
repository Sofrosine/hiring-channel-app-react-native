import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import ImageOverlay from 'react-native-image-overlay';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import SearchBar from './SearchBar'

class Navbar extends Component {
  render() {
    return (
      <View style={{
        height:100, flexDirection: 'column', alignItems: "center", justifyContent:"flex-start", backgroundColor: '#F27E81', borderWidth: 1,
         paddingHorizontal: 18, borderColor: '#F27E81'
      }}>
        <View style={{
          flex: 1, flexDirection: 'row', alignItems: "flex-start", elevation: 4,marginBottom:4}}>
          <View style={{ flex: 1, overflow: "hidden", paddingTop:4 }}>
            <Image source={{ uri: 'https://source.unsplash.com/random' }} style={{
              width: 40, height: 40, overflow: "hidden"
            }} borderRadius={150 / 2}></Image>
          </View>
          <View style={{ flex: 2, alignItems: 'center', paddingTop:7 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Hiring Channel</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', paddingTop: 8 }}>
            <Icon
              name='notifications'
              color='#454244'
              size={30} />
          </View>
        </View>
        <SearchBar/>
      </View>
    )
  }
}

export default Navbar