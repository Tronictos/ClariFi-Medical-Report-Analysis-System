import { Stack } from 'expo-router';
import { AuthProvider } from '../../AuthContext';


export default function TabLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </AuthProvider>
  );
}
