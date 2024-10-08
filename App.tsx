// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuItem from './screens/AddMenuItems';

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: string;
}

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addMenuItem = (newItem: MenuItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="Add Menu Item">
          {(props) => <AddMenuItem {...props} addMenuItem={addMenuItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
