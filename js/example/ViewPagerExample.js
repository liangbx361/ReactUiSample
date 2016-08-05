/**
 * View Pager 页面测试
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

const dataList = [1, 2, 3];

export default class ViewPagerExample extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={{height:200}}
                    indicator={this._renderDotIndicator()}
                >
                    {this._renderPage()}
                </IndicatorViewPager>
            </View>
        );
    }

    _renderPage() {
        var rows = [];

        rows.push(
            <View key="1" style={{backgroundColor:'cadetblue'}}>
                <Text>page one</Text>
            </View>
        );

        rows.push(
            <View key="2" style={{backgroundColor:'cadetblue'}}>
                <Text>page two</Text>
            </View>
        );

        rows.push(
            <View key="3" style={{backgroundColor:'cadetblue'}}>
                <Text>page three</Text>
            </View>
        );

        return rows;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}