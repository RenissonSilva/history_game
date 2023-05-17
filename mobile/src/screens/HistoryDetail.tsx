import { useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, Image, ScrollView } from "react-native";

import { BackButton } from "../components/BackButton";
import { MainButton } from "../components/MainButton";

import clsx from "clsx";

export interface HistoryParams {
    data: {
        title: string;
        resolution: string;
        description: string;
        coverImage: string;
        resolutionImage: string;
    };
    colors: {
        blue: boolean;
        green: boolean;
        purple: boolean;
        red: boolean;
    };
}

export function HistoryDetail() {
    const route = useRoute();
    const { data, colors } = route.params as HistoryParams;
    const [showResolution, setShowResolution] = useState(false);
    const { navigate } = useNavigation();

    async function changeContent() {
        onPressTouch();
        setShowResolution(!showResolution)
        // if(showResolution) {
        //     navigate('detail', { data, colors })
        //     console.log('showResolution', showResolution ? 'TROCAR' : 'NÃO TROCAR')
        // }
    }
    const scrollRef = useRef();

    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: false,
        });
    }

    return (
        <View className="flex-1 bg-black pt-12">
                <View className={clsx("h-80 rounded-b-3xl p-4", {
                    ["bg-blue"] : colors.blue,
                    ["bg-green"] : colors.green,
                    ["bg-purple"] : colors.purple,
                    ["bg-red"] : colors.red,
                })}>
                    <BackButton />

                    <Image
                        className="w-64 h-64 self-center relative mt-4"
                        source={{uri: !showResolution ? data.coverImage : data.resolutionImage}}
                    />
                </View>

                <Text className={clsx("text-3xl mt-8 mx-8 font-extrabold", {
                ["hidden"] : showResolution,
                ["text-blue"] : colors.blue,
                ["text-green"] : colors.green,
                ["text-purple"] : colors.purple,
                ["text-red"] : colors.red,
                })}>{!showResolution ? data.title : ''}</Text>

                <ScrollView 
                    className={clsx("mx-8", {
                    ["mt-8"] : showResolution,
                    ["mt-6"] : !showResolution,
                    })} 
                    showsVerticalScrollIndicator={false} 
                    fadingEdgeLength={200}
                    ref={scrollRef}
                >
                    <Text className="text-white text-2xl mb-32">{!showResolution ? data.description : data.resolution}</Text>
                </ScrollView>

                <MainButton changeContent={changeContent} showResolution={showResolution} colors={colors}/>
        </View>
    )
}
