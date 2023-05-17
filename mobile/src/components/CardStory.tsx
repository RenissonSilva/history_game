import { LinearGradient } from "expo-linear-gradient"; 
import { useNavigation } from "@react-navigation/native"
import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

import clsx from "clsx";

interface CardStoryProps extends TouchableOpacityProps {
    data:{
        id: string; 
        title: string; 
        description: string; 
        coverImage: string;
    }
    index: number; 
    column: number;
}
  
export function CardStory({ data, index, column, ...rest }: CardStoryProps) {
    const { navigate } = useNavigation();
    const colors = {
        'blue': index % 2 === 1 && column === 0,
        'green' : index % 2 === 0 && column === 0,
        'purple': index % 2 === 1 && column === 1,
        'red': (index % 2 === 0 && column === 1) || (index === 0 && column === 1)
    }

    return (
        <TouchableOpacity className={
            clsx("rounded-lg w-50 m-1 justify-between", {
                ["bg-blue h-60"] : colors.blue,
                ["bg-green h-60"] : colors.green,
                ["bg-purple h-60"] : colors.purple,
                ["bg-red h-60"] : index % 2 === 0 && column === 1,
                ["bg-red h-80"] : index === 0 && column === 1,
            })}
            key={data.id}
            onPress={() => navigate('detail', { data, colors })}
            {...rest}
        >
            <ImageBackground
                resizeMode="contain"
                source={{ uri: data.coverImage }}
            >
                <LinearGradient colors={['rgba(13,13,13,.8)', 'transparent']} className="h-1/3 p-3 rounded-lg">
                    <Text className="font-extrabold text-white text-lg">
                        {data.title}
                    </Text>
                </LinearGradient>

                <View className="h-1/3"/>
            
                <LinearGradient colors={['transparent', 'rgba(13,13,13,.8)']} className="h-1/3 p-3 rounded-lg justify-end">
                    <Text className="text-white" numberOfLines={3}>
                        {data.description}
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}