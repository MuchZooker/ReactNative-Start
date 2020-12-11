

import React from 'react'
import ToolBar from '../../widgets/toolbar'
import {SafeAreaView} from 'react-native'
export default class CodePage extends React.Component{


    render(){
        return(
            <SafeAreaView>
            <ToolBar titleName='编码' menuShow={false}></ToolBar>



            

    </SafeAreaView>
        )
    }
}