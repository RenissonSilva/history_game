import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

interface Props {
    changeContent: () => void;
    showResolution: boolean;
}

export function MainButton({ changeContent, showResolution }: Props) {

    return (
        <TouchableOpacity
            className="w-[92%] h-[72] rounded-full justify-center items-center bg-blue self-center mb-4 flex-row"
            onPress={changeContent}
        >
            <Text className="text-gray-200 text-2xl">{!showResolution ? 'Ver resolução' : 'Próxima história'}</Text>
            {showResolution && <MaterialIcons 
                name="double-arrow" 
                size={36} 
                color="rgba(255, 255, 255, .85)"
                style={{ marginLeft: 10 }}
            />}
        </TouchableOpacity>
    )
}