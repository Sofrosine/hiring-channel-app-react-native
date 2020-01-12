import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Image, Button, Icon, ListItem, colors} from 'react-native-elements';
import ImageOverlay from 'react-native-image-overlay';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfileEngineer} from '../../../Redux/Actions/Engineer/getProfileEngineer';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo
import {getListProject} from '../../../Redux/Actions/Company/ListProject/getListProject';
import {getProfileAddProject} from '../../../Redux/Actions/Company/AddProject/getProfileAddProject';
import {updateAddProject} from '../../../Redux/Actions/Company/AddProject/updateAddProject';
import {insertAddProject} from '../../../Redux/Actions/Company/AddProject/insertAddProject';
import AsyncStorage from '@react-native-community/async-storage';

import Modal from "react-native-modal";
import Logo1 from '../../../Assets/Image/Skills/skill.jpg';

class UserProfile extends Component {
  state = {
    user: this.props.navigation.getParam('idUser'),
    userData: [],
    skill: [],
    data: [],
    profile: [],
    id_project: '',
    modalLimitVisible: false,
    modalSortVisible: false,
  };

  getProfile = async () => {
    await this.props.getProfileEngineer(this.state.user);
    this.setState({
      ...this.state,
      userData: Object.values(this.props.profileEngineer)[0][0],
      skill: Object.values(this.props.profileEngineer)[0][0].Skill.split(','),
    });
  };

  getProject = async () => {
    let token = await AsyncStorage.getItem('@accessToken')
    await this.props.getListProject(token);
    let id_company = await AsyncStorage.getItem('@id_company');
    this.setState({
      ...this.state,
      data: this.props.projectList.data.filter(project => {
        return ((project.id_company == id_company) && project.status == 'No Status');
      }),
    });
    console.log('idCOmpanyyy', id_company);
  };

  toggleModalLimit = () => {
    this.setState({modalLimitVisible: !this.state.modalLimitVisible});
  };

  toggleModalSort = () => {
    this.setState({modalSortVisible: !this.state.modalSortVisible});
  };

  updateProject = async () => {
    try {
      const data = {
        id_project: this.state.id_project,
        id_engineer: this.state.user,
        status: "Pending"
      };
      const token = await AsyncStorage.getItem('@accessToken')
      this.props.updateAddProject(data,token);
    } catch (error) {
      console.log(error);
    }
  };

  insertProject = async () => {
    try {
      const data = {
        id_project: this.state.id_project,
        id_engineer: this.state.user
      };
      const token = await AsyncStorage.getItem('@accessToken')
      this.props.insertAddProject(data,token);
    } catch (error) {
      console.log(error);
    }
  };

  hire = async (id_project) => {
    await this.setState({
      ...this.state,
      id_project: id_project
    })
    console.log('tokennz',await AsyncStorage.getItem('@accessToken'))
        await this.updateProject();
        await this.insertProject();
        await alert('Your project has been sent')
        await this.getProfile()
        this.getProject()
      }

  async componentDidMount() {
    await this.getProfile();
    await this.getProject();
    console.log('Project', this.state.data);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView horizontal={true}>
          <View>
            <ImageOverlay
              source={{uri: 'https://source.unsplash.com/random'}}
              height={620}
              contentPosition="center">
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
                    {this.state.userData.Name}
                  </Text>
                  <Text style={{color: 'white', alignSelf: 'center'}}>
                    {this.state.userData.Description}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name="check-circle" color="#8cdcf5" size={14} />
                    <Text style={{color: 'white', fontSize: 14}}>
                      {this.state.userData.total_project} Project
                    </Text>
                    <Text> </Text>
                    <Icon name="star" color="yellow" size={14} />
                    <Text style={{color: 'white', fontSize: 14}}>
                      {`${Math.ceil(this.state.userData.success_rate) || 0}% Success Rate`}
                    </Text>
                  </View>
                </View>
                <Button
                  onPress={this.toggleModalLimit}
                  buttonStyle={{
                    backgroundColor: '#F27E81',
                    height: 40,
                    width: 110,
                    borderRadius: 50,
                  }}
                  title="Hire"
                />
                <Modal
                  isVisible={this.state.modalLimitVisible}
                  onBackdropPress={this.toggleModalLimit}>
                  <View style={{height: 500, backgroundColor: 'white'}}>
                    <ScrollView>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 20,
                          fontWeight: 'bold',
                        }}>
                        Project
                      </Text>
                      {this.state.data.map(data => {
                        return (  
                          <ListItem
                            Component={TouchableScale}
                            title={data.project_name}
                            titleStyle={{fontWeight: 'bold'}}
                            friction={90}
                            tension={100}
                            activeScale={0.95}
                            leftIcon={{name: 'av-timer'}}
                            bottomDivider
                            chevronn
                            onPress={() => this.hire(data.id_project)}
                          />
                        );
                        // return (
                        //   <Text>{data.project_name}</Text>
                        // )
                      })}
                    </ScrollView>
                  </View>
                </Modal>
              </View>
            </ImageOverlay>
            {/* <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ color: '#F27E81', fontSize: 17 }} onPress={this.toggleModalLimit} >
                LIMIT
              </Text>
              
            </View> */}
          </View>
          <View></View>
          <View>
            <ImageOverlay
              overlayAlpha={0.7}
              source={{uri: 'https://source.unsplash.com/random'}}
              height={620}
              contentPosition="top">
              <ScrollView style={{marginBottom: 10}}>
                <View style={{flex: 1, margin: 10}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        fontWeight: 'bold',
                      }}>
                      Data
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        justifyContent: 'center',
                      }}>
                      Name: {this.state.userData.Name}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        justifyContent: 'center',
                      }}>
                      Location: {this.state.userData.Location}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        justifyContent: 'center',
                      }}>
                      Role: {this.state.userData.Description}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        justifyContent: 'center',
                      }}>
                      Date of Birth: {this.state.userData.DateofBirth}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        justifyContent: 'center',
                      }}>
                      Date Created: {this.state.userData.DateCreated}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderWidth: 2,
                    marginHorizontal: 10,
                    marginVertical: 15,
                  }}></View>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        marginBottom: 8,
                      }}>
                      Skills
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                      }}>
                      {this.state.skill.map(skill => {
                        return (
                          <ImageOverlay
                            height={60}
                            containerStyle={{width: 100, margin: 5}}
                            overlayAlpha={0.4}
                            source={Logo1}
                            title={skill}
                            titleStyle={{fontWeight: 'bold'}}
                            rounded={10}
                            contentPosition="center"
                          />
                        );
                      })}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: 'white',
                    borderWidth: 2,
                    marginHorizontal: 10,
                    marginVertical: 15,
                  }}></View>
                <View style={{flex: 1, marginHorizontal: 10}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        marginBottom: 8,
                      }}>
                      Description
                    </Text>

                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          justifyContent: 'center',
                        }}>
                        {this.state.userData.Description2}
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </ImageOverlay>
          </View>
        </ScrollView>
      </View>
    );
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
      getProfileEngineer,
      getListProject,
      getProfileAddProject,
      updateAddProject,
      insertAddProject,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
