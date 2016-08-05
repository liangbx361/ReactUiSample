/**
 * 加载页面
 */

'use strict'

import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class LoadingComponent extends Component {

    render() {
        return(
            <View style={{flex: 1}}>
                <Text>
                    正在加载中，请稍后...
                </Text>
            </View>
        )
    }
}