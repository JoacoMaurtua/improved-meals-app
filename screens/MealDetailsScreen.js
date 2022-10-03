import { useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import Subtitle from '../components/Subtitle';
import IconButton from '../components/IconButton';
import List from '../components/List';

const MealDetailsScreen = ({ route, navigation }) => {
  const id = route.params.id;

  const selectedMeal = MEALS.find((meal) => meal.id === id);

  //Generar titulos dinamicamente
/*   useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [navigation, id]); */

  function headerButtonPressHandler(){
    console.log('Pressed!');
  }

  //crear un elemento con interacicon en la cabecera
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return <IconButton  onPress={headerButtonPressHandler}/>
      }
    });
  },[navigation,headerButtonPressHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List dataArray={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List dataArray={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 300,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },

  listContainer:{
    width: '80%',
  },

  listOuterContainer:{
    alignItems: 'center',
  },
});
