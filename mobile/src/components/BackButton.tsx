import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

interface Props {
    showResolution ?: boolean;
    changeContent?: () => void;
}

export function BackButton({ showResolution, changeContent }: Props) {
    const { goBack } = useNavigation();
    
    return(
        <TouchableOpacity 
            activeOpacity={0.7} 
            // onPress={showResolution ? changeContent : goBack} 
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