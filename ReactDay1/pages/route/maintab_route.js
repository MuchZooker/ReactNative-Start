import React from 'react';
import {StyleSheet, View,Text,Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
 
export default class Tab extends React.Component {
  /*初始化state*/
  constructor(props){
      super();
      this.state={
        selectedTab:'tb_msg',
      }
  }
  fetchLocalData(){
        fetch("www.baidu.com",null).then((responsr)=>{

        }).catch((error)=>{

        })

  }
    /**
     * 公共组件方法
     * @param selectedTab 选中的tab
     * @param title
     * @param icon
     * @param selectedIcon
     * @param imageStyle  选中时渲染图标的颜色
     * @param mark  角标
     * @param viewContent  页面内容
     * @returns {*}
     */
  tabNavigatorItems(selectedTab,title,icon,selectedIcon,imageStyle,mark,viewContent){
      return (
          <TabNavigator.Item
              selected={this.state.selectedTab === selectedTab }
              title={title}
            //   renderIcon={()=> <Image style={styles.myImage} source={icon}/> }
            //   renderSelectedIcon={()=> <Image style={[styles.myImage,{tintColor:imageStyle}]} source={selectedIcon}/> }
              badgeText={mark}
              onPress={()=> this.setState({selectedTab:selectedTab}) }>
              <View style={{flex:1}}><Text>{viewContent}</Text></View>
          </TabNavigator.Item>
      )
  }
 
  render() {
    return (
      <View style={styles.container}>
         <TabNavigator>
            {this.tabNavigatorItems('tb_msg',"消息",null,null,'#ffe09a',"1","消息页面内容")}
            {this.tabNavigatorItems('tb_contacts',"联系人",null,null,'#65bb74',"","联系人页面内容")}
            {this.tabNavigatorItems('tb_watch',"看点",null,null,'#6ebef3',"","看点页面内容")}
            {this.tabNavigatorItems('tb_dynamic',"动态",null,null,'#622193',"","动态页面内容")}
         </TabNavigator>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    myImage:{
        width:22,
        height:22,
    }
});
