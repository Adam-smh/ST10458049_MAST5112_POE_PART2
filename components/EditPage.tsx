import { TextInput, Image, Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import general from './styles/general';
import admin from './styles/admin';

function EditPage({navigation}: {navigation: any}){
    return(

        <View style={admin.adminBG}>
            <View style={admin.headerContainer}>
            <TouchableOpacity onPress={() =>
                navigation.navigate('Rae')} >
                    <Image source={require('../assets/back_icon.png')} />
                </TouchableOpacity>
                <Text style={admin.headingText}>Christoffels</Text>
                <TouchableOpacity onPress={() =>
                navigation.navigate('Home')} >
                    <Image source={require('../assets/home_icon.png')} />
                </TouchableOpacity>
            </View>
        </View>


    )
}
export default EditPage;