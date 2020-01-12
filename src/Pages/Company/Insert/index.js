import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import ImageOverlay from 'react-native-image-overlay';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
// import { insertEngineer } from '../../../Redux/Actions/Engineer/insertEngineer'
import {postCompany} from '../../../Redux/Actions/Company/postCompany'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

class InsertDataCompany extends Component {
  state = {
    Name: "",
    Logo: "",
    Location: "",
    Description: "",
  }

  insertData = async () => {
    const data = {
      name: this.state.Name,
      logo: this.state.Logo,
      location: this.state.Location,
      description: this.state.Description,
    }
    const token = await AsyncStorage.getItem('@accessToken')
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    };

    await this.props.postCompany(data, config)
    alert('Data Inserted')
    this.props.navigation.navigate('HomeCompany')
  }


  render() {
    return (
      <ImageOverlay
        source={{ uri: 'https://source.unsplash.com/random' }}
        height={620}
        contentPosition="center">
        <View>
          <Text style={{ color: 'white', fontSize: 30 }}>Insert Your Data</Text>
        </View>
        <View>
          <TextInput
            placeholder="Name"
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              borderRadius: 25,
              width: 310,
              height: 40,
              paddingLeft: 45,
              paddingRight: 20,
              backgroundColor: 'white',
              marginBottom: 10,
              marginTop: 20
            }}
            onChangeText={Name => this.setState({ Name })}
            // onKeyPress={this.handleSearch2}
            selectTextOnFocus={true}
          // onSelectionChange={this.handleSearch2}
          />
        </View>
        <View>
          <TextInput
            placeholder="Location"
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              borderRadius: 25,
              width: 310,
              height: 40,
              paddingLeft: 45,
              paddingRight: 20,
              backgroundColor: 'white',
              marginBottom: 10
            }}
            onChangeText={Location => this.setState({ Location })}
            // onKeyPress={this.handleSearch2}
            selectTextOnFocus={true}
          // onSelectionChange={this.handleSearch2}
          />
        </View>
        <View>
          <TextInput
            placeholder="Logo"
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              borderRadius: 25,
              width: 310,
              height: 40,
              paddingLeft: 45,
              paddingRight: 20,
              backgroundColor: 'white',
              marginBottom: 10
            }}
            onChangeText={Logo => this.setState({ Logo })}
            // onKeyPress={this.handleSearch2}
            selectTextOnFocus={true}
          // onSelectionChange={this.handleSearch2}
          />
        </View>
        <View>
          <TextInput
            placeholder="Description"
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              borderRadius: 25,
              width: 310,
              height: 40,
              paddingLeft: 45,
              paddingRight: 20,
              backgroundColor: 'white',
              marginBottom: 10
            }}
            onChangeText={Description => this.setState({ Description })}
            // onKeyPress={this.handleSearch2}
            selectTextOnFocus={true}
          // onSelectionChange={this.handleSearch2}
          />
        </View>
        <View style={{ width: 200 }}>
          <Button onPress={this.insertData} title="Insert" buttonStyle={{ backgroundColor: '#f296b2', borderRadius: 25 }}></Button>
        </View>
      </ImageOverlay>
    )
  }
}

const mapStateToProps = state => {
  return {
    // homeCompany: state.redirectNavbar.homeCompany,
    // profileCompany: state.redirectNabar.prfileCompany
    profileEngineer: state.getProfileEngineer.profileEngineer,
    projectList: state.getListProject.projectList,
    profileData: state.getProfileAddProject.profileData,
    // totalProject: state.getTotalProject.totalProject
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      postCompany
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertDataCompany)