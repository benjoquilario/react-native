import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native"
import { theme } from "../theme"
import AntDesign from "@expo/vector-icons/AntDesign"
import Entypo from "@expo/vector-icons/Entypo"

type ShoppingListItemProps = {
  name: string
  isCompleted?: boolean
}

export function ShoppingListItem({ name, isCompleted }: ShoppingListItemProps) {
  const handleDelete = () => {
    Alert.alert("Delete", `Are you sure you want to delete this ${name}?`, [
      {
        text: "Yes",
        onPress: () => console.log("Delete item"),
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ])
  }

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? "check" : "circle"}
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorCerulean}
        />
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity
        hitSlop={20}
        onPress={handleDelete}
        disabled={isCompleted}
      >
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colorWhite,
  },
  itemContainer: {
    borderBottomColor: theme.colorCerulean,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    marginLeft: 4,
    fontWeight: "200",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  completedText: {
    color: theme.colorGrey,
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
})
