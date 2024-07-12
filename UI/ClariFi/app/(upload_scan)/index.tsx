import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // For Facebook and Chrome icons
import { useRoute } from '@react-navigation/native';
import { launchImageLibraryAsync, launchCameraAsync, MediaTypeOptions} from "expo-image-picker";
import { Platform } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

const SERVER_URL = 'http://192.168.1.43:8000';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  if (photo.assets && photo.assets.length > 0) {
    const photoData = photo.assets[0];
    data.append('image', {
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

export default function SignInScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { report } = route.params; 
  const [photo, setPhoto] = React.useState(null);
  const [ csrfToken, setCsrfToken ] = useState('');

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get(`${SERVER_URL}/ocr/csrf/`)
      .then((response) => {
        setCsrfToken(response.data.csrfToken);
      })
      .catch((error) => {
        console.error('Error fetching CSRF token:', error);
      });
  }, []);

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
        setPhoto(response);
        setPhoto(response);
        // alert('Photo selected');
        handleUploadPhoto();
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const handleUploadPhoto = () => {
    if (!photo) {
      // console.log('No photo selected');
      return;
    }

    fetch(`${SERVER_URL}/ocr/upload/`, {
      method: 'POST',
      body: createFormData(photo, { userId: '123' }),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log('Upload success:', response);
        // Handle success response as needed
      })
      .catch((error) => {
        // console.error('Upload error:', error);
      });
      // #navigate to completion
      navigation.navigate('(confirmation)');
  };

  const formatJson = (json) => {
    return JSON.stringify(json, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, '');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <View className='my-2 absolute top-20'>
          <FontAwesome name="upload" size={100} color="#0f525a" />
        </View>
      <View className="w-4/5 items-center mt-20">
        <Text className="text-5xl font-bold text-theme-green">{report ? formatJson(report) : 'No data available'}.</Text>
        <Text className="text-gray-500">Upload documents for processing</Text>
        <View className="mt-4 w-full">
          <TouchableOpacity onPress={() => handleChoosePhoto('camera')} className="bg-theme-green p-2 mt-3 mb-3 mx-20 h-20 rounded-full justify-center items-center"> 
            {FontAwesome ? <FontAwesome name="camera" size={40} color="#FFF" /> : 'Upload'}
          </TouchableOpacity>
          <Text className="text-gray-500 text-center">or</Text>
          <TouchableOpacity onPress={() => navigation.navigate('(confirmation)')} className="bg-theme-green p-2 mt-3 mb-3 mx-20 h-20 rounded-full justify-center items-center"> 
            {FontAwesome ? <FontAwesome name="book" size={40} color="#FFF" /> : 'Upload'}
          </TouchableOpacity>
          <Text className="text-gray-500 text-center">or</Text>
          <TouchableOpacity onPress={() => handleChoosePhoto('photo')} className="bg-theme-green p-2 mt-3 mb-3 mx-20 h-20 rounded-full justify-center items-center"> 
            {FontAwesome ? <FontAwesome name="image" size={40} color="#FFF" /> : 'Upload'}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}} className='mt-5 mb-5'>
          <View style={{flex: 1, height: 1, backgroundColor: '#BBB'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', color: '#BBB'}}>or</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#BBB'}} />
        </View>
        <View className="flex-row mt-4">
          <TouchableOpacity className="mx-7 p-2 px-20 border border-gray-300 rounded-full justify-center items-center">
            <Text className="text-theme-green font-sans text-lg font-regular">History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
