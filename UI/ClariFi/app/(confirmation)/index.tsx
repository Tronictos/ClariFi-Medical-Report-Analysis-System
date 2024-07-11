import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // For Facebook and Chrome icons
import CheckBox from 'react-native-check-box';


const Confirmation = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = React.useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <View className="w-4/5 items-center mt-10">
        <Text className="text-5xl font-bold text-theme-green">Confirmation.</Text>
        <Text className="text-gray-500">Please confirm the reports data</Text>

        <View className="mt-10 w-full px-5">
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">hemolglobin :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="45 g/dL" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">platelets :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="150,000" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">white blood cells :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="4.5" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">red blood cells :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="5.5" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">lymphocytes :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="1.5" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">monocytes :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="0.5" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">neutrophils :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="2.5" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">eosinophils :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="0.5" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">basophils :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="0.5" placeholderTextColor="#555" />
          </View>
          <View className="mb-3 flex-row items-center">
            <Text className="flex-1 text-base font-regular text-gray-500 mb-1">hematocrit :</Text>
            <TextInput className="flex-1 ml-3 border border-theme-green rounded p-2" placeholder="45%" placeholderTextColor="#555" />
          </View>

          <View className="mb-3 flex-row items-center justify-center mt-10">
            <CheckBox
              className="rounded px-2"
              onClick={() => setIsChecked(!isChecked)}
              isChecked={isChecked}
            />
            <Text className="text-sm text-gray-500 mb-1 flex-1">I agree to the terms and conditions</Text>
          </View>
          {/* decline if not agree */}
          {isChecked ? (
          <TouchableOpacity onPress={() => navigation.navigate('(main)')} className="bg-theme-green p-2 mb-5 mx-20 rounded-full justify-center items-center"> 
            <Text className="text-white text-lg font-bold">Confirm</Text>
          </TouchableOpacity>
          ) : 
          <TouchableOpacity onPress={() => navigation.navigate('(main)')} className="bg-gray-500 p-2 mb-5 mx-20 rounded-full justify-center items-center"> 
            <Text className="text-white text-lg font-bold">Decline</Text>
          </TouchableOpacity>
        }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Confirmation;
