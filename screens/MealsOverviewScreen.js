import { useEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';

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

  
  return(
    <MealsList items={displayedMeals} navigation={navigation}/>
  )

};

export default MealsOverviewScreen;



/* Cualquier componenete registrado como screen puede acceder como prop a route */

/* Para utilizar route en un componente no registrado como screen, se puede usar useRoute */

/* Se peuden configurar opciones de navegacion dinamica, con el props navigation y su metodo setOptions */
