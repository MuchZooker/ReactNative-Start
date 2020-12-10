import React from 'react'
import {View,StyleSheet, SafeAreaView} from 'react-native'
import ToolBar from '../widgets/toolbar'
class MySelfPage extends React.Component{
    render(){
        return(
            <SafeAreaView>
                    <ToolBar titleName='我' menuShow={false}></ToolBar>

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    back:{

    },

})

export default MySelfPage