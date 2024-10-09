export interface Dish {
    id: string;
    name: string;
    description: string;
    image: string;
    imageUri?: string | null;
    price: number;
    course: string;
}