
import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

class ToolBar extends React.Component{
    render(){
        return(
            <View style={styles.toolbar}>
                <Text style={styles.callBack}>返回</Text>
                <Text style={styles.title}>{this.props.titleName}</Text>
                {
                    this.props.menuShow==false?(null):( <Text style={styles.rightMenu}>菜单</Text>)
                }
               
            </View>
        )
    }
}


const styles=StyleSheet.create({
        toolbar:{
            height:80,
            backgroundColor:'#1593fa',
            paddingTop:20,
            flexDirection:"row",
            
        },
        callBack:{
            textAlign:"center",
            textAlignVertical:"center",
            paddingLeft:5,
            fontSize:15,
            color:"#fff",
        },
        title:{
            color:'#fff',
            flex:1,
            fontSize:22,
            textAlign:"center",
            textAlignVertical:"center"
            
            
        },
        rightMenu:{
            textAlign:"center",
            textAlignVertical:"center",
            paddingRight:5,
            fontSize:15,
            color:"#fff",
        }
        
})


export default ToolBar