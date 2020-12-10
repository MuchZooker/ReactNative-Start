import React from 'react'
import {View,StyleSheet, SafeAreaView} from 'react-native'
import ToolBar from '../widgets/toolbar'
class NavigationPage extends React.Component{
    render(){
        return(
            <SafeAreaView>
                    <ToolBar titleName='导航' menuShow={false}></ToolBar>

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    back:{

    },

})

export default NavigationPage