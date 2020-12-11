import React from 'react'
import {View,StyleSheet, Text,SafeAreaView} from 'react-native'
import ToolBar from '../widgets/toolbar'
class MySelfPage extends React.Component{
    render(){
        return(
            <SafeAreaView>
                    <ToolBar titleName='我' menuShow={false}></ToolBar>
                    <View style={{width:'100%',height:'100%',backgroundColor:"#999"}}>
                        <Text style={{width:'100%',height:'100%',textAlign:"center",textAlignVertical:"center"}}>
                            我的
                        </Text>
                    </View>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    back:{

    },

})

export default MySelfPage