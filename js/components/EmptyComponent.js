/**
 * 加载页面
 */

'use strict'

import React, {Component, PropTypes} from 'react';
import {View, TextView} from 'react-native'

export default class EmptyComponent extends Component {

    render() {
        <View style={{flex: 1}}>
            <TextView>
                数据为空
            </TextView>
        </View>
    }
}