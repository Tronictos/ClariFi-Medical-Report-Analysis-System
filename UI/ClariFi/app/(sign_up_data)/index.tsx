import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView , Switch} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // For Facebook and Chrome icons

export default function Component() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
    <ScrollView className="w-full max-w-lg mx-auto p-6 sm:p-8 center py-20">
      <View className="mb-6">
        <View className="flex-row items-center gap-2">
          <Text className="text-4xl font-bold text-theme-green">Personal Information</Text>
          <FontAwesome name="lock" size={32} color="#0f525a" onPress={() => navigation.navigate('(login)')} />
        </View>
        <Text className="text-theme-green opacity-50 text-sm">Please provide the following details to continue.</Text>
      </View>
      <View className="space-y-6">
        <View className="grid grid-cols-2 gap-4">
          <View className="space-y-2">
            <Text className="text-gray-700">First Name</Text>
            <TextInput className="border p-2 rounded border-theme-green" placeholder="Enter your first name" placeholderTextColor="#AAA"/>
          </View>
          <View className="space-y-2">
            <Text className="text-gray-700">Last Name</Text>
            <TextInput className="border p-2 rounded border-theme-green" placeholder="Enter your last name" placeholderTextColor="#AAA"/>
          </View>
        </View>
        <View className="space-y-2">
          <Text className="text-gray-700">Age</Text>
          <TextInput className="border p-2 rounded border-theme-green" keyboardType="numeric" placeholder="Enter your age" placeholderTextColor="#AAA"/>
        </View>
        <View className="space-y-2">
          <Text className="text-gray-700">Gender</Text>
          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-2">
              <Text className="text-gray-700">Male</Text>
              <Switch
                trackColor={{false: '#dddddd', true: '#dddddd'}}
                thumbColor={isEnabled ? '#0f525a' : '#0f525a'}
                ios_backgroundColor="#dddddd"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View className="flex-row items-center gap-2">
              <Text className="text-gray-700">Female</Text>
            </View>
          </View>
        </View>
        <View className="space-y-2">
          <Text className="text-gray-700">Medical Summary (optional)</Text>
          <TextInput className="border p-2 min-h-[100px] rounded border-theme-green" placeholder="Enter a brief medical summary" multiline  placeholderTextColor="#AAA"/>
        </View>
      </View>
      <View className="items-center mx-20">
        <TouchableOpacity onPress={() => navigation.navigate('(main)')} className="bg-theme-green p-3 mt-8 mb-5 w-20 rounded-full justify-center items-center"> 
          <FontAwesome name="arrow-right" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
