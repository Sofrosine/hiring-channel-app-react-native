import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Image, Icon} from 'react-native-elements';
import ImageOverlay from 'react-native-image-overlay';
import { bindActionCreators } from 'redux';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import LogoSkill from '../../../Assets/Image/Skills/skill.jpg'
import {connect} from 'react-redux'
import {getProfileEngineer} from '../../../Redux/Actions/Engineer/getProfileEngineer'
import AsyncStorage from '@react-native-community/async-storage';
import Modal from "react-native-modal";
import DatePicker from 'react-native-datepicker';
import {updateEngineer} from '../../../Redux/Actions/Engineer/updateEngineer'
import {getSkill} from '../../../Redux/Actions/Engineer/Edit Skill/getSkill'
import {getProfileSkill} from '../../../Redux/Actions/Engineer/Edit Skill/getProfileSkill'
import {postSkill} from '../../../Redux/Actions/Engineer/Edit Skill/postSkill'
import {deleteSkill} from '../../../Redux/Actions/Engineer/Edit Skill/deleteSkill'

class EngineerProfile extends Component {
  state = {
    data: [],
    skill:[],
    skillList: [],
    idSkill: "",
    skillProfile: [],
    modalAbout: false,
    modalUpdate: false,
    modalSkill: false,
    Name: "",
    Description: "",
    Description2:"",
    Location: "",
    DateofBirth: "",
    originalName: "",
    originalDesc: "",
    originalDesc2: "",
    originalLocation: "",
    originalDOB: ""
  }

  getProfile = async () => {
    const id_engineer = await AsyncStorage.getItem('@id_engineer')
    await this.props.getProfileEngineer(id_engineer)
    this.setState({
      data: this.props.profileEngineer.data[0],
      skill: this.props.profileEngineer.data[0].Skill.split(',')
    })
  }

  toggleModalAbout = () => {
    this.setState({ modalAbout: !this.state.modalAbout });
  };

  toggleModalUpdate = () => {
    this.setState({modalUpdate: !this.state.modalUpdate})
  }

  toggleModalSkill = () => {
    this.setState({modalSkill: !this.state.modalSkill})
  }

  handleUpdate = async () => {
    const data = {
      name: this.state.Name === "" ? this.state.originalName : this.state.Name,
      description: this.state.Description === "" ? this.state.originalDesc : this.state.Description,
      description2: this.state.Description2 === "" ? this.state.originalDesc2 : this.state.Description2,
      location: this.state.Location === "" ? this.state.originalLocation : this.state.Location,
      dateofbirth: this.state.DateofBirth === "" ? this.state.originalDOB : this.state.DateofBirth
    }
    const token = await AsyncStorage.getItem('@accessToken')
    console.log('data1', data)
    await this.props.updateEngineer(data,token)
    await alert('Data Updated')
    this.getProfile()
  }

  insertSkill = async (id_skill) => {
    const id_engineer = await AsyncStorage.getItem("@id_engineer");
    const data = {
      id_engineer: id_engineer,
      id_skill: id_skill
    };
    await this.props.postSkill(data)  
    this.getSkill();
    this.getProfile()
  };

  deleteSkill = async (id_skill) => {
    const id_engineer = await AsyncStorage.getItem("@id_engineer");
    const token = await AsyncStorage.getItem('@accessToken')
    const data = {
      id_engineer: id_engineer,
      id_skill: id_skill
    };
    this.props.deleteSkill(data.id_engineer, data.id_skill,token)
      this.getSkill()
        this.getProfile();


  };

  listSkill = async e => {
    await this.props.getSkill()
    this.setState({
      skillList: this.props.skillData.data.data
    });
  };

  getSkill = async e => {
    const token = await AsyncStorage.getItem('@accessToken')
    await this.props.getProfileSkill(token);
    const data = this.props.profileDataSkill.data
    if (Object.values(data[0])[8] !== null) {
      return this.setState({
        skillProfile: Object.values(data[0])[9].split(",")
      });
    }


  };

  async componentDidMount() {
    await this.getProfile()
    this.setState({
      originalName: this.state.data.Name,
      originalDesc: this.state.data.Description,
      originalDesc2: this.state.data.Description2,
      originalLocation: this.state.data.Location,
      originalDOB: this.state.data.DateofBirth.slice(0, 10)
    })
    await this.listSkill()
    console.log('liztSkill', this.state.skillList)
    await this.getSkill()
    console.log('brooz', this.state.skillProfile)
  }

 

