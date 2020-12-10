
import React from 'react'
import {View,StyleSheet, SafeAreaView} from 'react-native'
import ToolBar from '../widgets/toolbar'
class HomePage extends React.Component{
    render(){
        return(
            <SafeAreaView>
                    <ToolBar titleName='主页' menuShow={false}></ToolBar>

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    back:{

    },

})

export default HomePage