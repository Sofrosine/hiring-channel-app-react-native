import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, LoginEngineer, LoginCompany, GettingStarted, HomeCompany, UserProfile, CompanyProject, HomeEngineer, EngineerProject, EngineerProfile, InsertDataEngineer, InsertDataCompany, CompanyProfile} from '../../Pages';

const Router = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    LoginEngineer: {
      screen: LoginEngineer,
    },
    LoginCompany: {
      screen: LoginCompany,
    },
    GettingStarted: {
      screen: GettingStarted
    },
    HomeCompany: {
      screen: HomeCompany,
    },
    UserProfile: {
      screen: UserProfile
    },
    CompanyProject: {
      screen: CompanyProject
    },
    HomeEngineer: {
      screen: HomeEngineer
    },
    EngineerProject: {
      screen: EngineerProject
    },
    EngineerProfile: {
      screen: EngineerProfile
    },
    InsertDataEngineer: {
      screen: InsertDataEngineer
    },
    InsertDataCompany: {
      screen: InsertDataCompany
    },
    CompanyProfile: {
      screen: CompanyProfile
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'GettingStarted'
  },
);

export default createAppContainer(Router);
