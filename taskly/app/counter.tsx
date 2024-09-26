import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Counter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Go to idea</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
  },
})

export default Counter
