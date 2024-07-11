import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity ,Image , StatusBar, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install the appropriate package
import { Animated } from 'react-native';
import { useEffect } from 'react';
import { useRef } from 'react';


export default function Component() {
  const navigation = useNavigation();
  const [search, setSearch] = useState((false));

  const [FBC_list, setFBC_list] = useState((false));
  const [SERUM_list, setSERUM_list] = useState((false));
  const [ABG_list, setABG_list] = useState((false));
  const [URINE_list, setURINE_list] = useState((false));
  const [BIOPSIES_list, setBIOPSIES_list] = useState((false));
  const [ENDOSCOPIC_list, setENDOSCOPIC_list] = useState((false));
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
    <StatusBar hidden />
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
      <TouchableOpacity 
      className='absolute left-8 top-8'
      onPress={() => setSearch(!search)}
      >
        <FontAwesome name="search" size={24} color="#ffffff"/>
      </TouchableOpacity>
      <Text className=' absolute pl-4 pb-8 bottom-0 left-0 text-3xl font-bold text-white'>Medical Reports</Text>
      <Text className=' absolute pl-4 pb-4 bottom-0 left-0 text-sms font-regular text-white opacity-50'>choose a medical report type to continue</Text>
    </View>

    {search && (
      <View className='bg-white p-4 shadow-md mx-4 rounded-full mt-4'>
        <View className="flex-row items-center mx-2">
          <FontAwesome name="search" size={24} color="#0f525a"/>
          <TextInput className='mx-2 pl-2 text-lg opacity-30' placeholder='Search for a medical report' placeholderTextColor={"black"}/>  
        </View>
      </View>
    )}

    <View className="pt-5 px-2 flex-col flex-1">
        {/* <Text className="text-2xl font-bold mb-6 p-4">Medical Reports</Text> */}
          <ScrollView className="mb-6">
            <View className="bg-white rounded-lg p-4 mb shadow-md">
              <TouchableOpacity 
              onPress={() => setFBC_list(!FBC_list)}
              >
              <Text className="text-lg font-bold mb-2">FWC - blood cell Reports</Text>
              <Text className="text-gray-700">FBC report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            {FBC_list && (
              <View className='mx-2'>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity 
                  onPress={() => navigation.navigate('(upload)', { report: 'WBC report' ,})}
                  >
                  <Text className="text-lg font-bold mb-2">WBC</Text>
                  <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'RBC report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">RBC</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Hemoglobin report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Hemoglobin</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Hematocrit report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Hematocrit</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'MCV report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">MCV</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'MCH report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">MCH</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'MCHC report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">MCHC</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'RDW report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">RDW</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Platelets report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Platelets</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'MPV report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Neutrophils</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Lymphs report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Lymphs</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Monocytes report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Monocytes</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Eos report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Eos</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Basos report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Basos</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Immature Granulocytes report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Neutrophils (Absolute)
                    </Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Immature Grans (Abs) report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Lymphs (Absolute)
                    </Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Immature Grans (Abs) report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Monocytes (Absolute)
                    </Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Immature Grans (Abs) report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Eos (Absolute)
                    </Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Immature Grans (Abs) report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Baso (Absolute)
                    </Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Immature Grans (Abs) report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Immature Granulocytes
                    </Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Immature Grans (Abs) report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Immature Grans (Abs)
                    </Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity
              onPress={() => setSERUM_list(!SERUM_list)}
              >
              <Text className="text-lg font-bold mb-2">Serum Reports</Text>
              <Text className="text-gray-700">UFR report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            {SERUM_list && (
              <View className='mx-2'>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity 
                  onPress={() => navigation.navigate('(upload)', { report: 'Electrolyte - NA+,k+ report' ,})}
                  >
                  <Text className="text-lg font-bold mb-2">Electrolyte - NA+,k+</Text>
                  <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Urea report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Liver function tests -AST/ALT</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Creatinine report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">RFT(Renal Function test) - Creatinine</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Albumin report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">TSH - Thyroid stimulating hormone</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('(upload)', { report: 'Protein report' ,})}
                  >
                    <Text className="text-lg font-bold mb-2">Creatinine,Albumin,protein</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity
               onPress={() => setABG_list(!ABG_list)}
              >
              <Text className="text-lg font-bold mb-2">ABG Test - Arterial blood gas Reports</Text>
              <Text className="text-gray-700">LFT report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            {ABG_list && (
              <View className='mx-2'>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity onPress={() => navigation.navigate('(upload)')}>
                  <Text className="text-lg font-bold mb-2">pH</Text>
                  <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">PC02</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">BICARBONATE (HC03)</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">TOTAL CO2 CONTENTS (TC02)</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">STANDARD BICARBONATE (SBC)</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">BASE EXCESS</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">PO2</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">OXYGEN SATURATION CAPACITY</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">BASE EXCESS - EXTRACELLULAR FLUID</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">HEMOGLOBIN</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity
                onPress={() => setURINE_list(!URINE_list)}
              >
              <Text className="text-lg font-bold mb-2">Urine Reports</Text>
              <Text className="text-gray-700">ABG report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            {URINE_list && (
              <View className='mx-2'>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity onPress={() => navigation.navigate('(upload)')}>
                  <Text className="text-lg font-bold mb-2">Macroscony</Text>
                  <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">Microscopy</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
              </View>
            )}

            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity
                onPress={() => setBIOPSIES_list(!BIOPSIES_list)}
              >
              <Text className="text-lg font-bold mb-2">Biopsies</Text>
              <Text className="text-gray-700">FBC report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            {BIOPSIES_list && (
              <View className='mx-2'>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity onPress={() => navigation.navigate('(upload)')}>
                  <Text className="text-lg font-bold mb-2">Skin Biopsy</Text>
                  <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">Needle Biopsy</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">Bone Marrow Biopsy</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View className="bg-white rounded-lg p-4 mt-4 shadow-md">
              <TouchableOpacity
                onPress={() => setENDOSCOPIC_list(!ENDOSCOPIC_list)}
              >
              <Text className="text-lg font-bold mb-2">Endoscopic Procedures</Text>
              <Text className="text-gray-700">FBC report</Text>
              <FontAwesome name="list" size={24} color="#0f525a" style={{ position: 'absolute', right: 20, top: 14}} />
              </TouchableOpacity>
            </View>
            {ENDOSCOPIC_list && (
              <View className='mx-2'>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity onPress={() => navigation.navigate('(upload)')}>
                  <Text className="text-lg font-bold mb-2">Colonoscopy</Text>
                  <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">Gastroscopy</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity onPress={() => navigation.navigate('(upload)')}>
                  <Text className="text-lg font-bold mb-2">Bronchoscopy</Text>
                  <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
                <View className="bg-white rounded-lg p-4 mt-1 shadow-md">
                  <View className="absolute w-1 h-16 right-0 bg-theme-green items-center"></View>
                  <TouchableOpacity>
                    <Text className="text-lg font-bold mb-2">Cystoscopy</Text>
                    <FontAwesome name="paper-plane" size={24} color="#0f525a" style={{ position: 'absolute', right: 10, top: 6}} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </ScrollView>
    </View>
    </>
  );
}
