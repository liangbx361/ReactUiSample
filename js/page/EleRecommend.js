/**
 * Elearning 精品推荐
 */

import React, {Component, PropTypes} from 'react';
import {View, Image, ListView} from 'react-native';
import LoadingComponent from '../components/LoadingComponent';
import BannerComponent from '../components/BannerComponent';

export default class EleRecommend extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoading: true,
            bannerPageNum: 0,
            bannerDataList: [],
        };
    }

    componentDidMount() {
        this._fetchBanner();
    }

    render() {
        if(this.state.isLoading) {
            return this._renderLoading();
        } else {
            return this._renderBanner();
        }
    }

    _renderLoading() {
        return (
            <LoadingComponent />
        )
    }

    _renderBanner() {
        return (
            <BannerComponent
                pageNum={this.state.bannerPageNum}
                dataList={this.state.bannerDataList}
            />
        )
    }

    _fetchBanner() {
        let pageNum = 3;
        let dataList = [
            {id: 0, url: "http://f.hiphotos.baidu.com/image/h%3D200/sign=bcfe3de95566d01661199928a72bd498/a08b87d6277f9e2f822da32c1830e924b899f3fe.jpg"},
            {id: 1, url: "http://img2.duitang.com/uploads/item/201208/18/20120818150713_zarnG.jpeg"},
            {id: 2, url: "http://uploads.cnrencai.com/allimg/201607/16-160G4114634141.jpg"},
        ];
        this.setState({
            isLoading: false,
            bannerPageNum: pageNum,
            bannerDataList: dataList
        })
    }
}