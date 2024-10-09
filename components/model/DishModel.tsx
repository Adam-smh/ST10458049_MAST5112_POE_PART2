import { Dish } from '../interfaces/Dish';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

export const DishModel = {
  async uploadToCloudinary(uri: string): Promise<string | null> {
    const data = new FormData();
    data.append('file', {
        uri,
        name: `image-${this.generateUniqueId()}.jpg`,
        type: 'image/jpeg',
    } as any);

    data.append('upload_preset', 'ChefApp');

    try {
        const response = await axios.post(
            `https://api.cloudinary.com/v1_1/dn6b07nmj/image/upload`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            },
        );

        if (response.status === 200) {
            return response.data.secure_url;
        } else {
            console.error('Upload failed with status:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        return null;
    }
  },

  async fetchDishes(): Promise<Dish[]> {
    try {
      const existingDishes = await AsyncStorage.getItem('dishes');
      return existingDishes ? JSON.parse(existingDishes) : [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  },
  async saveDish(dish: any) {
    const storedDishes = await AsyncStorage.getItem('dishes');
    const dishesArray = storedDishes ? JSON.parse(storedDishes) : [];
    dishesArray.push(dish);
    await AsyncStorage.setItem('dishes', JSON.stringify(dishesArray));
  },
  async saveDishes(dishes: Dish[]) {
    try {
        await AsyncStorage.setItem('dishes', JSON.stringify(dishes));
    } catch (error) {
        console.error('Error saving dishes:', error);
    }
  },
  async updateDish(updatedDish: Dish): Promise<void> {
    try {
      const storedDishes = await AsyncStorage.getItem('dishes');
      const dishes: Dish[] = storedDishes ? JSON.parse(storedDishes) : [];

      // Find the index of the dish to be updated
      const index = dishes.findIndex(dish => dish.id === updatedDish.id);
      if (index !== -1) {
        // Update the dish in the array
        dishes[index] = updatedDish;
        // Save the updated dishes array back to storage
        await AsyncStorage.setItem('dishes', JSON.stringify(dishes));
      }
    } catch (error) {
      console.error('Error updating dish:', error);
      throw error; // Optional: rethrow the error to handle it in the controller
    }
  },
  async getImageUri(): Promise<string | null> {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return null;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
    });
    return result.canceled ? null : result.assets[0].uri;
  },
  generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  },
};