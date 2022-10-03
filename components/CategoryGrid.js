import { View, Text, Pressable, StyleSheet, Platform, Image } from 'react-native';

const CategoryGrid = ({ title, color, icon, onPress }) => {
  return (
    <View style={styles.categoryGridContainer}>
      <Pressable
        android_ripple={{ color: '#dcdcdc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}

        onPress={onPress} //Al presionarlo se debe ir a la ventana MealsOverviewScreen
      >
        <View style={[styles.innerContainer, {backgroundColor:color}]}>
          <Text style={styles.text}>{title}</Text>
          <Image
            source={{ uri:icon }} // No funciona --> Seguir investigando porque
            style={styles.image}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;

const styles = StyleSheet.create({
  categoryGridContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    //sombras para ios:
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS == 'android' ? 'hidden' : 'auto',
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  image:{
    width: '45%',
    height: 50,
    marginTop: 10,
  },

  text: {
    fontWeight: 'bold',
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});


/* Nota: Cuando se traer una imagen de internet con uri, solo aparecera cuando se definan
   primero sus dimensiones */
