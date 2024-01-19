import { ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from "@react-navigation/native"
import { BackButton } from "../components/BackButton";

export interface ShowImageParams {
    imagePath: string;
}

export function ShowImage() {
    const route = useRoute();
    const { imagePath } = route.params as ShowImageParams;

    return (
        <SafeAreaView className="flex-1 bg-black px-3">
            <BackButton 
                showResolution={true}
            />
            <ImageBackground 
                source={imagePath} 
                imageStyle={{ resizeMode: 'contain' }}
                className="flex-1"
            />

        </SafeAreaView>
    )
}