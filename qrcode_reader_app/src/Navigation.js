"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2019-09-06
 *
 * @description
 * @augments
 * @example
 * @link
 *
 */

// let log = console.log;

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {
    StyleSheet,
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

class Nav extends Component{
    render() {
        return (
            <View style={{alignItems: 'center', top: 50}}>
                <Text style={{fontSize: 24, fontWeight: '600',}}>Open QR Code</Text>
            </View>
        );
        // return (
        //     <View style={styles.sectionContainer}>
        //         <Text style={styles.sectionTitle}>Open QR Code</Text>
        //         <Text style={styles.sectionTitle}>{this.props.router}</Text>
        //     </View>
        // );
    }
};

// const styles = StyleSheet.create({
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black,
//     },
// });

export {Nav};
export default Nav;
