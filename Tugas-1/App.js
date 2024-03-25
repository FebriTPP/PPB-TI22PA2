import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Profile = () => {
    return (
        <View >
            <Text>My Profile</Text>
            <Text>Nama  : Febri Tri Purnama Putra</Text>
            <Text>Kelas : TI22PA2</Text>
            <Text>NPM   : 222310067</Text>
            <Image source={require('../untuktugas/assets/myprofile.jpg')}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
