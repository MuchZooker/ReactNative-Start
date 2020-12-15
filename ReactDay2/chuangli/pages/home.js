
import React from 'react'
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image, Dimensions, TouchableHighlight ,NativeModules} from 'react-native'
import ToolBar from '../widgets/toolbar'


var width1 = Dimensions.get('window').width / 4

const MainTabTop = (props) => {

    function clickItem(position){

        switch(position){
            case 1:
                // NativeModules.JsBlueTooth.startScanBueTooth((data)=>{
                //         console.log(data);
                // })
                props.navigation.navigate('Ble')
            break
            default:
                // alert(position)
                NativeModules.JsIntent.showToast(position+'')
            break
        }
    
        }


    return (
        <TouchableHighlight 
        style={styles.maintab_model_back}
        onPress={() => clickItem(props.posi)}
        underlayColor='#f3f3f3'>
    <View style={{ flex: 1, alignItems: "center" }}>
        <Image style={{ width: 34, height: 34, marginTop: 10 }} source={props.data.img}></Image>
        <Text style={{ paddingTop: 5, paddingBottom: 10 }}>{props.data.title}</Text>
    </View>
    </TouchableHighlight>)
}


const MainTabModel = (props) => {

   function clickItem(position){

    switch(position){
        case 0:
            //android原生需要编写兼容
            NativeModules.JsIntent.startActivity('CodeActivity')
            // props.navigation.navigate('Code')
        break
        default:
            // alert(position)
            NativeModules.JsIntent.showToast(position+'')
        break
    }

    }



    return (

        <TouchableHighlight
            underlayColor='#f3f3f3' onPress={() => clickItem(props.posi)} 
        >

            <View style={styles.maintab_model_back}>
                <Image style={{ width: 18, height: 18, marginTop: 10 }} source={props.data.img}></Image>
                <Text style={{ paddingTop: 5, paddingBottom: 10 }}>{props.data.title}</Text>
            </View>
        </TouchableHighlight>
        )
}

class HomePage extends React.Component {
  


    render() {
        const mainTabTopData = [{ title: '上站', img: require('../../res/inex_shang.png') }
            , { title: '蓝牙', img: require('../../res/inex_lan.png') }
            , { title: '任务', img: require('../../res/inex_ren.png') }
            , { title: '离站', img: require('../../res/inex_li.png') },]

        const mainTabmodelData = [{ title: '编码', img: require('../../res/index_bian.png') }
            , { title: '审批', img: require('../../res/index_shen.png') }
            , { title: '日志', img: require('../../res/index_ri.png') }
            , { title: '钥匙', img: require('../../res/index_yao.png') }
            , { title: '统计', img: require('../../res/index_chart.png') }
            , { title: '维修', img: require('../../res/index_wei.png') }

        ]
        return (
            <SafeAreaView style={{ marginBottom: 60 }}>
                <ToolBar titleName='智慧锁' menuShow={false}></ToolBar>

                <ScrollView style={{ width: '100%', height: '100%', backgroundColor: "#f5f5f5" }}>
                    <Image style={{ width: '100%', height: 180, }} source={require('../../res/index_banner_def.png')} />
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                        {
                            mainTabTopData.map((item, index) => {
                                return (<MainTabTop navigation={this.props.navigation} key={index} posi={index} data={item}></MainTabTop>)
                            })
                        }
                    </View >


                    <View style={{ height: 45, flexDirection: "row", marginTop: 5, marginBottom: 5, backgroundColor: "#fff" }}>

                    </View>

                    <View style={{ backgroundColor: '#fff' }}>
                        {/* <Text style={{ fontSize: 18, padding: 10, color: '#1593fa', fontWeight: "bold" }}>智能服务</Text> */}
                        <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>

                            {
                                mainTabmodelData.map((item, index) => {
                                    return (<MainTabModel navigation={this.props.navigation}  key={index} posi={index} data={item}></MainTabModel>)
                                })
                            }
                        </View >
                    </View>



                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    back: {
            
    },


    maintab_model_back: {
        width: width1,
         alignItems: "center"
        // ,flex:1
    }
})

export default HomePage