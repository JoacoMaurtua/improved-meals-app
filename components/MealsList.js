//Componente para ser usado en MealsOverviewScreen y en FavoritiesScreen

import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react';
import MealItem from '../components/MealItem'

export default function MealsList({items,navigation}) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    //desestructurar toas las props en un objeto:
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    //funcion para enviar a otra vista
    function pressHandler() {
      navigation.navigate('MealDetails', {
        ...mealItemProps,
      });
    }

    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});