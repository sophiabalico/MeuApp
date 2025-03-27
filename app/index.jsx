import { View, Text, Button, StyleSheet } from "react-native";
import { Link, Stack, useNavigation } from "expo-router";

export default function Home() {
  const navigation = useNavigation();

  const handHideHeader = () => {
    navigation.setOptions({ headerShown: false });
  };
  const ShowHeader = () => {
    navigation.setOptions({ headerShown: true });
  };

  return (
    <View>
      <Stack.Screen
        options={{
          title: "SENAI",
          headerRight: () => (
            <Button
                onPress={() => alert('Olá, aula de Mobile')}
                title="Info"
                color="#fff"
            /> 
          ),
          headerStyle: {
            backgroundColor: "#52057B",
          },
          headerTintColor: "#fff",
        }}
      />
      <Button title="Ocultar Header" onPress={handHideHeader} />
      <Button title="Mostrar" onPress={ShowHeader} />

      <Link style={styles.link} href="/sobre">Ir para Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    link: {
        backgroundColor: '#52057B',
        padding: 10,
        margin: 20,
        fontWeight: 'bold',
        color: '#fff',
    }
});