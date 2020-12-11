import React from 'react'
import {View,StyleSheet, Text,SafeAreaView} from 'react-native'
import ToolBar from '../widgets/toolbar'
class NavigationPage extends React.Component{
    render(){
        return(
            <SafeAreaView>
                    <ToolBar titleName='导航' menuShow={false}></ToolBar>
                    <View style={{width:'100%',height:'100%',backgroundColor:"#999"}}>
                        <Text style={{width:'100%',height:'100%',textAlign:"center",textAlignVertical:"center"}}>
                            导航
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

export default NavigationPage