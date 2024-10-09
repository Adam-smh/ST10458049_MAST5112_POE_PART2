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
  async handleImageUpload(setImageUri: (uri: string | null) => void) {
    const uri = await DishModel.getImageUri();
    setImageUri(uri);
  },
};