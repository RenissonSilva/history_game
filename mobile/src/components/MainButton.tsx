import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

import clsx from "clsx";

interface Props {
    changeContent: () => void;
    showResolution: boolean;
    colors: {
        blue: boolean;
        green: boolean;
        purple: boolean;
        red: boolean;
    };
}

export function MainButton({ changeContent, showResolution, colors }: Props) {

    return (
        <TouchableOpacity
            className={clsx("w-[92%] h-14 rounded-full justify-center items-center self-center mb-4 flex-row bg-blue")}
            onPress={changeContent}
        >
            {showResolution && <MaterialIcons 
                name="navigate-before" 
                size={40} 
                color="rgba(255, 255, 255, .85)"
            />}
                <Text className={clsx("text-gray-200 text-xl font-museo400 mt-1", {
                    ["mr-6"] : showResolution,
                    ["ml-6"] : !showResolution,
                })}>
                    {!showResolution ? 'Ver resolução' : 'Voltar para o enigma'}
                </Text>
            {!showResolution && <MaterialIcons 
                name="navigate-next" 
                size={40} 
                color="rgba(255, 255, 255, .85)"
            />}
        </TouchableOpacity>
    )
}