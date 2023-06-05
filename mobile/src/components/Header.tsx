import { View } from "react-native";
import { DotsThreeVertical } from 'phosphor-react-native';


import Logo from '../assets/logo.svg'

export function Header() {
    return (
        <View className="w-full flex-row items-center justify-between mb-4">
            <Logo />

            {/* <DotsThreeVertical color="#fff" size={32} /> */}
        </View>
    )
}