
import React from 'react'
import { Image } from 'react-native'
import TabNavigator    from 'react-native-tab-navigator'
import HomePage from '../pages/home'
import MySelfPage from '../pages/myself'
import NavigationPage from '../pages/navigation'
class MainPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            select:'home'
        }
    }

    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    title='首页'
                    selected={this.state.select=='home'}
                    titleStyle={{color:'#605b5b',fontSize:14}}
                    selectedTitleStyle={{color:'#1593FA',fontSize:14}}
                    renderIcon={()=><Image  style={{width:24,height:24,}} source={require("../../res/tab_home_unselect.png")} />}
                    renderSelectedIcon={()=><Image  style={{width:24,height:24,}} source={require("../../res/tab_home_select.png")} />}
                    onPress={()=>{
                        this.setState({
                            select:"home"
                        })
                    }}
                >
                    {
                        <HomePage navigation={this.props.navigation}></HomePage>
                    }
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='导航'
                    selected={this.state.select=='navigation'}
                    titleStyle={{color:'#605b5b',fontSize:14}}
                    selectedTitleStyle={{color:'#1593FA',fontSize:14}}
                    renderIcon={()=><Image  style={{width:24,height:24,}} source={require("../../res/tab_navigation_unselect.png")} />}
                    renderSelectedIcon={()=><Image  style={{width:24,height:24,}} source={require("../../res/tab_navigation_select.png")} />}
                    onPress={()=>{
                        this.setState({
                            select:"navigation"
                        })
                    }}
                >
                    {
                        <NavigationPage navigation={this.props.navigation}></NavigationPage>
                    }
                </TabNavigator.Item>

                <TabNavigator.Item
                    title='我的'
                    selected={this.state.select=='myself'}
                    titleStyle={{color:'#605b5b',fontSize:14}}
                    selectedTitleStyle={{color:'#1593FA',fontSize:14}}
                    renderIcon={()=><Image  style={{width:24,height:24,}} source={require("../../res/tab_myself_unselect.png")} />}
                    renderSelectedIcon={()=><Image  style={{width:24,height:24,}} source={require("../../res/tab_myself_select.png")} />}
                    onPress={()=>{
                        this.setState({
                            select:"myself"
                        })
                    }}
                >
                    {
                        <MySelfPage navigation={this.props.navigation}></MySelfPage>
                    }
                </TabNavigator.Item>
            </TabNavigator>

        )

    }
}


export default MainPage

