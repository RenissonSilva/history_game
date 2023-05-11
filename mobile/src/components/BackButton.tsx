import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export function BackButton() {
    const { goBack } = useNavigation();
    
    return(
        <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={goBack} 
            className="bg-black/50 w-16 h-16 rounded-full justify-center items-center pl-2 m-5 absolute"
        >
            <MaterialIcons 
                name="arrow-back-ios" 
                size={24} 
                color="rgba(255, 255, 255, .85)"
            />
        </TouchableOpacity>
    )
}