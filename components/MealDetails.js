import { View, Text, StyleSheet } from 'react-native';

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.datailItem}>{duration}m</Text>
      <Text style={styles.datailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.datailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  datailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
