import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/general';
import { useEffect, useState } from 'react';
import { Dish } from './interfaces/Dish';
import { DishController } from './controller/DishController';
import dishCards from './styles/dishCards';
import { DishModel } from './model/DishModel';

function HomePage( {navigation}: {navigation: any} ){

  const [dishes, setDishes] = useState<Dish[]>([]);
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('Starter'); 

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

  return(
    <View style={{ flex: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>Christoffels</Text>
        <TouchableOpacity onPress={() =>
              navigation.navigate('Login')
            } >
            <Image source={require('../assets/user_icon.png')} />
        </TouchableOpacity>

      </View>

      <View style={styles.courseSel}>
        <TouchableOpacity style={[styles.courseBtn, 
          selectedCourse === 'Starter' ? styles.courseBtnActive : styles.courseBtnInactive]}
        onPress={() => handleCourseSelection('Starter')}
        >
          <Text style={styles.courseBtnText}>Starter</Text>
          {selectedCourse === 'Starter' && (
            <Text>{filteredDishes.length}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.courseBtn, 
          selectedCourse === 'Main' ? styles.courseBtnActive : styles.courseBtnInactive]} 
        onPress={() => handleCourseSelection('Main')}
        >
          <Text style={styles.courseBtnText}>Main</Text>
          {selectedCourse === 'Main' && (
            <Text>{filteredDishes.length}</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.courseBtn, 
          selectedCourse === 'Dessert' ? styles.courseBtnActive : styles.courseBtnInactive]} 
        onPress={() => handleCourseSelection('Dessert')}
        >
          <Text style={styles.courseBtnText}>Dessert</Text>
          {selectedCourse === 'Dessert' && (
            <Text>{filteredDishes.length}</Text>
          )}
        </TouchableOpacity>
      </View>

        <ScrollView  contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 20 }}>
          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <View style={dishCards.cardCont} key={dish.id}>
                <Image style={{ height: 100, width: 100 }} source={{ uri: dish.image }} />
                <View style={dishCards.textCon}>
                  <Text style={dishCards.title}>{dish.name}</Text>
                  <Text style={dishCards.desc}>{dish.description}</Text>
                  <Text style={dishCards.price}>${dish.price}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text>No dishes available</Text>
          )}
        </ScrollView>
    </View>
  )
};

  export default HomePage;