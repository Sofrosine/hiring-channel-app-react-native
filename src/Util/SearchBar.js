import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUser } from '../Redux/Actions/HomePage/getUser'
import { searchUser } from '../Redux/Actions/HomePage/searchUser'
class SearchBar extends Component {
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
        Keyboard.dismiss();
      } else {
        console.log(result);
        console.log('engineerz2', this.state.engineers);
        await this.setState({
          ...this.state,
          engineers: result.data.data,
          pages: result.data.pages,
          totalData: result.data.total,
        });
        console.log('engineerz3', this.state.engineers);
        Keyboard.dismiss();
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

  // async componentDidMount() {
  //   await this.handleSearch2();
  // }

  render() {
    return (
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
          onSubmitEditing={this.handleSearch2}></TextInput>
        <Icon
          name="search"
          color="gray"
          onPress={this.handleSearch2}
          containerStyle={{position: 'absolute', left: 13, top: 10}}
        />
      </View>
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
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)