import { View, Text, StyleSheet, Button } from "react-native";
import { Link, Stack, useNavigation } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Sobre",
          headerStyle: {
            backgroundColor: "#52057B",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      />
      <Text style={styles.title}>Olá, Tudo bem?</Text>

      <Link style={styles.link} href="/">
        Ir para Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    backgroundColor: "#52057B",
    padding: 10,
    margin: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
