import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from './chuangli/pages/login'
import MainPage from './chuangli/pages/main'


const RootStack = createStackNavigator(
    {
        Login: {
            screen:LoginPage
        },
        Main:{
            screen:MainPage
        },
        //-------------------
    },
    {
        initialRouteName: 'Login',
        // mode: 'modal',
        // // 用于设置安卓卡片式跳转
        // transitionConfig: () => ({
        //   screenInterpolator: StackViewStyleInterpolator.forHorizontal,
        // }),
        navigationOptions: {
            gesturesEnabled: true,
        },
        // // 默认导航头样式设置
        defaultNavigationOptions: {
            header: null,
        },
        headerMode:null
    },
);

export default AppContainer = createAppContainer(RootStack);
  