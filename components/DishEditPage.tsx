import { TextInput, Image, TouchableOpacity, Text, View, Alert } from 'react-native';
import general from './styles/general';
import admin from './styles/admin';
import { useState } from 'react';
import { DishController } from './controller/DishController';
import { Picker } from '@react-native-picker/picker';

function DishEditPage({ navigation, route }: { navigation: any, route: any }) {
    const { dish } = route.params;

    const [imageUri, setImageUri] = useState<string | null>(dish.image);
    const [name, setName] = useState<string>(dish.name);
    const [description, setDescription] = useState<string>(dish.description);
    const [course, setCourse] = useState<string>(dish.course);
    const [price, setPrice] = useState<string>(dish.price.toString());

    const handleUpdateDish = async () => {
        if (!imageUri || !name || !description || !price || !course) {
            Alert.alert('Error', 'Please fill in all fields and upload an image.');
            return;
        }

        const updatedDish = { ...dish, imageUri, name, description, price: parseFloat(price), course };
        await DishController.updateDish(updatedDish, navigation); 
    };
    const handleImageUpload = async () => {
        const uri = await DishController.handleImageUpload(setImageUri);
        setImageUri(uri); // Set the image URI from the return value
    };

    return (
        <View style={admin.adminBG}>
            <View style={admin.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/back_icon.png')} />
                </TouchableOpacity>
                <Text style={admin.headingText}>Edit Dish</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/home_icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={admin.uploadCon}>
                {imageUri && <Image source={{ uri: imageUri }} style={{ width: 150, height: 150 }} />}
                <TouchableOpacity style={admin.genBtn} onPress={handleImageUpload}>
                    <Text style={general.btnText}>Select Image</Text>
                </TouchableOpacity>
                <TextInput
                    style={admin.inputField}
                    placeholderTextColor="#fff"
                    placeholder='Dish Name'
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={general.inputField}
                    placeholderTextColor="#fff"
                    placeholder='Description'
                    value={description}
                    onChangeText={setDescription}
                />
               <Picker
                    style={general.inputField}
                    selectedValue={course}
                    onValueChange={(itemValue) => setCourse(itemValue)}>
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
                <TouchableOpacity style={general.genBtn} onPress={handleUpdateDish}>
                    <Text style={general.btnText}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DishEditPage;