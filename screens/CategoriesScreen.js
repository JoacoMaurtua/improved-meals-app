import { FlatList, View, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

import CategoryGrid from '../components/CategoryGrid';


//reto personal: hacerlo con scrollable
function CategoriesScreen({navigation}) //El objeto navigation contiene los metodos necesarios para navegar
{
  function renderCategoryItem(itemData) {

    function pressHandler(){
      navigation.navigate("MealsOverview",{//El metodo navigate conduce a la ventana cuto name sea pasado como paramatro
        categoryID: itemData.item.id,
        categoryName: itemData.item.title
      }) //como 2do parametro opcional, navigate recibe un objeto que contiene los params que podemos enviar
    };

    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        icon={itemData.item.icon}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(index) => index.id}
        renderItem={renderCategoryItem} //metodo de renderizado: por cada posicion mapeada ejecuta renderCategoryItem 
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  categoriesContainer: {
    felx: 1,
  },
});

//Version Alternativa a FlatList
{
  /* <View>
        <ScrollView>
          {CATEGORIES.map((category, index) => (
            <Text>{category.title}</Text>
            <Image source={{uri:category.icon}}/>
          ))}
        </ScrollView>
    </View> */
}


