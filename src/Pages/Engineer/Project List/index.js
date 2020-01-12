import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Text, View } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { getProjectEngineer } from '../../../Redux/Actions/Engineer/Home/Project/getProjectEngineer'
import AsyncStorage from '@react-native-community/async-storage'
import {cancelListProject} from '../../../Redux/Actions/Company/ListProject/cancelListProject'
import {updateListProject } from '../../../Redux/Actions/Company/ListProject/updateListProject'
import {updateProjectEngineer} from '../../../Redux/Actions/Engineer/Home/Project/updateProjectEngineer'
import {updateIsStatusEngineer1} from '../../../Redux/Actions/Engineer/Home/Project/updateIsStatusEngineer1'

import ActionButton from 'react-native-action-button';

class EngineerProject extends Component {
  state = {
    data: [],
    id: "",
    is_accept: 1,
    id_project: "",
    id_engineer: "",
  };

  getStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('@accessToken')
      await this.props.getProjectEngineer(token);
      this.setState({
        ...this.state,
        data: Object.values(this.props.projectEngineer.data)
      });
      console.log('datazz',this.state.data)
    } catch (error) {
      console.log(error)
    }
  };

  noStatusProject = async (id_project,token) => {
    const data = {
      status: "No Status"
    };
    await this.props.updateListProject(data, id_project,token)
    this.getStatus()
  };

  cancelProject = async (id_project, id_engineer,token) => {
    await this.props.cancelListProject(id_project, id_engineer,token)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateStatus = async (id,id_project) => {
    const token = await AsyncStorage.getItem('@accessToken')
    try {
      this.props.updateProjectEngineer(id, this.state.is_accept,token)
    } catch (error) {
      console.log(error)
    }
    if (this.state.is_accept === 1) {
      try {
        this.props.updateIsStatusEngineer1(id_project,token)
      } catch (error) {
        console.log(error)
      }
    }
  };

  handleSent = async (id,id_project) => {
        await this.updateStatus(id,id_project);
        this.getStatus()
        alert('Good Work! Project has been sent')
      }

  cancel = async (id_project) => {
    const token = await AsyncStorage.getItem('@accessToken')
        const id_engineer = await AsyncStorage.getItem('@id_engineer')
        await this.cancelProject(id_project,id_engineer,token);
        this.noStatusProject(id_project,token);
        alert('Project Rejected')
      }

  componentDidMount() {
    this.getStatus()
  }

  render() {
    return (
      <>
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
          <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', marginLeft: 30 }}>
            <Text style={{ color: 'white', fontSize: 30 }}>Project List</Text>
          </View>
          <View style={{ flex: 2, backgroundColor: 'white', borderTopLeftRadius: 90 }}>
            <View style={{ flex: 1, borderTopLeftRadius: 90, justifyContent: 'center', position: 'relative' }}>
              {/* <Icon
                name='settings-remote'
                color='gray'
                containerStyle={{ alignItems: 'flex-start', position: 'absolute', left: 15 }} />
              <Text style={{ color: 'gray', fontSize: 20, marginLeft: 35 }}>PT MASSGT</Text> */}
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView>
                {this.state.data.map(data => {
                  return (
                    <View style={{ height: 80, padding: 4, marginLeft: 15,marginRight:15, flexDirection: 'row', borderBottomColor:'gray',borderColor:'white',borderWidth:1}}>
                      <Image
                        source={{ uri: 'https://source.unsplash.com/random' }}
                        style={{
                          width: 70,
                          height: 70,
                          alignSelf: 'center',
                          overflow: 'hidden',
                        }}
                        borderTopRightRadius={8} borderBottomLeftRadius={8}></Image>
                      <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: 8 }}>
                        <Text style={{ fontSize: 17, flex: 1 }}>{data.project_name}</Text>
                        {data.status == 'Success' ? <Text style={{ fontSize: 16, flex: 1, color: 'green' }}>{data.status}</Text>
                          : data.status == 'Pending' ? <Text style={{ fontSize: 16, flex: 1, color: 'red' }}>{data.status}</Text>
                            : data.status == 'On Process' ? 
                            <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
                                <Text style={{ fontSize: 16, color: 'green',marginBottom:10 }} onPress={() => this.handleSent(data.id,data.id_project)}>Sent</Text>
                                <Text style={{ fontSize: 16, color: 'red' }} onPress={() => this.cancel(data.id_project)}>Cancel</Text>
                            </View>
                            :
                              <Text style={{ fontSize: 16, flex: 1, color: 'black' }}>{data.status}</Text>}
                      </View>
                    </View>
                  )
                })}
              </ScrollView>

            </View>
          </View>
        </View>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    homeEngineer: state.redirectNavbar.homeEngineer,
    profileEngineer: state.redirectNavbar.profileEngineer,
    projectEngineer: state.getProjectEngineer.projectEngineer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // getProfileEngineer,
      // getListProject,
      // getProfileAddProject,
      // updateAddProject,
      // insertAddProject,
      getProjectEngineer,
      cancelListProject,
      updateListProject,
      updateProjectEngineer,
      updateIsStatusEngineer1
    },
    dispatch,
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(EngineerProject)