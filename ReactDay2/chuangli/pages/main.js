
import React from 'react'
import {View,StyleSheet, SafeAreaView} from 'react-native'
import ToolBar from '../widgets/toolbar'
class MainPage extends React.Component{
    render(){
        return(
            <SafeAreaView>
                    <ToolBar titleName='主页'></ToolBar>

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    back:{

    },

})

export default MainPage