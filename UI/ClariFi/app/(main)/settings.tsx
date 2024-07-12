import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";
import { FontAwesome } from '@expo/vector-icons';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  if (photo.assets && photo.assets.length > 0) {
    const photoData = photo.assets[0];
    data.append('photo', {
      name: photoData.fileName || 'photo.jpg',
      type: photoData.type || 'image/jpeg',
      uri: Platform.OS === 'ios' ? photoData.uri.replace('file://', '') : photoData.uri,
    });
  }

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};

export default function Component() {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleChoosePhoto = async (mediaType: MediaTypeOptions) => {
    let pickerFunction = launchImageLibraryAsync;
    if (mediaType === 'camera') {
      pickerFunction = launchCameraAsync;
    }

    try {
      const response = await pickerFunction({ mediaType, includeBase64: false });
      if (response.cancelled) {
        console.log('User cancelled image picker');
      } else {
        setImageUri(response);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const selectImage = () => {
    Alert.alert(
      'Select Image',
      'Choose an image source',
      [
        {
          text: 'Camera',
          onPress: () => launchCameraAsync({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              setImageUri(response.assets[0].uri);
            }
          }),
        },
        {
          text: 'Gallery',
          onPress: () => launchImageLibraryAsync({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              setImageUri(response.assets[0].uri);
            }
          }),
        },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView className='flex-1 bg-white pt-5 items-center'>
      <View className='w-4/5 items-center'>
        <View className='flex-row items-center justify-between w-full'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" size={24} color="#0f525a" />
          </TouchableOpacity>
          <Text className='pl-20 mx-5 flex-1 text-3xl font-bold text-theme-green'>Settings</Text>
        </View>
        <View className='flex-row items-center'>
          <TouchableOpacity className='flex-1' onPress={() => handleChoosePhoto('photo')}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} className='w-40 h-40 rounded-full mt-5 border-theme-green border-4' />
            ) : (
              <Image source={require('../../assets/images/user.jpg')} className='w-40 h-40 rounded-full mt-5 border-theme-green border-4' />
            )}
          </TouchableOpacity>
          <View className='flex-1 flex-col items-center mt-5'>
            <Text className='text-xl font-extrabold'>B.N. Basnayake</Text>
            <Text className='text-gray-500'>
              <TouchableOpacity onPress={() => handleChoosePhoto('photo')} className='pt-2'>
                <Text className='text-theme-green'>Edit Profile</Text>  
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>

      <View className="bg-white rounded-lg shadow-md w-full mt-7">
        <TouchableOpacity className='mb-3'>
          <View className="flex-row mx-4 bg-white rounded-2xl shadow-lg shadow-slate-200 items-center p-3">
            <FontAwesome className="ml-3" name="user" size={32} color="#0f525a" /> 
            <View className="flex-1 flex-col items-right ml-3">
              <Text className="text-xl font-bold text-theme-green px-4">General</Text>
              <Text className="text-gray-500 px-4">Personal Information, Password</Text>
            </View>
            <FontAwesome className="mr-3" name="chevron-right" size={24} color="#0f525a" onPress={() => navigation.navigate('(settings)')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className='mb-3'>
          <View className="flex-row mx-4 bg-white rounded-2xl shadow-lg shadow-slate-200 items-center p-3">
            <FontAwesome className="ml-3" name="bell" size={32} color="#0f525a" /> 
            <View className="flex-1 flex-col items-right ml-3">
              <Text className="text-xl font-bold text-theme-green px-4">Notifications</Text>
              <Text className="text-gray-500 px-4">Email, SMS, Push</Text>
            </View>
            <FontAwesome className="mr-3" name="chevron-right" size={24} color="#0f525a" onPress={() => navigation.navigate('(settings)')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className='mb-3'>
          <View className="flex-row mx-4 bg-white rounded-2xl shadow-lg shadow-slate-200 items-center p-3">
            <FontAwesome className="ml-3" name="shield" size={32} color="#0f525a" /> 
            <View className="flex-1 flex-col items-right ml-3">
              <Text className="text-xl font-bold text-theme-green px-4">Security</Text>
              <Text className="text-gray-500 px-4">Two-factor authentication</Text>
            </View>
            <FontAwesome className="mr-3" name="chevron-right" size={24} color="#0f525a" onPress={() => navigation.navigate('(settings)')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className='mb-3'>
          <View className="flex-row mx-4 bg-white rounded-2xl shadow-lg shadow-slate-200 items-center p-3">
            <FontAwesome className="ml-3" name="language" size={32} color="#0f525a" /> 
            <View className="flex-1 flex-col items-right ml-3">
              <Text className="text-xl font-bold text-theme-green px-4">Language</Text>
              <Text className="text-gray-500 px-4">English, Sinhala</Text>
            </View>
            <FontAwesome className="mr-3" name="chevron-right" size={24} color="#0f525a" onPress={() => navigation.navigate('(settings)')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className='mb-3'>
          <View className="flex-row mx-4 bg-white rounded-2xl shadow-lg shadow-slate-200 items-center p-3">
            <FontAwesome className="ml-3" name="info" size={32} color="#0f525a" /> 
            <View className="flex-1 flex-col items-right ml-3">
              <Text className="text-xl font-bold text-theme-green px-4">About</Text>
              <Text className="text-gray-500 px-4">Version, Legal</Text>
            </View>
            <FontAwesome className="mr-3" name="chevron-right" size={24} color="#0f525a" onPress={() => navigation.navigate('(settings)')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className='mb-3' onPress={() => navigation.navigate('(login)')}>
          <View className="flex-row mx-4 bg-white rounded-2xl shadow-lg shadow-slate-200 items-center p-3">
            <FontAwesome className="ml-3" name="sign-out" size={32} color="#dd3300" /> 
            <View className="flex-1 flex-col items-right ml-3">
              <Text className="text-xl font-bold text-black px-4">Sign Out</Text>
              <Text className="text-gray-500 px-4">Log out Account</Text>
            </View>
            <FontAwesome className="mr-3" name="chevron-right" size={24} color="#0f525a" onPress={() => navigation.navigate('(login)')} />
          </View>
        </TouchableOpacity>


      </View>


    
    </SafeAreaView>
  );
}
