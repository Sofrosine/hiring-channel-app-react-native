import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Image, Button } from 'react-native-elements'
import Logo from '../../Assets/Image/vector-hiring.png'
import styles from './styles'

class GettingStarted extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeText}>
          <Text style={styles.welcomeTextItem1}>Hiring Channel</Text>
          <Text style={styles.welcomeTextItem2}>Makes your hiring transation easier</Text>
        </View>
        <View style={styles.welcomeImage}>
          <Image source={Logo} style={styles.welcomeImageItem} />
        </View>
        <View style={styles.welcomeButton}>
          <Button
          onPress={() => this.props.navigation.navigate('Home')}
            buttonStyle={styles.welcomeButtonItem1}
            titleStyle={styles.welcomeButtonItem2}
            title="Login/Register"
          />
        </View>
      </View>
    );
  }
}

export default GettingStarted