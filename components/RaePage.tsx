import { TextInput, Image, Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import general from './styles/general';
import admin from './styles/admin';

function RaePage({navigation}: {navigation: any}){
    return(
        <View style={admin.adminBG}>
            <View style={general.headerContainer}>
                <Text style={general.headingText}>Christoffels</Text>
                <TouchableOpacity onPress={() =>
                navigation.navigate('Home')} >
                    <Image source={require('../assets/home_icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={admin.containerBtn}>
                <TouchableOpacity style={admin.largeBtn} onPress={() =>
                    navigation.navigate('Add')} >

                    <Image style={admin.iconBtn} source={require('../assets/plus_icon.png')} />
                    <Text style={admin.textBtn}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={admin.largeBtn} onPress={() =>
                    navigation.navigate('Remove')} >

                    <Image style={admin.iconBtn} source={require('../assets/del_icon.png')} />
                    <Text style={admin.textBtn}>REMOVE</Text>
                </TouchableOpacity>
            </View>
            
            <View style={admin.containerBtn}>
                <TouchableOpacity style={admin.largeBtn} onPress={() =>
                    navigation.navigate('Edit')} >

                    <Image style={admin.iconBtn} source={require('../assets/edit_icon.png')} />
                    <Text style={admin.textBtn}>EDIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RaePage;