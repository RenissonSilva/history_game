import { TouchableOpacity, Text } from "react-native";

export function MainButton() {
    return (
        <TouchableOpacity className="w-[92%] h-[72] rounded-full justify-center items-center bg-blue self-center mb-4">
            <Text className="text-gray-200 text-2xl">Ver resolução</Text>
        </TouchableOpacity>
    )
}