import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {

  return (
    <View style={styles.container}>
     <Link href="sobre" asChild>
     <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Ir para a sobre</Text>
      </Pressable>
     </Link>

     <Link href="/(aux)/termos">Termos de uso</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    button: {
        backgroundColor: '#52057B',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});