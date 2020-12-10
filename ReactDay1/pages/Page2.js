import React from 'react'
import {View,Text,Button} from 'react-native'


//使用路由：
export default class NavigationPageNext extends React.Component {
    render() {
      return <View>

          <Text>second View</Text>
          <Button title={'back '} onPress={()=>{
                // alert("ss")
                // this.props.navigation.navigate('Details')
                this.props.navigation.pop()
                // this.props.navigation.dispatch(StackActions.reset({
                //     index: 0,
                //     actions: [
                //         NavigationActions.navigate({ routeName: 'Details' })
                //     ],
                // }))
                }} />
      </View>;
    }
  }