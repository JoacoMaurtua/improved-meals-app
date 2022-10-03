import { View, Text, StyleSheet } from "react-native"

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#f5a442',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },

  subtitleContainer:{
    padding: 6,
    marginVetical: 5,
    marginHorizontal: 12,
    borderBottomColor: '#f5a442',
    borderBottomWidth: 2,
    marginBottom: 10,  
  },
});