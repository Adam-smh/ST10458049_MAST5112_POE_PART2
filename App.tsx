import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RaePage from './components/RaePage';
import AddPage from './components/AddPage';
import RemovePage from './components/RemovePage';
import EditPage from './components/EditPage';
import DishEditPage from './components/DishEditPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Rae" component={RaePage} />
        <Stack.Screen name="Add" component={AddPage} />
        <Stack.Screen name="Remove" component={RemovePage} />
        <Stack.Screen name="Edit" component={EditPage} />
        <Stack.Screen name="DishEditPage" component={DishEditPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


