import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Image, Icon} from 'react-native-elements';
import ImageOverlay from 'react-native-image-overlay';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUser} from '../Redux/Actions/HomePage/getUser';
import {searchUser} from '../Redux/Actions/HomePage/searchUser';

class Card extends Component {


  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {this.props.listEngineer.map(data => {
          return (
            <ImageOverlay
              source={{uri: 'https://source.unsplash.com/random'}}
              height={275}
              containerStyle={{width: 150, padding: 5, margin: 5, elevation: 5}}
              overlayAlpha={0.5}
              rounded={8}
              contentPosition="bottom">
              <TouchableHighlight o>
                <>
                  <Image source={{uri: 'https://source.unsplash.com/random'}} />

                  <Text
                    onPress={() => this.props.onPress(data.id)}
                    style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                    {data.Name}
                  </Text>

                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {data.Description}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}>
                    <Icon name="check-circle" color="#8cdcf5" size={12} />
                    <Text style={{color: 'white', fontSize: 8}}>
                      {data.total_project} Project
                    </Text>
                    <Text> </Text>
                    <Icon name="star" color="yellow" size={12} />
                    <Text style={{color: 'white', fontSize: 8}}>
                      {`${data.success_rate || 0}% Success Rate`}
                    </Text>
                  </View>
                  <Text style={{color: 'white'}}>Skills:</Text>
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                    {data.Skill}
                  </Text>
                </>
              </TouchableHighlight>
            </ImageOverlay>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.getUser,
    searchData: state.searchUser,
    // profileEngineer: state.getProfileEngineer.profileEngineer,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
