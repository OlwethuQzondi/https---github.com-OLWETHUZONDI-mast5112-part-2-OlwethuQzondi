// screens/AddMenuItem.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
//User interface for AddMenuItems.tsx
interface AddMenuItemProps {
  navigation: any;
  addMenuItem: (item: { dishName: string; description: string; course: string; price: string }) => void;
}

const AddMenuItem: React.FC<AddMenuItemProps> = ({ navigation, addMenuItem }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Starter');
  const [price, setPrice] = useState('');

  const predefinedCourses = ['Starter', 'Main Course', 'Dessert'];

  const handleAddMenuItem = () => {
    if (dishName && description && price) {
      const newItem = { dishName, description, course: selectedCourse, price };
      addMenuItem(newItem);

      setDishName('');
      setDescription('');
      setSelectedCourse('Starter');
      setPrice('');

      navigation.navigate('Home');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Add Menu Item</Text>

      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Picker
        selectedValue={selectedCourse}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
        style={{ marginBottom: 10 }}
      >
        {predefinedCourses.map((course) => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Button title="Add Item" onPress={handleAddMenuItem} />
    </View>
  );
};

export default AddMenuItem;
