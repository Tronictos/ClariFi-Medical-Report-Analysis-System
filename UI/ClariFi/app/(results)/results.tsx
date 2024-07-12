import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { BlurView } from 'expo-blur';

const SERVER_URL = 'http://192.168.1.43:8000';

const Confirmation = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [healthDetails, setHealthDetails] = useState({});
  const [initialFetch, setInitialFetch] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const fetchHealthDetails = () => {
      axios.get(`${SERVER_URL}/ocr/results`)
        .then(response => {
          setHealthDetails(response.data);
          console.log('Health details:', response.data);
        })
        .catch(error => {
          console.error('Error fetching health details:', error);
        });
    };

    if (initialFetch) {
      fetchHealthDetails();
    } else {
      setInitialFetch(true);
    }

    const interval = setInterval(() => {
      fetchHealthDetails();
    }, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [initialFetch]);

  return (
    <>
      <View className="h-40 bg-theme-green rounded-b-[20] shadow-md shadow-black shadow-slate-500">
        <Text className='absolute pl-20 pb-4 bottom-0 left-0 text-7xl font-bold text-white'>Analysis</Text>
      </View>
      <ScrollView className="w-full bg-gray-1">
        <View className="flex-1 bg-gray-1 items-center">
          <View className="items-center">
            <View className="mt-5 w-full p-2">
              {/* List of health details */}
              {/* {Object.keys(healthDetails).length === 0 && (
                // <Text className="text-4xl font-bold text-theme-green pb-20 mx-20 mt-60">Loading...</Text>
              )} */}
              {Object.keys(healthDetails).map(key => (
                <View key={key} className='bg-white p-3 shadow-lg shadow-black shadow-slate-200 rounded-lg mb-5'>
                  <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text className='text-xl font-bold text-theme-green mb-1'>{key}</Text>
                    </View>
                    <Text className='text-[20] text-gray-500'>{healthDetails[key]}</Text> 
                  </View> 
                </View>
              ))}
            </View>
          </View>
        </View>
        <Text className="text-3xl font-bold text-theme-green pb-20 mx-20 px-14 ">Loading...</Text>

      </ScrollView>
      <BlurView intensity={10} className="absolute bottom-0 w-full flex-row items-center justify-center">
        <TouchableOpacity onPress={() => navigation.navigate('(main)')} className="bg-theme-green p-3 mb-5 mt-3 mx-1 rounded-full justify-center items-center"> 
          <FontAwesome name="share" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('(main)')} className="bg-theme-green p-2 px-10 mb-5 mt-3 mx-3 rounded-full justify-center items-center"> 
          <Text className="text-white text-xl font-bold">Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('(main)')} className="bg-theme-green p-3 mb-5 mt-3 mx-1 rounded-full justify-center items-center"> 
          <FontAwesome name="print" size={24} color="#fff" />
        </TouchableOpacity>
      </BlurView>
    </>
  );
};

export default Confirmation;
