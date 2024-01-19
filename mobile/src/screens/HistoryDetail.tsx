import { useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";

import { BackButton } from "../components/BackButton";
import { MainButton } from "../components/MainButton";
import Images from '../Images';

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
        if(showResolution) {
            // navigate('detail', { data, colors })
        }
    }
    const scrollRef = useRef();

    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: false,
        });
    }

    const imagePath = !showResolution ? Images[data.coverImage] : Images[data.resolutionImage];

    return (
        <View className="flex-1 bg-black pt-12">
                <BackButton 
                    showResolution={showResolution}
                    changeContent={changeContent}
                />
                <View className={clsx("h-96 rounded-b-3xl", {
                    ["bg-blue"] : colors.blue || colors.red,
                    ["bg-purple"] : colors.green || colors.purple,
                })}>
                    <TouchableOpacity onPress={() => navigate('showImage', { imagePath }) } >
                        <ImageBackground
                            className="rounded-b-3xl w-full h-96 overflow-hidden"
                            source={ imagePath }
                        />
                    </TouchableOpacity>
                </View>

                <Text className={clsx("text-[40px] mt-8 mx-8 font-imfell ", {
                ["hidden"] : showResolution,
                ["text-blue"] : colors.blue || colors.red,
                ["text-purple"] : colors.purple || colors.green,
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
                    <Text className="text-white text-2xl mb-32 font-museo400 tracking-widest">{!showResolution ? data.description : data.resolution}</Text>
                </ScrollView>

                <MainButton changeContent={changeContent} showResolution={showResolution} colors={colors}/>
        </View>
    )
}
