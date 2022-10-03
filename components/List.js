import { View, Text, StyleSheet } from "react-native";

const List = ({dataArray}) => {
  return (
    dataArray.map((dataItem) => (
      <View key={dataItem} style={styles.listItem}>
        <Text style={styles.itemText}>{dataItem}</Text>
      </View>
    ))
  )
}

export default List;

const styles = StyleSheet.create({
  listItem:{
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical:4,
    marginBottom: 3,
    marginTop: 3,
    marginHorizontal: 12,
    backgroundColor:'#f5a442',
  },

  itemText:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});