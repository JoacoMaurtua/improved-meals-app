import { View, StyleSheet, FlatList } from 'react-native';
import { useEffect } from 'react';
import MealItem from '../components/MealItem';

import { MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
  const id = route.params.categoryID; //extraigo este valor del objeto params enviado por navigate

  //Hacer Match entre las comidas y a que categorias pertenecen
  const displayedMeals = MEALS.filter(
    (
      mealItem // []
    ) => mealItem.categoryIds.indexOf(id) >= 0 //existen o no en su arreglo de arrays cn
  );

  //Darle titulos a cada Meal Overview de manera dinamica(IMPORTANTE)
  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === id
    ).title; //extraer los titulos de cada objeto del array

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, id]);

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
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

/* Cualquier componenete registrado como screen puede acceder como prop a route */

/* Para utilizar route en un componente no registrado como screen, se puede usar useRoute */

/* Se peuden configurar opciones de navegacion dinamica, con el props navigation y su metodo setOptions */
