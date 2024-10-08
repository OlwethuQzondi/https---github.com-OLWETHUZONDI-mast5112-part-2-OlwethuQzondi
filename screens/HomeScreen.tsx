// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: string;
}

interface HomeScreenProps {
  navigation: any;
  menuItems: MenuItem[];
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, menuItems }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Today's Menu</Text>
      <Text>Total Items: {menuItems.length}</Text>

      <Button title="Add New Menu Item" onPress={() => navigation.navigate('Add Menu Item')} />

      {menuItems.length > 0 ? (
        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <Text>{item.dishName} - {item.course}</Text>
              <Text>{item.description}</Text>
              <Text>Price: ${item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={{ marginVertical: 10 }}>No items on the menu yet.</Text>
      )}
    </View>
  );
};

export default HomeScreen;
