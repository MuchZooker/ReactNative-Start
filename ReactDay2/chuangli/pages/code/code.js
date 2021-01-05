

import React from 'react'
import ToolBar from '../../widgets/toolbar'
import { FlatList, SafeAreaView, Text, View,RefreshControl } from 'react-native'




export default class CodePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRefresh: false,
            listData: ['1', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
        }
    }
    onRefresh() {
        if (!this.state.isRefreshing) {
            this.setState({
                isRefresh: true
            })

            setTimeout(() => {
                this.setState({
                    isRefresh: false
                })
            }, 3000)
        }
    }


    _headerView() {
        return (
            <View style={{ height: 50, backgroundColor: '#8A8A8A' }}>
                <Text>下拉刷新头</Text>
            </View>
        )
    }

    renderItemLayout(item) {
        return (
            <View key={item} style={{ height: 80 }}>
                <Text>{item}</Text>
            </View>
        )
    }






    render() {
        return (
            <SafeAreaView>
                <ToolBar titleName='编码' menuShow={false}></ToolBar>

                <FlatList
                    data={this.state.listData}
                    renderItem={({ item }) => this.renderItemLayout(item)}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isRefresh}
                    // ListHeaderComponent={this._headerView}
                
                >
                </FlatList>
            </SafeAreaView>
        )
    }
}