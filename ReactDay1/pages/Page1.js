import React from 'react'
import {View,Text, Button } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';


//使用路由：
 class NavigationPage extends React.Component {
    render() {
        return <View>

            <Button title={'Go to '} onPress={()=>{
                // alert("ss")
                this.props.navigation.navigate('Details')
                // this.props.navigation.dispatch(StackActions.reset({
                //     index: 0,
                //     actions: [
                //         NavigationActions.navigate({ routeName: 'Details' })
                //     ],
                // }))
                }} />
            {/* <Button onPress={() => {
                this.props.navigation.navigate('homeNext')
            }}>跳转</Button> */}
        </View>;
    }
}

export default  NavigationPage