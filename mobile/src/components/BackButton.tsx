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
            // onPress={showResolution ? changeContent : goBack} 
            onPress={goBack} 
            className="bg-black/90 w-16 h-16 rounded-full justify-center items-center pl-2 m-5 absolute z-50 mt-14"
        >
            <MaterialIcons 
                name="arrow-back-ios" 
                size={24} 
                color="rgba(255, 255, 255, .85)"
            />
        </TouchableOpacity>
    )
}