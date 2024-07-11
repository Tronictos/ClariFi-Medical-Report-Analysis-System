import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install the appropriate package
import { BlurView } from 'expo-blur';


export default function TabLayout() {
  return (
    
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="medical_reports" 
        options={{
          title: 'medical reports',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'document' : 'document-outline'} color="#0f525a" />
          ),
        }}/>
        <Tabs.Screen name="medical_scans" 
        options={{
          title: 'medical scans',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'scan' : 'scan-outline'} color="#0f525a" />
          ),
        }}/>
        <Tabs.Screen name="chat" 
        options={{
          title: 'chat',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbubble' : 'chatbubble-outline'} color="#0f525a" />),
        }}/>
        <Tabs.Screen name="settings" 
        options={{
          title: 'settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color="#0f525a" />),
        }}/>
    </Tabs>
  );
}
