import { Stack } from "expo-router";

export default function RootLayout () {
    return (
        <Stack screenOptions={{headerShown: true,
        headerStyle: {
            backgroundColor: "#52057B",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold",
        }

        }}>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="sobre" options={{ title: "Sobre" }} />
        </Stack>    
    )
}