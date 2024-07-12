import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; // For Facebook and Chrome icons
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuth } from '../../AuthContext';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser,  user } = useAuth(); // Access the context

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const loginStateSandle = () => {
    setUser("Kevin");
    // alert(user);
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // toggleAuth; // Update the signed-in state
        const user = userCredential.user;
        navigation.navigate('(main)');
        loginStateSandle();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Login Error', errorMessage);
      });
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <View className="w-4/5 items-center">
        <Text className="text-5xl font-bold text-theme-green">Welcome.</Text>
        <Text className="text-gray-500">Please sign in to continue</Text>
        <View className="mt-4 w-full">
          <View className="mb-3">
            <Text className="text-sm text-gray-500 mb-1">username</Text>
            <TextInput
              className="border border-theme-green rounded p-2"
              placeholder="Saman Amarasinghe"
              placeholderTextColor="#AAA"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View className="mb-3">
            <Text className="text-sm text-gray-500 mb-1">password</Text>
            <TextInput
              className="border border-theme-green rounded p-2"
              placeholder="######"
              placeholderTextColor="#AAA"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-theme-green p-2 mt-3 mb-5 mx-20 rounded-full justify-center items-center"
          >
            <Text className="text-white text-[20]">Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }} className="mt-5 mb-5">
          <View style={{ flex: 1, height: 1, backgroundColor: '#BBB' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center', color: '#BBB' }}>or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#BBB' }} />
        </View>
        <View className="flex-row mt-4">
          <TouchableOpacity className="mx-7 p-2 px-10 border border-gray-300 rounded-full justify-center items-center">
            <FontAwesome name="google" size={24} color="#0f525a" />
          </TouchableOpacity>
          <TouchableOpacity className="mx-7 p-2 px-10 border border-gray-300 rounded-full justify-center items-center">
            <FontAwesome name="facebook" size={24} color="#0f525a" />
          </TouchableOpacity>
        </View>
        <Text className="mt-4 text-sm text-gray-500">
          Don't you have an account?{" "}
          <Text onPress={() => navigation.navigate('(signup)')} className="text-theme-green">
            Sign up here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
