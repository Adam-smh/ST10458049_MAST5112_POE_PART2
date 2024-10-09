import { TextInput, Image, Button, Pressable, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import general from './styles/general';
import admin from './styles/admin';
import { useEffect, useState } from 'react';
import { Dish } from './interfaces/Dish';
import { DishController } from './controller/DishController';
import { DishModel } from './model/DishModel';
import dishCards from './styles/dishCards';

function EditPage({navigation}: {navigation: any}){
    
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
    const [selectedCourse, setSelectedCourse] = useState<string>('Starter'); 
    const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [course, setCourse] = useState<string>('');

    const fetchDishes = async () => {
    const dishesData = await DishModel.fetchDishes();
    setDishes(dishesData);
    setFilteredDishes(dishesData.filter(dish => dish.course === selectedCourse));
    };
    useEffect(() => {
    fetchDishes(); 
    }, []);
    useEffect(() => {
    DishController.getDishes(setDishes);
    }, []);

    useEffect(() => {
    if (selectedCourse) {
        const filtered = dishes.filter((dish) => dish.course === selectedCourse);
        setFilteredDishes(filtered);
    } else {
        setFilteredDishes(dishes);
    }
    }, [selectedCourse, dishes]);

    const handleCourseSelection = (course: string) => {
        setSelectedCourse(course);
    };

    const handleDishSelect = (dish: Dish) => {
        navigation.navigate('DishEditPage', { dish });
        setCourse(dish.course); 
        setImageUri(dish.image);
    };

    return(

        <View style={{ flex: 1, height: '100%', backgroundColor: '#322C2B', width: '100%'}}>

            <View style={admin.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Rae')}>
                    <Image source={require('../assets/back_icon.png')} />
                </TouchableOpacity>
                <Text style={admin.headingText}>Christoffels</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/home_icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={general.courseSel}>
                <TouchableOpacity style={[general.courseBtn, 
                selectedCourse === 'Starter' ? admin.courseBtnActive : admin.courseBtnInactive]}
                onPress={() => handleCourseSelection('Starter')}
                >
                    <Text style={admin.courseBtnText}>Starter</Text>
                    {selectedCourse === 'Starter' && (
                        <Text style={{color:'#fff',}}>{filteredDishes.length}</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={[general.courseBtn, 
                selectedCourse === 'Main' ? admin.courseBtnActive : admin.courseBtnInactive]} 
                onPress={() => handleCourseSelection('Main')}
                >
                    <Text style={admin.courseBtnText}>Main</Text>
                    {selectedCourse === 'Main' && (
                        <Text style={{color:'#fff',}}>{filteredDishes.length}</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={[general.courseBtn, 
                    selectedCourse === 'Dessert' ? admin.courseBtnActive : admin.courseBtnInactive]} 
                    onPress={() => handleCourseSelection('Dessert')}
                    >
                    <Text style={admin.courseBtnText}>Dessert</Text>
                    {selectedCourse === 'Dessert' && (
                        <Text style={{color:'#fff',}}>{filteredDishes.length}</Text>
                    )}
                </TouchableOpacity>
            </View>

            <ScrollView  contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 20 }}>
            {filteredDishes.length > 0 ? (
                filteredDishes.map((dish) => (
                    <TouchableOpacity 
                        style={[dishCards.cardCont, 
                            selectedDishes.includes(dish.id) && { backgroundColor: '#FFEBB7' }
                        ]} key={dish.id} onPress={() => handleDishSelect(dish)}>
                        <Image style={{ height: 100, width: 100 }} source={{ uri: dish.image }} />
                        <View style={dishCards.textCon}>
                            <Text style={dishCards.title}>{dish.name}</Text>
                            <Text style={dishCards.desc}>{dish.description}</Text>
                            <Text style={dishCards.price}>${dish.price}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            ) : (
                <Text style={{ color: '#fff' }}>No dishes available</Text>
            )}
            </ScrollView>
        </View>
    )
}
export default EditPage;