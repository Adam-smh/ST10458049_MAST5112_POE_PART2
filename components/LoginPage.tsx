import { TextInput, Image, Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import general from './styles/general';
import admin from './styles/admin';
import { useState } from 'react';

function LoginPage({navigation}: {navigation: any}){

    const [Name, setName ] = useState('');
    const [Password, setPassword ] = useState('');

    function credCheck(name: string, pass: string){
        if(name == "Mustache" && pass == "man"){
            navigation.navigate('Rae')
        }
    }

    return(
        <View style={admin.adminBG}>

            <View style={general.headerContainer}>
                <Text style={general.headingText}>Christoffels</Text>
                <TouchableOpacity onPress={() =>
                navigation.navigate('Home')} >
                    <Image source={require('../assets/home_icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={admin.loginCon}>
                
                <Text style={general.titleText}>Login</Text>
                <TextInput style={general.inputField} placeholderTextColor="#fff"  placeholder='Name' onChangeText={newText => setName(newText)} />
                <TextInput style={general.inputField} placeholderTextColor="#fff"  placeholder='Password' onChangeText={newText => setPassword(newText)} />

                <TouchableOpacity style={general.genBtn} onPress={() => {
                    credCheck(Name, Password)}}>
                        <Text style={general.btnText}>Login</Text>
                </TouchableOpacity>
            </View>


        </View>

    )
}
export default LoginPage;