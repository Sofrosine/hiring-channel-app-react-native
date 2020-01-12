import React, { Component } from 'react';
import { Text, View, Button, TextInput, Keyboard } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { Image, Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';
import Drawer from 'react-native-drawer'

class SideNavEngineer extends Component {
  render() {
    return (
      <View style={{ height: '100%' }}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: 'https://source.unsplash.com/random' }}
            style={{
              height: 150,
              width: '100%',
              overflow: 'hidden',
            }}
            containerStyle={{ flex: 1 }}>
          </Image>
        </View>
        <View style={{ flex: 3 }}>
          <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
            
            <Icon
              name='user-circle-o'
              type='font-awesome'
              color='white'
              containerStyle={{ marginLeft: 8, marginRight: 4 }}
            />
            
            <Text onPress={this.props.goProfile} style={{ fontSize: 20,color:'white' }}>Profile</Text>
          </View>
          {/* <View style={{ flexDirection: 'row', paddingBottom: 5 }}>

            <Icon
              name='gear'
              type='font-awesome'
              color='white'
              containerStyle={{ marginLeft: 8, marginRight: 4 }}
            />

            <Text onPress={this.props.goProfile} style={{ fontSize: 20, color: 'white' }}>Edit Skill</Text>
          </View> */}
          <View style={{ flexDirection: 'row', paddingBottom: 5, }}>
            <Icon
              name='power-off'
              type='font-awesome'
              color='white'
              containerStyle={{ marginLeft: 8, marginRight: 5, alignSelf: 'center' }}
            />
            <Text onPress={this.props.logout} style={{ fontSize: 20,color:'white' }}>Logout</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default SideNavEngineer