
import React from 'react'
import {View,StyleSheet, SafeAreaView, Button} from 'react-native'
import ToolBar from '../widgets/toolbar'
class LoginPage extends React.Component{
    render(){
        return(
            <SafeAreaView>
                    <ToolBar titleName='登陆'></ToolBar>
                    <Button title={'登陆'} onPress={()=>{
                        // alert('122')
                        this.props.navigation.navigate("Main")
                    }}/>

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    back:{

    },

})

export default LoginPage