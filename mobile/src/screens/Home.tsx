import { View, Text } from 'react-native'
import { Header } from "../components/Header"
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home() {
    return (
        <SafeAreaView className="flex-1 bg-black p-6">
            <Header />

        </SafeAreaView>
    )
}