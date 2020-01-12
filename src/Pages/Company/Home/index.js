import React, {Component} from 'react';
import {Text, View, Button, TextInput, Keyboard} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import Card from '../../../Util/Card.js';
import styles from './style';
import {Image, Icon} from 'react-native-elements';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import Logo from '../../../Assets/Image/arkademy-logo.png';
import Navbar from '../../../Util/Navbar';
import {bindActionCreators} from 'redux';
import {getUser} from '../../../Redux/Actions/HomePage/getUser';
import {searchUser} from '../../../Redux/Actions/HomePage/searchUser';
import {postListProject} from '../../../Redux/Actions/Company/ListProject/postListProject';
import ActionButton from 'react-native-action-button';
import Iconz from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import Drawer from 'react-native-drawer'
import SideNavCompany from '../../../Util/SideNavCompany.js';

class HomeCompany extends Component {
  state = {
    engineers: [],
    name: '',
    user: '',
    skill: '',
    sort: '' || 'name',
    order: '' || 'ASC',
    limit: 5,
    page: 1,
    totalPages: '',
    totalData: '',
    redirectHome: false,
    modalLimitVisible: false,
    modalSortVisible: false,
    modalAddProjectVisible: false,
    project_name: '',
    open:false
  };

  handlePageNext = e => {
    let page = this.state.page;
    if (this.state.page !== this.state.totalPages) {
      this.setState({
        page: page + 1,
      });
    }
    console.log('page', this.state.page);
  };

  handlePagePrevious = e => {
    let page = this.state.page;
    if (page > 1) {
      this.setState({
        page: page - 1,
      });
    } else {
      this.setState({
        page: 1,
      });
    }
    console.log('page', this.state.page);
  };

  nextPage = async e => {
    const next = await this.handlePageNext(e);
    this.handleSearch2(e);
  };

  previousPage = async e => {
    const previous = await this.handlePagePrevious(e);
    this.handleSearch2(e);
  };

  handleLimitPlus = e => {
    const limit = this.state.limit;
    this.setState({
      ...this.state,
      limit: limit + 1,
    });
  };

  handleLimitMin = e => {
    const limit = this.state.limit;
    if (limit > 1) {
      this.setState({
        ...this.state,
        limit: limit - 1,
      });
    } else {
      this.setState({
        ...this.state,
        limit: 1,
      });
    }
  };

  limitPlus = async e => {
    const plus = await this.handleLimitPlus(e);
    this.handleSearch2();
  };

  limitMin = async e => {
    const min = await this.handleLimitMin(e);
    this.handleSearch2();
  };

