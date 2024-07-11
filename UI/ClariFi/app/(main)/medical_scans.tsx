import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StatusBar, Animated , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install the appropriate package

export default function Component() {
  const navigation = useNavigation();

  const [search, setSearch] = useState(false);

  const [FBC_flask, setFBC_flask] = useState(false);
  const [MRI_flask, setMRI_flask] = useState(false);
  const [CT_flask, setCT_flask] = useState(false);
  const [Ultrasound_flask, setUltrasound_flask] = useState(false);
  const [PET_flask, setPET_flask] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;
  const [spin, setSpin] = useState(-150);

  useEffect(() => {
    setSpin(spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [400, -230],
    }));

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <> 
    {/* StatusBar off */}
      <StatusBar hidden />
      <View className="flex p h-60 bg-theme-green rounded-b-[20] shadow-md shadow-black shadow-slate-400">
        <Animated.Image
          style={{ width: 200, height: 300, top: 0, transform: [{ translateX: spin}], opacity: 0.3}}
          source={require('../../assets/images/reflection.png')}
        />
        <Image
          className="absolute bottom-0 right-3 w-32 h-40 opacity-70"
          source={require('../../assets/images/doctor2.png')}
          resizeMode="cover"
        />
        <TouchableOpacity 
        className='absolute left-8 top-8'
        onPress={() => setSearch(!search)}
        >
        <FontAwesome name="search" size={24} color="#ffffff"/>
      </TouchableOpacity>
        <Text className=' absolute pl-4 pb-8 bottom-0 left-0 text-3xl font-bold text-white'>Medical Scans</Text>
        <Text className=' absolute pl-4 pb-4 bottom-0 left-0 text-sms font-regular text-white opacity-50'>Choose a medical scan type to continue</Text>
      </View>

      {search && (
      <View className='bg-white p-4 shadow-md mx-4 rounded-full mt-4'>
        <View className="flex-row items-center mx-2">
          <FontAwesome name="search" size={24} color="#0f525a"/>
          <TextInput className='mx-2 pl-2 text-lg opacity-30' placeholder='Search for a medical scan' placeholderTextColor={"black"}/>  
        </View>
      </View>
    )}

      <View className="pt-5 px-2 flex-col flex-1">
        <ScrollView className="mb-6">
          {/* X-ray section */}
          <View className="bg-white rounded-lg p-4 mb shadow-md">
            <TouchableOpacity 
              onPress={() => setFBC_flask(!FBC_flask)}
            >
              <Text className="text-lg font-bold mb-2">X-ray</Text>
              <Text className="text-gray-700">X-ray scan</Text>
              <FontAwesome name="flask" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
            </TouchableOpacity>
          </View>
          {FBC_flask && (
            <View className='mx-2'>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Chest X-ray</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Abdominal X-ray</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              {/* more */}
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Leg X-ray</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Arm X-ray</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Hand X-ray</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {/* MRI section */}
          <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
            <TouchableOpacity onPress={() => setMRI_flask(!MRI_flask)}>
              <Text className="text-lg font-bold mb-2">MRI</Text>
              <Text className="text-gray-700">MRI scan</Text>
              <FontAwesome name="flask" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
            </TouchableOpacity>
          </View>
          {MRI_flask && (
            <View className='mx-2'>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Brain MRI</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Spine MRI</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              {/* more */}
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Chest MRI</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
                </View>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Abdominal MRI</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
                </View>
            </View>
          )}
          {/* CT section */}
          <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
            <TouchableOpacity onPress={() => setCT_flask(!CT_flask)}>
              <Text className="text-lg font-bold mb-2">CT</Text>
              <Text className="text-gray-700">CT scan</Text>
              <FontAwesome name="flask" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
            </TouchableOpacity>
          </View>
          {CT_flask && (
            <View className='mx-2'>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Head CT</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Chest CT</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {/* Ultrasound section */}
          <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
            <TouchableOpacity onPress={() => setUltrasound_flask(!Ultrasound_flask)}>
              <Text className="text-lg font-bold mb-2">Ultrasound</Text>
              <Text className="text-gray-700">Ultrasound scan</Text>
              <FontAwesome name="flask" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
            </TouchableOpacity>
          </View>
          {Ultrasound_flask && (
            <View className='mx-2'>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Abdominal Ultrasound</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Pelvic Ultrasound</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {/* PET section */}
          <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
            <TouchableOpacity onPress={() => setPET_flask(!PET_flask)}>
              <Text className="text-lg font-bold mb-2">PET</Text>
              <Text className="text-gray-700">PET scan</Text>
              <FontAwesome name="flask" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
            </TouchableOpacity>
          </View>
          {PET_flask && (
            <View className='mx-2'>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Whole Body PET</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
              <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Brain PET</Text>
                  <FontAwesome name="camera" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
}
