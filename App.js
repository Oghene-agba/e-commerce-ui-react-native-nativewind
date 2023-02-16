import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Switch } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductsList from './components/ProductsList';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 py-10 items-center justify-center bg-gray-200 dark:bg-black">
      
      <View className="flex-row w-full gap-5">
        <Text className="text-2xl font-bold dark:text-white">Jumiaa - New collection</Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>

      <ProductsList/>

      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
