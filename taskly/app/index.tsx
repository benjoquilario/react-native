import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { theme } from "../theme"
import { ShoppingListItem } from "../components/ShoppingListItem"

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: theme.colorWhite,
      }}
    >
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Milk" isCompleted />
      <StatusBar style="auto" />
    </View>
  )
}
