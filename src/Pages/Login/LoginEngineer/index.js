import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import { bindActionCreators } from 'redux'
import { Button } from 'react-native-elements';
import { postRegisterEngineer } from '../../../Redux/Actions/LoginRegister/Engineer/postRegisterEngineer'
import { getLoginEngineer} from '../../../Redux/Actions/LoginRegister/Engineer/getLoginEngineer'

class LoginEngineer extends Component {
  state = {
    email: "",
    password: "",
    // redirectHome: false
  };

  // handleOnChange = async ({ target }) => {
  //   await this.setState({
  //     [target.name]: target.value
  //   });
  //   console.log(this.state.email)
  // };

  handleSubmitRegister = async e => {
    e.preventDefault();
    await this.props.postRegisterEngineer(this.state.email, this.state.password)
      .then(async result => {
        if (
          result.data === "Your email is not valid" ||
          result.data === "Your password is not valid "
        ) {
          // Swal.fire({
          //   title: result.data,
          //   text: "Please input your valid data",
          //   icon: "warning"
          // });
          alert('Please input your valid data')
        } else {
          await this.props.getLoginEngineer(this.state.email, this.state.password)
            .then((result) => {
              const data = this.props.engineerData.data.data
              const message = this.props.engineerData.data.message
              const { token, id_engineer } = data;
              AsyncStorage.setItem("@id_engineer", JSON.stringify(id_engineer));
              console.log(token);
              AsyncStorage.setItem("@accessToken", JSON.stringify(token));
              console.log(AsyncStorage.getItem("@accessToken"));
              this.props.navigation.navigate('InsertDataEngineer')
            });
          // Swal.fire({
          //   title: "Success",
          //   text: "Successfully Registered",
          //   icon: "success"
          // });
          alert('Successfully Registered')
          this.props.navigation.navigate('InsertDataEngineer')
          // this.props.history.push('/company/insert')
        }
      })
      .catch(err => {
        // Swal.fire({
        //   title: "Failed",
        //   text: "Your email already exists",
        //   icon: "warning"
        // });
        alert('Your email already exists')
      });
  };

  handleSubmitLogin = async e => {
    e.preventDefault();
    await this.props.getLoginEngineer(this.state.email, this.state.password)
      .then((result) => {
        console.log('engineerData', this.props.engineerData)
        console.log('message', this.props.engineerData.data.message)
        const data = this.props.engineerData.data.data
        const message = this.props.engineerData.data.message
        console.log(data);
        if (
          message === "Password is incorrect!" ||
          message === "Email or password is incorrect!"
        ) {
          // Swal.fire({
          //   title: `${message}`,
          //   text: "Please insert the valid value",
          //   icon: "warning"
          // });
          alert('Please insert the valid value')
        } else {
          const { token, id_engineer } = data;
          AsyncStorage.setItem("@id_engineer", JSON.stringify(id_engineer));
          console.log(id_engineer);
          console.log(token);
          AsyncStorage.setItem("@accessToken", JSON.stringify(token));
          console.log(AsyncStorage.getItem("@accessToken"));
          // Swal.fire({
          //   title: "Login Success",
          //   icon: "success"
          // });
          alert('Login Success')
          // this.setState({
          //   ...this.state,
          //   redirectHome: true
          // });
          this.props.navigation.navigate('HomeEngineer');
        }
      })
      .catch(err => {
        console.log(err);
        // Swal.fire({
        //   title: "You do not insert the data",
        //   text: "Please insert the data",
        //   icon: "error"
        // });
        alert("You do not insert the data")
      });
  };

  // redirectHome = () => {
  //   if (this.state.redirectHome) {
  //     return <Redirect to="/company/home" />;
  //   }
  // };

  // checkToken = async () => {
  //   let value = await AsyncStorage.getItem("@id_engineer")
  //   if (value != null) {
  //     this.props.navigation.navigate('HomeCompany');
  //   }
  // };

  // // componentWillMount() {
  // //   this.checkToken();
  // // }
  // componentWillMount() {
  //   this.checkToken()
  // }
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.textLogo}>Engineer</Text>
          </View>
          <View style={{ flex: 2}}>
            <View>
              <TextInput style={styles.textInput} onChangeText={email => this.setState({ email })}
                value={this.state.email} placeholder="Email" />
            </View>
            <View>
              <TextInput style={[styles.textInput, { marginBottom: 0 }]} onChangeText={password => this.setState({ password })}
                value={this.state.password} placeholder="Password" />
              <Text style={{marginBottom: 10, fontSize: 9, color: 'brown', flexWrap: 'wrap'}}>
                Rules: 1 Digit non-Alfanumerik,2 Same Capital Alphabet,3 Digit Numbers, 2 Same Lowercase Alphabet
              </Text>
            </View>
            <View>
              <View style={{marginBottom: 10}}>
                <Button onPress={this.handleSubmitLogin} buttonStyle={styles.loginButton} title="Login" />
              </View>
              <View>
                <Button onPress={this.handleSubmitRegister} buttonStyle={styles.registerButton} title="Register" />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    engineerData: state.getLoginEngineer.engineerData,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      postRegisterEngineer,
      getLoginEngineer,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginEngineer);
