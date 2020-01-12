import React, {Component} from 'react'
import { Text,View, TextInput } from 'react-native'
import ImageOverlay from 'react-native-image-overlay';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {insertEngineer} from '../../../Redux/Actions/Engineer/insertEngineer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

class InsertDataEngineer extends Component {
  state = {
    Name: "",
    Description: "",
    Description2: "",
    Location: "",
    DateofBirth: ""
  };

  handleSubmit = async e => {
    const token = await AsyncStorage.getItem('@accessToken')
    const data = {
      name: this.state.Name,
      description: this.state.Description,
      description2: this.state.Description2,
      location: this.state.Location,
      dateofbirth: this.state.DateofBirth
    };
    await this.props.insertEngineer(data,token)
    // this.props.history.push("/engineer/home");
    alert('Data Inserted!')
    this.props.navigation.navigate('HomeEngineer')
  };


  render() {
    return(
      <ImageOverlay
        source={{ uri: 'https://source.unsplash.com/random' }}
        height={620}
        contentPosition="center">
          <View>
            <Text style={{color:'white',fontSize:30}}>Insert Your Data</Text>
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
              marginTop:20
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
            placeholder="Role"
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
            onChangeText={Description2 => this.setState({ Description2 })}
            // onKeyPress={this.handleSearch2}
            selectTextOnFocus={true}
          // onSelectionChange={this.handleSearch2}
          />
        </View>
        <View>
          <DatePicker
            style={{ width: 300, marginBottom: 10 }}
            date={this.state.DateofBirth}
            mode="date"
            placeholder="Date of Birth"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                borderColor:'white',
                backgroundColor:'white',
                borderRadius:25
              },
            }}
            onDateChange={DateofBirth => {
              this.setState({ DateofBirth });
            }}
          />
        </View>
        <View style={{width: 200}}>
          <Button onPress={this.handleSubmit} title="Insert" buttonStyle={{ backgroundColor: '#f296b2',borderRadius:25 }}></Button>
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
      insertEngineer
    },
    dispatch,
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(InsertDataEngineer)