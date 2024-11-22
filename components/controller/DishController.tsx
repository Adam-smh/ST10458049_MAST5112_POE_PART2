import { DishModel } from '../model/DishModel';
import { Dish } from '../interfaces/Dish';


export const DishController = {
  async getDishes(setDishes: React.Dispatch<React.SetStateAction<Dish[]>>): Promise<void> {
    const dishes: Dish[] = await DishModel.fetchDishes();
    setDishes(dishes);
  },

  async addDish(dishData: any, navigation: any) {
    const uploadedImageUrl = await DishModel.uploadToCloudinary(dishData.imageUri);
    if (uploadedImageUrl) {
        const dishId = DishModel.generateUniqueId();
        const newDish = { ...dishData, id: dishId, image: uploadedImageUrl };
        await DishModel.saveDish(newDish);
        alert('Dish saved locally!');
        navigation.goBack();
    } else {
        alert('Image upload failed. Please try again.');
    }
  },
  async updateDish(dish: Dish, navigation: any) {
    try {

        let uploadedImageUrl: string = dish.image; 

        if (dish.imageUri && dish.imageUri !== dish.image) {
            uploadedImageUrl = await DishModel.uploadToCloudinary(dish.imageUri) || uploadedImageUrl;
        }


        const updatedDish = { ...dish, image: uploadedImageUrl };


        await DishModel.updateDish(updatedDish); 
        alert('Dish updated successfully!');
        navigation.navigate('Edit'); 
    } catch (error) {
        console.error(error);
        alert('Could not update the dish. Please try again.');
    }
  },
  
  async handleImageUpload(setImageUri: (uri: string | null) => void): Promise<string | null> {
    const uri = await DishModel.getImageUri();
    setImageUri(uri);
    return uri; // Return the selected URI
  },

  async averageCalc(priceList: number[]): Promise<number> {
    if (priceList.length === 0) {
      return 0;
    }
    const sum = priceList.reduce((total, price) => total + price, 0);
    return sum / priceList.length;
  }
};