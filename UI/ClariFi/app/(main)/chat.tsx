import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image ,StatusBar} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install the appropriate package
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

export default function Component() {
  return (
    <>
    <View className='bg-theme-green p-7'></View>
    <View className='flex-1 flex-col'>
      <View className='flex-row bg-theme-green py-3 px-4 items-center justify-between'>
        <Text className='text-white text-2xl font-bold'>Chat with Intelligence</Text>
        <View className='flex-row items-center'>
          <TouchableOpacity className='ml-2 mr-2'>
            <FontAwesome name="user-plus" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className='flex-1 flex-col px-4 py-2 mr-2'>
        <View className='flex-row my-4'>
          <Image source={require('../../assets/images/user.jpg')} className="w-10 h-10 rounded-full" />
          <View className='flex-col ml-2 flex-1'>
            <Text className='font-bold'>You</Text>
            <View className='bg-gray-300 rounded-lg p-3 mt-2'>
              <Text className='text-black'>Hi, I have a question about my recent lab results. Can you help me understand them?</Text>
            </View>
          </View>
        </View>
        <View className='flex-row mb-4'>
          <View className='flex-col flex-1'>
            <Text className='font-bold text-right px-2 mr-5'>ClariFi</Text>
            <View className='bg-theme-green rounded-lg p-3 mt-2 mr-2'>
              <Text className='text-white'>Of course! Please provide me with the details of your lab results so I can assist you better.</Text>
            </View>
          </View>
          <Image source={require('../../assets/images/doctor profile.jpg')} className="w-10 h-10 rounded-full" />
        </View>

        <View className='flex-row my-2 mb-4'>
          <Image source={require('../../assets/images/user.jpg')} className="w-10 h-10 rounded-full" />
          <View className='flex-col ml-2 flex-1'>
            <Text className='font-bold'>You</Text>
            <View className='bg-gray-300 rounded-lg p-3 mt-2 mr-5'>
              <Text className='text-black'>I'm having trouble with the checkout process on your website. Can you help me?</Text>
            </View>
          </View>
        </View>
        <View className='flex-row mb-4'>
          <View className='flex-col flex-1'>
            <Text className='font-bold text-right px-2 mr-5'>ClariFi</Text>
            <View className='bg-theme-green rounded-lg p-3 mt-2 mr-2'>
              <Text className='text-white'>I'm sorry to hear that. Please provide me with the details of the issue you're experiencing so I can assist you further.</Text>
            </View>
          </View>
          <Image source={require('../../assets/images/doctor profile.jpg')} className="w-10 h-10 rounded-full" />
        </View>
      </ScrollView>
      <View className='flex-row items-center px-4 py-3 border-t border-gray-300'>
        <TextInput
          placeholder="Type your message..."
          className='flex-1 border rounded-lg p-2 mr-2 border-gray-300'
        />
        <TouchableOpacity className='bg-theme-green rounded-lg p-2'>
          <FontAwesome name="send" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}
