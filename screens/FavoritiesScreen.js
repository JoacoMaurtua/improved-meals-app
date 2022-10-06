import { useContext } from 'react';
import MealsList from '../components/MealsList';
import {MEALS} from '../data/dummy-data';
import { FavoritiesContext } from '../store/context/favoritiesContext';
import {Text, View, StyleSheet} from 'react-native';

function FavoritiesScreen({ navigation }) {
  //extraigo los datos del contexto
  const favoriteMealCtx = useContext(FavoritiesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );

  if(favoriteMeals.length === 0){
    return(
    <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals jet</Text>
    </View>)
  }else{
    return <MealsList items={favoriteMeals} navigation={navigation} />;
  }
  
}

export default FavoritiesScreen;


const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text:{
    fontSize: 18,
    fontWeight: 'bold',
  }
})
