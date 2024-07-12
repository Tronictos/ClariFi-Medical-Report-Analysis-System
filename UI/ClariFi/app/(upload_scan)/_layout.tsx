import { Stack } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function TabLayout() {
  const navigation = useNavigation();
  const route = useRoute();
  const { report } = route.params; // Safe access using optional chaining

  return (
    <Stack>
      <Stack.Screen name="index" 
      initialParams={{ report: report }}
      />
    </Stack>
  );
}
