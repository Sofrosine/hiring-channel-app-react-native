import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Header, Icon, Input} from 'react-native-elements';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends Component {
  checkTokenEngineer = async () => {
    let value = await AsyncStorage.getItem("@id_engineer")
    if (value != null) {
      this.props.navigation.navigate('HomeEngineer');
    } else {
      this.props.navigation.navigate('LoginEngineer')
    }
  }

  checkTokenCompany = async () => {
    let value = await AsyncStorage.getItem("@id_company")
    if (value != null) {
      this.props.navigation.navigate('HomeCompany');
    } else {
      this.props.navigation.navigate('LoginCompany')
    }
  }
  
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.buttonLoginEngineer}>
            <Button
              // onPress={() => this.props.navigation.navigate('LoginEngineer')}
              onPress={this.checkTokenEngineer}
              buttonStyle={styles.buttonStyle}
              titleStyle={{}}
              title="Login/Register as Engineer"
            />
          </View>
          <View style={styles.buttonLoginCompany}>
            <Button
              // onPress={() => this.props.navigation.navigate('LoginCompany')}
              onPress={this.checkTokenCompany}
              buttonStyle={styles.buttonStyle}
              titleStyle={{}}
              title="Login/Register as Company"
            />
          </View>
        </View>
      </>
    );
  }
}

export default Home;
