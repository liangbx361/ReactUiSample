/**
 * 网格布局页面测试
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default class GridLayoutExample extends Component {

    render() {
        <View style={styles.container}>

        </View>
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        height: 50,
        backgroundColor: '#aaaaaa'
    }
})