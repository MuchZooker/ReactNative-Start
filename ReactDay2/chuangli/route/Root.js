import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CodePage from '../pages/code/code';
import LoginPage from '../pages/login'
// import MainPage from '../pages/main'
import MainPage from '../route/Main'
import BlePage from '../pages/ble/ble'


const RootStack = createStackNavigator(
    {
        Login: {
            screen:LoginPage
        },
        Main:{
            screen:MainPage
        },
        Code:{
            screen:CodePage
        },
        Ble:{
            screen:BlePage
        }
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
  