  handleSearch2 = async () => {
    const params = {
      name: this.state.name,
      skill: this.state.skill,
      sort_by: this.state.sort,
      order: this.state.order,
      limit: this.state.limit,
      page: this.state.page,
    };

    try {
      await this.props.searchUser(params);
      const result = await this.props.searchData;
      if (
        this.state.name === '' &&
        this.state.skill === '' &&
        this.state.sort === ''
      ) {
        await this.getAllEngineer();
      } else {
        console.log(result);
        console.log('engineerz2', this.state.engineers);
        await this.setState({
          ...this.state,
          engineers: result.data.data,
          totalPages: result.data.pages,
          totalData: result.data.total,
        });
        console.log('engineerz3', this.state.engineers);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  getAllEngineer = async () => {
    await this.props.getUser();
    const user = await this.props.user;
    this.setState({
      engineers: user.data.data,
    });
    console.log('engineerzz2', this.state.engineers);
  };

  toggleModalLimit = () => {
    this.setState({modalLimitVisible: !this.state.modalLimitVisible});
  };

  toggleModalSort = () => {
    this.setState({modalSortVisible: !this.state.modalSortVisible});
  };

  toggleModalAddProject = () => {
    this.setState({modalAddProjectVisible: !this.state.modalAddProjectVisible});
  };

  sorting = async () => {
    await this.toggleModalSort();
    this.handleSearch2();
  };

  logout = async () => {
    try {
      await AsyncStorage.clear();
      this.props.navigation.navigate('GettingStarted');
    } catch (e) {
      console.log('error', e);
    }
  };

  controlOpenSidenav = () => {
    this.setState({
      open: true
    })
  };

  addProject = async () => {
    try {
      const id_company = await AsyncStorage.getItem('@id_company');
      const token = await AsyncStorage.getItem('@accessToken');
      const data = {
        project_name: this.state.project_name,
        id_company: id_company,
      };
      alert('Project Inserted');
      await this.props.postListProject(data, token);
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    this.handleSearch2();
  }

  render() {
    return (
      <Drawer
        open={this.state.open}
        tapToClose={true}
        type="overlay"
        content={<SideNavCompany goProfile={() => this.props.navigation.navigate('CompanyProfile')} logout={this.logout} />}
        tapToClose={true}
        openDrawerOffset={0.4} // 20% gap on the right side of drawer
        elevation={4}
        panCloseMask={0.4}
        closedDrawerOffset={-3}
        styles={{
          drawer: {
            backgroundColor: '#e394c1'
          }
        }}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
      <View style={{flex: 1}}>
        {/* <Navbar/> */}
        <View
          style={{
            height: 100,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#F27E81',
            borderWidth: 1,
            paddingHorizontal: 18,
            borderColor: '#F27E81',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'flex-start',
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
                borderRadius={150 / 2}>
                  <Text onPress={this.controlOpenSidenav} style={{alignSelf:'center',justifyContent:'center'
                ,fontSize:30,opacity:0}}>H</Text>
                </Image>
                
            </View>
            <View style={{flex: 2, alignItems: 'center', paddingTop: 7}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                Hiring Channel
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end', paddingTop: 8}}>
              <Icon
                onPress={this.logout}
                name="notifications"
                color="#454244"
                size={30}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 3,
              position: 'relative',
            }}>
            <TextInput
              placeholder="Search.."
              style={{
                borderWidth: 1,
                borderColor: '#E8E8E8',
                borderRadius: 25,
                width: 310,
                height: 40,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: 'white',
              }}
              onChangeText={name => this.setState({name})}
              // onKeyPress={this.handleSearch2}
              selectTextOnFocus={true}
              onSelectionChange={this.handleSearch2}></TextInput>
            <Icon
              name="search"
              color="gray"
              onPress={this.handleSearch2}
              containerStyle={{position: 'absolute', left: 13, top: 10}}
            />
          </View>
        </View>
        <View style={{flex: 6}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
              <Card
                listEngineer={this.state.engineers}
                onPress={id => {
                  this.props.navigation.navigate('UserProfile', {
                    idUser: id,
                  });
                }}
              />
            </View>
            <View
              style={{
                height: 60,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 1,
              }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text
                  style={{ color: '#F27E81', fontSize: 17 }}
                  onPress={this.toggleModalLimit}>
                  LIMIT
            </Text>
                <Modal
                  isVisible={this.state.modalLimitVisible}
                  onBackdropPress={this.toggleModalLimit}>
                  <View
                    style={{
                      height: 100,
                      flexDirection: 'row',
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon
                      reverse
                      onPress={this.limitMin}
                      name="chevron-left"
                      color="#F27E81"
                      style={styles.actionButtonIcon3}></Icon>
                    <Text
                      style={{
                        color: '#F27E81',
                        alignSelf: 'center',
                        fontSize: 17,
                      }}>{`${this.state.limit}`}</Text>
                    <Icon
                      reverse
                      onPress={this.limitPlus}
                      name="chevron-right"
                      color="#F27E81"
                      style={styles.actionButtonIcon3}></Icon>
                  </View>
                </Modal>
              </View>
              <View
                style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                <Icon
                  reverse
                  onPress={this.previousPage}
                  name="chevron-left"
                  color="#F27E81"
                  style={styles.actionButtonIcon2}></Icon>
                <Text
                  style={{
                    color: '#F27E81',
                    alignSelf: 'center',
                    fontSize: 17,
                  }}>{`${this.state.page} of ${this.state.totalPages}`}</Text>
                <Icon
                  reverse
                  onPress={this.nextPage}
                  name="chevron-right"
                  color="#F27E81"
                  style={styles.actionButtonIcon2}></Icon>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Text
                  style={{ color: '#F27E81', fontSize: 17 }}
                  onPress={this.toggleModalSort}>
                  SORT
            </Text>
                <Modal
                  isVisible={this.state.modalSortVisible}
                  onBackdropPress={this.sorting}>
                  <View
                    style={{
                      height: 100,
                      flexDirection: 'row',
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}>
                      {/*name
                      skill
                  dateupdated*/}
                      <Text
                        on
                        style={{
                          color: '#F27E81',
                          alignSelf: 'center',
                          fontSize: 17,
                        }}>
                        Sort by:
                  </Text>
                      <Text
                        onPress={sort => this.setState({ sort: 'name' })}
                        style={{
                          color: '#F27E81',
                          alignSelf: 'center',
                          fontSize: 17,
                        }}>
                        Name
                  </Text>
                      <Text
                        onPress={sort => this.setState({ sort: 'skill' })}
                        style={{
                          color: '#F27E81',
                          alignSelf: 'center',
                          fontSize: 17,
                        }}>
                        Skill
                  </Text>
                      <Text
                        onPress={sort => this.setState({ sort: 'dateupdated' })}
                        style={{
                          color: '#F27E81',
                          alignSelf: 'center',
                          fontSize: 17,
                        }}>
                        Date Updated
                  </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}>
                      <Text
                        style={{
                          color: '#F27E81',
                          alignSelf: 'center',
                          fontSize: 17,
                        }}>
                        Order:
                  </Text>
                      <Text
                        onPress={order => this.setState({ order: 'ASC' })}
                        style={{
                          color: '#F27E81',
                          alignSelf: 'center',
                          fontSize: 17,
                        }}>
                        ASC
                  </Text>
                      <Text
                        onPress={order => this.setState({ order: 'DESC' })}
                        style={{
                          color: '#F27E81',
                          alignSelf: 'center',
                          fontSize: 17,
                        }}>
                        DESC
                  </Text>
                    </View>
                  </View>
                </Modal>
              </View>
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
            buttonColor="#F27E81">
            <ActionButton.Item
              buttonColor="#9b59b6"
              title="New Project"
              onPress={this.toggleModalAddProject}>
              <Iconz name="md-create" style={styles.actionButtonIcon} />
              <Modal
                isVisible={this.state.modalAddProjectVisible}
                onBackdropPress={this.toggleModalAddProject}>
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextInput
                    // onChange={this.handleOnChange}
                    onChangeText={project_name => this.setState({project_name})}
                    value={this.state.project_name}
                    style={[styles.textInput]}
                    name="projet"
                    placeholder="Project name..."
                  />
                  <Button
                    color="#F27E81"
                    title="Add Project"
                    onPress={this.addProject}
                  />
                </View>
              </Modal>
              {/* <Text onPress={this.toggleModalAddProject}>Hello </Text> */}
            </ActionButton.Item>

            <ActionButton.Item
              buttonColor="#1abc9c"
              title="Project Status"
              onPress={() => {
                this.props.navigation.navigate('CompanyProject');
              }}>
              <Iconz name="md-done-all" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
        
        
      </View>
      </Drawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.getUser.userData,
    searchData: state.searchUser.searchData,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      searchUser,
      getUser,
      postListProject,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeCompany);
