import { TouchableOpacity, Text } from "react-native";

export function MainButton() {
    return (
        <TouchableOpacity className="w-[95%] h-20 rounded-full justify-center items-center bg-blue self-center">
            <Text className="text-gray-200 text-2xl">Ver resolução</Text>
        </TouchableOpacity>
    )
}