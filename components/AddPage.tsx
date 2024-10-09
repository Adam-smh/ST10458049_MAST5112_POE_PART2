import { TextInput, Image, Button, Pressable, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import general from './styles/general';
import admin from './styles/admin';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { DishController } from './controller/DishController';


function AddPage({navigation}: {navigation: any}){

    const [imageUri, setImageUri] = useState<string | null>(null);
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [course, setCourse] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const handleSelectImage = async () => {
        await DishController.handleImageUpload(setImageUri);
    };

    const handleAddDish = async () => {
        if (!imageUri || !name || !description || !price || !course) {
            alert('Please fill in all fields and upload an image.');
            return;
        }
        
        const dishData = { imageUri, name, description, price: parseFloat(price), course };
        await DishController.addDish(dishData, navigation);
    };

    return (
        <View style={admin.adminBG}>
            <View style={admin.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Rae')}>
                    <Image source={require('../assets/back_icon.png')} />
                </TouchableOpacity>
                <Text style={admin.headingText}>Christoffels</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/home_icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={admin.uploadCon}>
                <TouchableOpacity style={{marginTop: 20,}} onPress={handleSelectImage}>
                    {imageUri && <Image source={{ uri: imageUri }} style={{ width: 150, height: 150 }} />}
                </TouchableOpacity>
                <TouchableOpacity style={admin.genBtn} onPress={handleSelectImage}>
                    <Text style={general.btnText}>Select Image</Text>
                </TouchableOpacity>

                <TextInput
                    style={admin.inputField}
                    placeholderTextColor="#fff"
                    placeholder='Dish Name'
                    onChangeText={setName}
                />
                <TextInput
                    style={general.inputField}
                    placeholderTextColor="#fff"
                    placeholder='Description'
                    onChangeText={setDescription}
                />

                <Picker
                    style={general.inputField}
                    selectedValue={course}
                    onValueChange={(itemValue) => setCourse(itemValue)}
                >
                    <Picker.Item label="Select a Course" value="" />
                    <Picker.Item label="Starter" value="Starter" />
                    <Picker.Item label="Main" value="Main" />
                    <Picker.Item label="Dessert" value="Dessert" />
                </Picker>

                <TextInput
                    style={general.inputField}
                    placeholderTextColor="#fff"
                    placeholder="Price"
                    value={price}
                    keyboardType="numeric"
                    onChangeText={value => setPrice(value)}
                />

                <TouchableOpacity style={general.genBtn} onPress={handleAddDish}>
                    <Text style={general.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default AddPage;