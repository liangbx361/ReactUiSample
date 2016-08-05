/**
 * 用于显示网格布局
 */

'use strict'

import React, {Component, PropTypes} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default class GrideViewComponent extends Component {

    propTypes: {
        rowNum: PropTypes.number.isRequired,
        onItemClick: PropTypes.func,
        renderItem: PropTypes.func.isRequired
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }

    render() {
        var row = [];



        return (
            <View>
                {row}
            </View>
        )
    }
}

var styles = StyleSheet.creat({
    row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
    }
});