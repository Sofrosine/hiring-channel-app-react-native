import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import {Image, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import {bindActionCreators} from 'redux';
import ActionButton from 'react-native-action-button';
import Iconz from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import TouchableScale from 'react-native-touchable-scale'; 
import {getStatusEngineer} from '../../../Redux/Actions/Engineer/Home/Status/getStatusEngineer'
import { updateIsStatusEngineer0} from '../../../Redux/Actions/Engineer/Home/Status/updateIsStatusEngineer0'
import { updateStatusEngineer} from '../../../Redux/Actions/Engineer/Home/Status/updateStatusEngineer'
import { updateIsStatusEngineer2} from '../../../Redux/Actions/Engineer/Home/Status/updateIsStatusEngineer2'
import {deleteEngineerHome} from '../../../Redux/Actions/Engineer/Home/deleteEngineerHome'
import { updateEngineerHome } from '../../../Redux/Actions/Engineer/Home/updateEngineerHome'
import Drawer from 'react-native-drawer'
import SideNavEngineer from '../../../Util/SideNavEngineer.js';

class HomeEngineer extends Component {
  state = {
    data: [],
    is_accept: "",
    id: "",
    id_project: "",
    id_engineer: "",
    color: [
      ['#d16ba5', '#c777b9', '#ba83ca', '#aa8fd8', '#9a9ae1', '#8aa7ec'],
      ['#ee95c8', '#eb91cd', '#e78ed2', '#e28bd8', '#dc88de', '#d984e2'],
      ['#e369af', '#da6bb4', '#d16eb8', '#c870bc', '#be72bf', '#b971c0'],
      ['#b561c5', '#ae5cc7', '#ad51c9', '#ab45cb', '#aa38cd', '#a827cf'],
    ],
    open:false
  };

  updateProject = async (id_project) => {
    try {
      const body = {
        status: "No Status"
      };
      const token = await AsyncStorage.getItem('@accessToken')
      const update = await this.props.
        updateEngineerHome(id_project, body, token)
      console.log(update);
      this.getStatus();
    } catch (error) {
      console.log(error);
    }
  };

  cancelProject = async (id_project,id_engineer) => {
    try {
      const token = await AsyncStorage.getItem('@accessToken')
      this.props.
        deleteEngineerHome(id_project, id_engineer,token)
    } catch (error) {
      console.log(error);
    }
  };

  reject = async (id_project) => {
    const id_engineer = await AsyncStorage.getItem('@id_engineer')
    await this.cancelProject(id_project, id_engineer);
    this.updateProject(id_project);
  };

  getStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('@accessToken')
      const status = await this.props.getStatusEngineer(token);
      console.log(status);
      this.setState({
        ...this.state,
        data: this.props.statusEngineer.data.filter(data => {
          return data.is_accept == 0
        })
      });
      console.log('statuz',this.props.statusEngineer)
      console.log('stateDATAXZ', this.state.data)
    } catch (error) {
      console.log("oops", error);
    }
  };

  updateStatus = async (id,id_project) => {
    const token = await AsyncStorage.getItem('@accessToken')
    try {
      this.props.
        updateStatusEngineer(id, this.state.is_accept,token
      );
    } catch (error) {
      console.log(error);
    }
    if (this.state.is_accept === 0) {
      try {
        this.props.updateIsStatusEngineer0(id_project,token);
      } catch (error) {
        console.log(error);
      }
    } else if (this.state.is_accept === 2) {
      try {
        this.props.updateIsStatusEngineer2(id_project,token);
      } catch (error) {
        console.log(error);
      }
    }
  }



  handleReject = async (id_project) => {
        const updateAccept = await this.setState({
          ...this.state,
          is_accept: 0
        });
        this.reject(id_project);
      }

  handleApprove = async (id,id_project) => {
        const updateAccept = await this.setState({
          ...this.state,
          is_accept: 2
        });
        await this.updateStatus(id,id_project);
        await alert('Project Approved')
        this.getStatus()
      }

  controlOpenSidenav = () => {
    this.setState({
      open: true
    })
  };

  logout = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('GettingStarted')
  }

  componentDidMount() {
    this.getStatus()
  }

  render() {
    return (
      <Drawer
      open={this.state.open}
      tapToClose={true}
        type="overlay"
        content={<SideNavEngineer goProfile={() => this.props.navigation.navigate('EngineerProfile')} logout={this.logout}/>}
        tapToClose={true}
        openDrawerOffset={0.4} // 20% gap on the right side of drawer
        elevation={4}
        panCloseMask={0.4}
        closedDrawerOffset={-3}
        styles={{
          drawer: {
            backgroundColor: '#e394c1'
        } }}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
      <View style={{flex: 1}}>
        <View
          style={{
            height: 70,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#d16ba5',
            borderWidth: 1,
            paddingHorizontal: 18,
            borderColor: '#d16ba5',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              elevation: 4,
              marginBottom: 4,
            }}>
            <View style={{flex: 1, overflow: 'hidden', paddingTop: 4}}>
              <Image
              
                source={{uri: 'https://source.unsplash.com/random'}}
                style={{
                  width: 40,
                  height: 40,
                  overflow: 'hidden',
                }}
                  borderRadius={150 / 2}><Text style={{opacity:0, fontSize:50,alignSelf:'center'}} onPress={this.controlOpenSidenav}>h</Text></Image>
            </View>
            <View style={{flex: 2, alignItems: 'center', paddingTop: 7}}>
                <Text onPress={this.controlOpenSidenav} style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                Hiring Channel
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', paddingTop: 8}}>
              <Icon name="notifications" color="white" size={30} />
            </View>
          </View>
        </View>
        <ScrollView style={{ backgroundColor: '#e3e6e6'}}>
          <View style={styles.containerProject}>
            {this.state.data.map(data => {
              return (
                <TouchableScale
                  activeScale={0.9}
                >
                  <LinearGradient
                    colors={this.state.color[Math.floor(Math.random() * 3 + 1)]}
                    style={styles.cardProject}>
                    <View
                      style={{
                        flex: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={{
                          uri:
                            'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
                        }}
                        style={{ height: 70, width: 70, marginBottom: 4 }}
                        borderRadius={50}
                      />
                      <Text style={{ fontSize: 18, color: '#ebe9f0', marginHorizontal: 5, }}>
                        {data.project_name}
                      </Text>
                      <Text style={{ fontSize: 12, color: '#ebe9f0', marginHorizontal: 5 }}>
                        {data.Company}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                      }}>
                      <Icon onPress={() => this.handleApprove(data.id, data.id_project)} name="check" color="#ebe9f0" />
                      <View
                        style={{
                          borderRightColor: '#ebe9f0',
                          borderTopColor: '#ebe9f0',
                          borderBottomColor: '#ebe9f0',
                          borderLeftColor: '#ebe9f0',
                          borderWidth: 1,
                          height: 23,
                          marginHorizontal: 15,
                        }}></View>
                      <Icon onPress={() => this.handleReject(data.id_project)} name="close" color="#ebe9f0" />
                    </View>
                  </LinearGradient>
                  </TouchableScale>
                
              )
            })}
          </View>
        </ScrollView>
        <ActionButton
            autoInactive={false}
            renderIcon={active =>
              active ? (
                <Iconz name="md-menu" style={styles.actionButtonIcon} />
              ) : (
                <Iconz name="md-menu" style={styles.actionButtonIcon} />
              )
            }
            offsetY={50}
          buttonColor="#eb91cd">
            <ActionButton.Item
            buttonColor="#d16ba5"
              title="Project Status"
              onPress={() => {
                this.props.navigation.navigate('EngineerProject');
              }}>
              <Iconz name="md-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
      </View>
      </Drawer>
    );
  }
}
const mapStateToProps = state => {
  return {
    homeEngineer: state.redirectNavbar.homeEngineer,
    profileEngineer: state.redirectNavbar.profileEngineer,
    updateHomeEngineer: state.updateEngineerHome.updateHomeEngineer,
    statusEngineer: state.getStatusEngineer.statusEngineer
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // getProfileEngineer,
      // getListProject,
      getStatusEngineer,
      updateIsStatusEngineer0,
      updateIsStatusEngineer2,
      updateStatusEngineer,
      deleteEngineerHome,
      updateEngineerHome
      // getProfileAddProject,
      // updateAddProject,
      // insertAddProject,
    },
    dispatch,
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(HomeEngineer);
