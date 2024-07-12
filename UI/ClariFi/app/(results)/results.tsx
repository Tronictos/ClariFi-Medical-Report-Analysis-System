import React from 'react';
import { ScrollView,SafeAreaView, View, Text, TextInput, TouchableOpacity , Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // For Facebook and Chrome icons
import CheckBox from 'react-native-check-box';
import { BlurView } from 'expo-blur';


const Confirmation = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = React.useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Health explanations and tips for each metric
  const healthDetails = [
    {
      label: 'Hemoglobin:',
      description:
        'Hemoglobin levels are very high. This could indicate conditions such as polycythemia vera or chronic hypoxia. Ensure proper hydration and avoid smoking.',
    },
    {
      label: 'Platelets:',
      description:
        'Platelet count is normal. Maintain a balanced diet, avoid excessive alcohol consumption, and engage in regular exercise.',
    },
    {
      label: 'White Blood Cells:',
      description:
        'White blood cell count is normal. Eat a healthy diet, practice good hygiene, and exercise regularly to support immune function.',
    },
    {
      label: 'Red Blood Cells:',
      description:
        'Red blood cell count is slightly elevated but within normal range. Stay hydrated, consume iron-rich foods, and avoid smoking.',
    },
    {
      label: 'Lymphocytes:',
      description:
        'Lymphocyte count is normal. Consume a diet rich in antioxidants, exercise regularly, and manage stress effectively.',
    },
    {
      label: 'Monocytes:',
      description:
        'Monocyte count is normal. Maintain a balanced diet, ensure adequate sleep, and manage stress levels.',
    },
    {
      label: 'Neutrophils:',
      description:
        'Neutrophil count is normal. Practice good hygiene, maintain a healthy diet, and avoid excessive alcohol consumption.',
    },
    {
      label: 'Eosinophils:',
      description:
        'Eosinophil count is normal. Avoid allergens if you have allergies, maintain a healthy diet, and consult a doctor if necessary.',
    },
    {
      label: 'Basophils:',
      description:
        'Basophil count is slightly elevated. Identify and avoid allergens, manage stress, and consult a healthcare provider for further evaluation.',
    },
    {
      label: 'Hematocrit:',
      description:
        'Hematocrit level is normal. Stay well-hydrated, maintain a balanced diet with sufficient iron, exercise regularly, and avoid smoking.',
    },
  ];

  return (
    <>
    <View className="h-40 bg-theme-green rounded-b-[20] shadow-md shadow-black shadow-slate-500">
      <Text className=' absolute pl-20 pb-4 bottom-0 left-0 text-7xl font-bold text-white'>Analysis</Text>
    </View>
    <ScrollView className="w-full bg-gray-1">
    <View className="flex-1 bg-gray-1 items-center">
      <View className="items-center">

        <View className="mt-5 w-full p-2">
          {/* List of health details */}
          {healthDetails.map((item, index) => (
            <View className='bg-white p-3 shadow-lg shadow-black shadow-slate-200 rounded-lg mb-5'>
              <View key={index}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text className='text-xl font-bold text-theme-green mb-1'>{item.label}</Text>
                </View>
                <Text className='text-[20] text-gray-500'>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
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
