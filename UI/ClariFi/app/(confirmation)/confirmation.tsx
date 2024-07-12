import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import CheckBox from 'react-native-check-box';
import axios from 'axios';
import { BlurView } from 'expo-blur';

const SERVER_URL = 'http://192.168.1.43:8000';

const Confirmation = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [reportData, setReportData] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const fetchReportData = () => {
      axios.get(`${SERVER_URL}/ocr/confirm`)
        .then(response => {
          setReportData(response.data);
          console.log('Report data:', response.data);
        })
        .catch(error => {
          console.error('Error fetching report data:', error);
        });
    };

    fetchReportData();
    const interval = setInterval(fetchReportData, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleInputChange = (key, value) => {
    setReportData(prevData => ({ ...prevData, [key]: value }));
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <View className="absolute top-20">
        <Text className="text-5xl font-bold text-theme-green">Confirmation.</Text>
        <Text className="text-gray-500">Please confirm the reports data</Text>
      </View>
      <View className="w-4/5 items-center mt-10">
        <View className="mt-10 w-full px-5">
          <ScrollView>
            {/* when no keys show loading text */}
            {Object.keys(reportData).length === 0 && (
              <Text className="text-3xl font-bold text-theme-green pb-20 mx-20">Loading...</Text>
            )}
            {Object.keys(reportData).map(key => (
              <View key={key} className="mb-3 flex-row items-center">
                <Text className="flex-1 text-base font-regular text-gray-500 mb-1">{key}:</Text>
                <TextInput
                  className="flex-1 ml-3 border border-theme-green rounded p-2"
                  placeholder={`Enter ${key}`}
                  placeholderTextColor="#555"
                  value={reportData[key]}
                  onChangeText={(text) => handleInputChange(key, text)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <BlurView intensity={10} className='absolute bottom-0 w-full pb-5 pt-5'>
        {isChecked ? (
          <TouchableOpacity onPress={() => navigation.navigate('(results)')} className="bg-theme-green p-2 mb-5 mx-20 rounded-full justify-center items-center">
            <Text className="text-white text-lg font-bold">Confirm</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('(main)')} className="bg-gray-500 p-2 mb-5 mx-20 rounded-full justify-center items-center">
            <Text className="text-white text-lg font-bold">Decline</Text>
          </TouchableOpacity>
        )}
        <View className="mb-5 flex-row items-center justify-center mx-20">
          <CheckBox
            className="rounded px-2"
            onClick={() => setIsChecked(!isChecked)}
            isChecked={isChecked}
          />
          <Text className="text-sm text-gray-500 mb-1 flex-1">I agree above data are correct</Text>
        </View>
      </BlurView>
    </SafeAreaView>
  );
};

export default Confirmation;
