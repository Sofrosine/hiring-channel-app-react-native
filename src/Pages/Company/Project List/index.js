import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Text, View } from 'react-native'
import { Icon, Image} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import {getListProject} from '../../../Redux/Actions/Company/ListProject/getListProject'
import AsyncStorage from '@react-native-community/async-storage'

class CompanyProject extends Component {
  state = {
    data: [],
    profile: [],
    id_project: '',
    modalLimitVisible: false,
    modalSortVisible: false,
  };

  getProject = async () => {
    let token = await AsyncStorage.getItem('@accessToken')
    await this.props.getListProject(token);
    let id_company = await AsyncStorage.getItem('@id_company');
    this.setState({
      ...this.state,
      data: this.props.projectList.data.filter(project => {
        return project.id_company == id_company;
      }),
    });
    console.log('idCOmpanyyy', id_company);
  };

  async componentDidMount() {
    await this.getProject()
    console.log('preijextt', this.state.data)
  }

  render() {
    return (
      <>
      <View style={{flex:1, backgroundColor:'pink'}}>
        <View style={{flex:1, backgroundColor:'pink', justifyContent:'center', marginLeft:30}}>
            <Text style={{color:'white', fontSize: 30}}>Project List</Text>
        </View>
        <View style={{flex:2, backgroundColor:'white', borderTopLeftRadius: 90}}>
            <View style={{ flex: 1, borderTopLeftRadius: 90, justifyContent: 'center', position:'relative'}}>
              <Icon
                name='settings-remote'
                color='gray'
                containerStyle={{alignItems:'flex-start', position:'absolute',left:15}} />
              <Text style={{color:'gray',fontSize:20, marginLeft: 35}}>PT MASSGT</Text>
            </View>
            <View style={{flex:3}}>
             <ScrollView>
                {this.state.data.map(data => {
                  return (
                    <View style={{ height: 80, padding: 4, marginLeft: 15, flexDirection: 'row' }}>
                      <Image
                        source={{ uri: 'https://source.unsplash.com/random' }}
                        style={{
                          width: 70,
                          height: 70,
                          alignSelf: 'center',
                          overflow: 'hidden',
                        }}
                        borderTopRightRadius={8} borderBottomLeftRadius={8}></Image>
                      <View style={{ flexDirection: 'row', alignSelf: 'center', marginLeft: 8, }}>
                        <Text style={{ fontSize: 17, flex: 1 }}>{data.project_name}</Text>
                        {data.status == 'Success' ? <Text style={{ fontSize: 16, flex: 1, color: 'green' }}>{data.status}</Text>
                          : data.status == 'Pending' ? <Text style={{ fontSize: 16, flex: 1, color: 'red' }}>{data.status}</Text>
                            : data.status == 'On Process' ? <Text style={{ fontSize: 16, flex: 1, color: 'blue' }}>{data.status}</Text>:
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
      // getProfileEngineer,
      getListProject,
      // getProfileAddProject,
      // updateAddProject,
      // insertAddProject,
    },
    dispatch,
  );
};


export default connect(mapStateToProps,mapDispatchToProps)(CompanyProject)