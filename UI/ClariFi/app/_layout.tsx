import { Stack } from 'expo-router';
import { AuthProvider } from '../AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(login)" />
      </Stack>
    </AuthProvider>
  );
}
