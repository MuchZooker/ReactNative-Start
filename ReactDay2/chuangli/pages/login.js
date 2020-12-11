
import React from 'react'
import {View,StyleSheet, SafeAreaView, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ToolBar from '../widgets/toolbar'
class LoginPage extends React.Component{
    render(){
        return(
            <SafeAreaView>
                    <ToolBar titleName='登陆' menuShow={false}></ToolBar>



                    <View style={styles.login_input_back}>
                        <TextInput style={styles.input_user}  defaultValue='xx测试'/>
                        <TextInput style={styles.input_user} textContentType='password'  defaultValue='xx测试'/>

                        <Button title={'登陆'} onPress={()=>{
                        // alert('122')
                        this.props.navigation.navigate("Main")
                    }}/>
                    </View>
                 

            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    back:{

    },
    login_input_back:{
        width:'100%',
        height:'100%',
        
       
    },
    input_user:{
        borderWidth:1,
    },

})

export default LoginPage