import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import ImageOverlay from 'react-native-image-overlay';
import { bindActionCreators } from 'redux';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import LogoSkill from '../../../Assets/Image/Skills/skill.jpg'
import { connect } from 'react-redux'
import { getProfileEngineer } from '../../../Redux/Actions/Engineer/getProfileEngineer'
import AsyncStorage from '@react-native-community/async-storage';
import Modal from "react-native-modal";
import {getCompany} from '../../../Redux/Actions/Company/getCompany'
import {updateCompany} from '../../../Redux/Actions/Company/updateCompany'

class CompanyProfile extends Component {
  state = {
    data: [],
    Name: "",
    Logo: "",
    Location: "",
    Description: "",
    modalAbout: false,
    modalUpdate: false,
    originalName: "",
    originalDesc: "",
    originalLocation: "",
    originalLogo: ""
  }

  toggleModalAbout = () => {
    this.setState({ modalAbout: !this.state.modalAbout });
  };

  toggleModalUpdate = () => {
    this.setState({ modalUpdate: !this.state.modalUpdate })
  }

  handleUpdate = async () => {
    const token = await AsyncStorage.getItem('@accessToken')
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    };
    const data = {
      Name: this.state.Name === "" ? this.state.originalName : this.state.Name,
      Description: this.state.Description === "" ? this.state.originalDesc : this.state.Description,
      Location: this.state.Location === "" ? this.state.originalLocation : this.state.Location,
      Logo: this.state.Logo === "" ? this.state.originalLogo : this.state.Logo
    }
    await this.props.updateCompany(data,token)
    this.props.getCompany(config)
    alert('Data Updated!')
    
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@accessToken')
    const config = {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    };
    await this.props.getCompany(config);
    await this.setState({
      data: this.props.companyData
    })
    this.setState({
      originalName: this.state.data.Name,
      originalDesc: this.state.data.Description,
      originalLocation: this.state.data.Location,
      originalLogo: this.state.data.Logo
    })
  }

  render() {
    return (
      <View style={{ paddingBottom: 8 }}>
        <ScrollView>
          <ImageOverlay
            source={{ uri: 'https://source.unsplash.com/random' }}
            height={400}
            contentPosition="top"
            overlayColor="gray"
            overlayAlpha={0.7}
            containerStyle={{ paddingTop: 60 }}>
            <Icon
              onPress={this.toggleModalUpdate}
              name="gear"
              type="font-awesome"
              color="white"
              containerStyle={{ position: 'absolute', right: 25, top: 20 }}
            />
            <Modal
              isVisible={this.state.modalUpdate}
              onBackdropPress={this.toggleModalUpdate}>
              <View
                style={{
                  height: 400,
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}>
                <ScrollView>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: 10,
                    }}>
                    Edit Profile
                  </Text>
                  <TextInput
                    style={{
                      height: 40,
                      borderBottomColor: 'gray',
                      borderColor: 'white',
                      borderWidth: 1,
                      marginBottom: 10,
                    }}
                    placeholderTextColor="gray"
                    placeholder="Name"
                    onChangeText={Name => {
                      this.setState({ Name })
                    }}
                  />
                  <TextInput
                    style={{
                      height: 40,
                      borderBottomColor: 'gray',
                      borderColor: 'white',
                      borderWidth: 1,
                      marginBottom: 10,
                    }}
                    placeholderTextColor="gray"
                    placeholder="Logo"
                    onChangeText={Logo => {
                      this.setState({ Logo })
                    }}
                  />
                  <TextInput
                    style={{
                      height: 40,
                      borderBottomColor: 'gray',
                      borderColor: 'white',
                      borderWidth: 1,
                      marginBottom: 10,
                    }}
                    placeholderTextColor="gray"
                    placeholder="Description"
                    onChangeText={Description => {
                      this.setState({ Description })
                    }}
                  />
                  <TextInput
                    style={{
                      height: 40,
                      borderBottomColor: 'gray',
                      borderColor: 'white',
                      borderWidth: 1,
                      marginBottom: 10,
                    }}
                    placeholderTextColor="gray"
                    placeholder="Location"
                    onChangeText={Location => {
                      this.setState({ Location })
                    }}
                  />
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button onPress={this.handleUpdate} title="Confirm" color="black" />
                  </View>
                </ScrollView>
              </View>
            </Modal>
            <View
              style={{
                paddingBottom: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{ height: 100, width: 100 }}
                containerStyle={{ alignSelf: 'center' }}
                borderRadius={100}
                source={{ uri: 'https://source.unsplash.com/random' }}
              />
              <View style={{ marginVertical: 10 }}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  {this.state.data.Name}
                </Text>
                <Text style={{ color: 'white', alignSelf: 'center' }}>
                  {this.state.data.Location}
                </Text>
              </View>
            </View>
          </ImageOverlay>
          <View style={{ marginLeft: 15, marginTop: 30 }}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 25,
                marginBottom: 10,
                justifyContent: 'space-between',
              }}>
              <Text>DATA</Text>
            </View>
            <View style={{ paddingRight: 40 }}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{ color: '#5f615f', lineHeight: 18 }}>
                Name: {this.state.data.Name}
              </Text>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{ color: '#5f615f', lineHeight: 18 }}>
                Location: {this.state.data.Location}
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 15, marginTop: 30 }}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 25,
                marginBottom: 10,
                justifyContent: 'space-between',
              }}>
              <Text>ABOUT</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  onPress={this.toggleModalAbout}
                  style={{ color: '#6ea6b8' }}>
                  See All{' '}
                </Text>
                <Modal
                  isVisible={this.state.modalAbout}
                  onBackdropPress={this.toggleModalAbout}>
                  <View
                    style={{
                      height: 500,
                      backgroundColor: 'white',
                      paddingHorizontal: 10,
                      borderRadius: 10,
                    }}>
                    <ScrollView>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 20,
                          fontWeight: 'bold',
                          marginBottom: 10,
                        }}>
                        About
                      </Text>
                      <Text>{this.state.data.Description}</Text>
                    </ScrollView>
                  </View>
                </Modal>
                <Icon
                  color="#6ea6b8"
                  size={13}
                  containerStyle={{ alignSelf: 'center' }}
                  name="right"
                  type="antdesign"
                />
              </View>
            </View>
            <View style={{ paddingRight: 40 }}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{ color: 'gray', lineHeight: 18 }}>
                {this.state.data.Description}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    companyData: state.getCompany.companyData
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCompany,
      updateCompany
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