  render() {
    return (
      <View style={{paddingBottom: 8}}>
        <ScrollView>
          <ImageOverlay
            source={{uri: 'https://source.unsplash.com/random'}}
            height={400}
            contentPosition="top"
            overlayColor="gray"
            overlayAlpha={0.7}
            containerStyle={{paddingTop: 60}}>
            <Icon
              onPress={this.toggleModalUpdate}
              name="gear"
              type="font-awesome"
              color="white"
              containerStyle={{position: 'absolute', right: 25, top: 20}}
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
                    placeholder="Role"
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
                    placeholder="Description"
                    onChangeText={Description2 => {
                      this.setState({Description2})
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
                      this.setState({Location})
                    }}
                  />
                  <DatePicker
                    style={{width: 300, marginBottom: 10}}
                    date={this.state.dateofbirth}
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
                      },
                    }}
                    onDateChange={DateofBirth => {
                      this.setState({DateofBirth});
                    }}
                  />
                  <View style={{flex:1, alignItems:'center'}}>
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
                style={{height: 100, width: 100}}
                containerStyle={{alignSelf: 'center'}}
                borderRadius={100}
                source={{uri: 'https://source.unsplash.com/random'}}
              />
              <View style={{marginVertical: 10}}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}>
                  {this.state.data.Name}
                </Text>
                <Text style={{color: 'white', alignSelf: 'center'}}>
                  {this.state.data.Description}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: 150,
                paddingLeft: 9,
              }}>
              <View style={{alignItems: 'center'}}>
                <Icon
                  containerStyle={{marginBottom: 10}}
                  name="wrench"
                  type="simple-line-icon"
                  color="white"></Icon>
                <Text style={{color: '#bbbfbd'}}>Skill</Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  {this.state.skill.length}
                </Text>
              </View>
              <View
                style={{alignItems: 'center', marginLeft: 30, marginRight: 25}}>
                <Icon
                  containerStyle={{marginBottom: 10}}
                  name="star-o"
                  type="font-awesome"
                  color="white"></Icon>
                <Text style={{color: '#bbbfbd'}}>Rate</Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  {this.state.data.success_rate || 0}%
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Icon
                  containerStyle={{marginBottom: 10}}
                  name="checkcircleo"
                  type="antdesign"
                  color="white"></Icon>
                <Text style={{color: '#bbbfbd'}}>Project</Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  {this.state.data.total_project}
                </Text>
              </View>
            </View>
          </ImageOverlay>
          <View style={{marginLeft: 15, marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 25,
                marginBottom: 10,
                justifyContent: 'space-between',
              }}>
              <Text>DATA</Text>
            </View>
            <View style={{paddingRight: 40}}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{color: '#5f615f', lineHeight: 18}}>
                Name: {this.state.data.Name}
              </Text>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{color: '#5f615f', lineHeight: 18}}>
                Location: {this.state.data.Location}
              </Text>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{color: '#5f615f', lineHeight: 18}}>
                Role: {this.state.data.Description}
              </Text>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{color: '#5f615f', lineHeight: 18}}>
                Date of Birth: {this.state.data.DateofBirth}
              </Text>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{color: '#5f615f', lineHeight: 18}}>
                Date Created: {this.state.data.DateCreated}
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 15, marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 25,
                marginBottom: 10,
                justifyContent: 'space-between',
              }}>
              <Text>ABOUT</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  onPress={this.toggleModalAbout}
                  style={{color: '#6ea6b8'}}>
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
                      <Text>{this.state.data.Description2}</Text>
                    </ScrollView>
                  </View>
                </Modal>
                <Icon
                  color="#6ea6b8"
                  size={13}
                  containerStyle={{alignSelf: 'center'}}
                  name="right"
                  type="antdesign"
                />
              </View>
            </View>
            <View style={{paddingRight: 40}}>
              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{color: 'gray', lineHeight: 18}}>
                {this.state.data.Description2}
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 15, marginTop: 30}}>
            <View
              style={{
                flexDirection: 'row',
                marginRight: 25,
                marginBottom: 10,
                justifyContent: 'space-between',
              }}>
              <Text>SKILL</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  onPress={this.toggleModalSkill}
                  style={{ color: '#6ea6b8' }}>
                  See All{' '}
                </Text>
                <Modal
                  isVisible={this.state.modalSkill}
                  onBackdropPress={this.toggleModalSkill}>
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
                        Edit Skill
                      </Text>
                      <View>
                        <ScrollView contentContainerStyle={{alignItems:'center'}}>
                            {this.state.skillList.map(skill => {
                              return (
                                <View style={{
                                  flexDirection: 'row', width: 275, height: 40, borderBottomColor: 'black', borderWidth: 1,
                                  borderColor: 'white', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5
                                }}>
                            <Text>{skill.Skill}</Text>
                                  {this.state.skillProfile.includes(skill.Skill) ? 
                               
                                <Text onPress={() => this.deleteSkill(skill.id)} style={{ color: 'red' }}>Delete</Text>
                               :
                                <Text onPress={() => { this.insertSkill(skill.id)}} style={{ color: 'green' }}>Add</Text>
                                  }
                                </View>
                              )
                            })}
                        </ScrollView>
                      </View>
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
            <View style={{paddingRight: 10, flexDirection: 'row'}}>
              <ScrollView>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  {this.state.skill.map(skill => {
                    return (
                      <ImageOverlay
                        height={60}
                        containerStyle={{width: 100, margin: 5}}
                        overlayAlpha={0.4}
                        source={LogoSkill}
                        title={skill}
                        titleStyle={{fontWeight: 'bold'}}
                        rounded={10}
                        contentPosition="center"
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    profileEngineer: state.getProfileEngineer.profileEngineer,
    skillData: state.getSkill.skillData,
    profileDataSkill: state.getProfileSkill.profileDataSkill
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators (
    {
      getProfileEngineer,
      updateEngineer,
      getSkill,
      getProfileSkill,
      postSkill,
      deleteSkill
    },
    dispatch
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(EngineerProfile);
