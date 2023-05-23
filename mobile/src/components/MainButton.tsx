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
            className={clsx("w-[92%] h-[72] rounded-full justify-center items-center self-center mb-4 flex-row", {
                ["bg-blue"] : colors.blue,
                ["bg-green"] : colors.green,
                ["bg-purple"] : colors.purple,
                ["bg-red"] : colors.red,
            })}
            onPress={changeContent}
        >
            <Text className="text-gray-200 text-2xl">{!showResolution ? 'Ver resolução' : 'Voltar para o enigma'}</Text>
            {/* {showResolution && <MaterialIcons 
                name="double-arrow" 
                size={36} 
                color="rgba(255, 255, 255, .85)"
                style={{ marginLeft: 10 }}
            />} */}
            {!showResolution && <MaterialIcons 
                name="visibility" 
                size={36} 
                color="rgba(255, 255, 255, .85)"
                style={{ marginLeft: 10 }}
            />}
        </TouchableOpacity>
    )
}