import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert , Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { auth, firestore } from '../../firebaseConfig'; // Adjust the path as needed
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    // Request permissions on iOS and Android
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission not granted for notifications');
      }
    }

    requestPermissions();

    // Handle notifications that are received while the app is foregrounded
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    return () => subscription.remove();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleRegisterUser = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Success",
        body: "User registered successfully",
      },
      trigger: null, // Show the notification immediately
    });
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save the username in Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        username,
        email,
      });

      handleRegisterUser();
      navigation.navigate('(login)'); // Adjust the navigation as needed
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      <View className="w-4/5 items-center">
        <Text className="text-5xl font-bold text-theme-green">Sign up.</Text>
        <Text className="text-gray-500">Please sign up to create an account</Text>
        <View className="mt-4 w-full">
          <View className="mb-3">
            <Text className="text-sm text-gray-500 mb-1">Username</Text>
            <TextInput
              className="border border-theme-green rounded p-2"
              placeholder="Saman Amarasinghe"
              placeholderTextColor="#AAA"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View className="mb-3">
            <Text className="text-sm text-gray-500 mb-1">Email</Text>
            <TextInput
              className="border border-theme-green rounded p-2"
              placeholder="samanamarasinghe@email.com"
              placeholderTextColor="#AAA"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View className="mb-3">
            <Text className="text-sm text-gray-500 mb-1">Password</Text>
            <TextInput
              className="border border-theme-green rounded p-2"
              placeholder="######"
              placeholderTextColor="#AAA"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View className="mb-3">
            <Text className="text-sm text-gray-500 mb-1">Confirm Password</Text>
            <TextInput
              className="border border-theme-green rounded p-2"
              placeholder="######"
              placeholderTextColor="#AAA"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <TouchableOpacity
            onPress={handleSignUp}
            className="bg-theme-green p-2 mt-3 mb-5 mx-20 rounded-full justify-center items-center"
          >
            <Text className="text-white text-[20]">Sign up</Text>
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
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('(login)')} className="text-theme-green">
            Log in here
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
