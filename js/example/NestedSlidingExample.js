'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
    ScrollView,
    Text,
    Image,
    StyleSheet,
    } = ReactNative;

const NestedSlidingExample = React.createClass ({

    render() {
        return (
            <ScrollView horizontal={false}>
                <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

                <ScrollView horizontal={true}>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                    <Image  style={styles.thumbnail} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                </ScrollView>

            </ScrollView>
        )
    }
})

var styles = StyleSheet.create({
    thumbnail: {
        width: 80,
        height: 80,
    }
})

module.exports = NestedSlidingExample;