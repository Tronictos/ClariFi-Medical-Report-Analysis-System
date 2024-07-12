import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install the appropriate package
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { BlurView } from 'expo-blur';

const SERVER_URL = 'http://192.168.1.43:8000';

export default function Component() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const clearChat = () => {
    setChatMessages([]);
  }

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    const newChatMessages = [...chatMessages, { sender: 'user', text: message }];
    setChatMessages(newChatMessages);

    try {
      const response = await axios.get(`${SERVER_URL}/ocr/chat`, {
        params: { message }
      });
      // console.log('Response:', response.data);
      const aiMessage = response.data;
      // console.log('AI message:', aiMessage);
      setChatMessages([...newChatMessages, { sender: 'ai', text: aiMessage }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setMessage('');
  };

  return (
    <>
      <View className='bg-theme-green p-7'></View>
      <View className='flex-1 flex-col'>
        
        <ScrollView className='absolute bottom-20 w-full flex-1 flex-col px-4 py-2 mr-2'>
        <View className={`flex-row mb-4 my-4`}>

        <View className='flex-col flex-1'>
                <Text className='font-bold text-right px-2 mr-5'>ClariFi</Text>
                <View className='bg-theme-green rounded-lg p-3 mt-2 mr-2'>
                  <Text className='text-white'>Hello there! Welcome to ClariFi.</Text>
                </View>
              </View>
              <Image source={require('../../assets/images/doctor profile.jpg')} className="mr-7 w-10 h-10 rounded-full" />
        </View>
          {chatMessages.map((chat, index) => (
            <View key={index} className={`flex-row mb-4 ${chat.sender === 'user' ? 'my-4' : ''}`}>
              {chat.sender === 'user' ? (
                <>
                  <Image source={require('../../assets/images/user.jpg')} className="ml-20 w-10 h-10 rounded-full" />
                  <View className='flex-col ml-3 flex-1'>
                    <Text className='font-bold'>You</Text>
                    <View className='bg-gray-300 rounded-lg p-3 mt-2'>
                      <Text className='text-black'>{chat.text}</Text>
                    </View>
                  </View>
                </>
              ) : (
                <>
                  <View className='flex-col flex-1'>
                    <Text className='font-bold text-right px-2 mr-5'>ClariFi</Text>
                    <View className='bg-theme-green rounded-lg p-3 mt-2 mr-2'>
                      <Text className='text-white'>{chat.text}</Text>
                    </View>
                  </View>
                  <Image source={require('../../assets/images/doctor profile.jpg')} className="mr-7 w-10 h-10 rounded-full" />
                </>
              )}
            </View>
          ))}
        </ScrollView>
        
        <View className='absolute bottom-0 flex-row items-center px-4 py-3 border-t border-gray-300'>
          <TextInput
            placeholder="Type your message..."
            value={message}
            onChangeText={setMessage}
            className='flex-1 border rounded-lg p-2 mr-2 border-gray-300'
          />
          <TouchableOpacity className='bg-theme-green rounded-lg p-2' onPress={handleSendMessage}>
            <FontAwesome name="send" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
      <View className='absolute top-0 w-full flex-row bg-theme-green py-3 px-4 items-center justify-between'>
          <Text className='text-white mt-12 text-2xl font-bold'>Chat with Intelligence</Text>
          <View className='flex-row items-center mt-12 '>
            <TouchableOpacity className='ml-2 mr-2'
                              onPress={() => clearChat()}>
              <FontAwesome name="user-plus" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
    </>
  );
}
