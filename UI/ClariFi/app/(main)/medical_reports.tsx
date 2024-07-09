import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity ,Image , StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install the appropriate package
import { Animated } from 'react-native';
import { useEffect } from 'react';
import { useRef } from 'react';


export default function Component() {
  const navigation = useNavigation();
  const [FBC_list, setFBC_list] = useState((false));
  const spinValue = useRef(new Animated.Value(0)).current;
  const [spin, setSpin] = useState(-150);

  useEffect(() => {
      setSpin(spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-230, 400],
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
    <View className="flex p h-60 bg-theme-green rounded-b-[20] shadow-md shadow-black shadow-slate-400">
    <Animated.Image
       style={{ width: 200, height: 300, top: 0,transform: [{ translateX: spin}], opacity: 0.3}}
       source={require('../../assets/images/reflection.png')}
     />
      <Image
          className="absolute bottom-0 right-3 w-32 h-40 opacity-60"
          source={require('../../assets/images/doctor.png')} // Replace with your image path
          resizeMode="cover" // Adjust the resizeMode as needed
        />
      <Text className=' absolute pl-4 pb-8 bottom-0 left-0 text-3xl font-bold text-white'>Medical Reports</Text>
      <Text className=' absolute pl-4 pb-4 bottom-0 left-0 text-sms font-regular text-white opacity-50'>choose a medical report type to continue</Text>
    </View>

    <View className="pt-5 px-2 flex-col flex-1">
        {/* <Text className="text-2xl font-bold mb-6 p-4">Medical Reports</Text> */}
          <ScrollView className="mb-6">
            <View className="bg-white rounded-lg p-4 mb shadow-md">
              <TouchableOpacity 
              onPress={() => setFBC_list(!FBC_list)}
              >
              <Text className="text-lg font-bold mb-2">Full Blood Count Report</Text>
              <Text className="text-gray-700">FBC report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            {FBC_list && (
              <View className='mx-2'>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                  <Text className="text-lg font-bold mb-2">Red Blood Count</Text>
                  <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">White Blood Count</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity>
              <Text className="text-lg font-bold mb-2">Urine Full Report Report</Text>
              <Text className="text-gray-700">UFR report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity>
              <Text className="text-lg font-bold mb-2">Liver Function Test Report</Text>
              <Text className="text-gray-700">LFT report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity>
              <Text className="text-lg font-bold mb-2">Arterial Blood Gas Report</Text>
              <Text className="text-gray-700">ABG report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity>
              <Text className="text-lg font-bold mb-2">Full Blood Count Report</Text>
              <Text className="text-gray-700">FBC report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
          </ScrollView>
    </View>
    </>
  );
}
