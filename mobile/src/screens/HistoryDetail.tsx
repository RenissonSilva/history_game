import React, { useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native"
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

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

                <TouchableOpacity
                    className="bg-blue/80 w-14 h-14 rounded-full justify-center items-center m-5 absolute z-50 mt-14 top-0 right-0"
                    onPress={() => navigate('showImage', { imagePath }) } 
                >
                    <MaterialIcons 
                        name="open-in-full" 
                        size={24} 
                        color="rgba(255, 255, 255, .85)"
                    />
                </TouchableOpacity>
                <View className={clsx("h-80 rounded-b-3xl bg-blue")}>
                    <TouchableOpacity onPress={() => navigate('showImage', { imagePath }) } >
                        <ImageBackground
                            className="rounded-b-3xl w-full h-80 overflow-hidden"
                            source={ imagePath }
                        />
                    </TouchableOpacity>
                </View>

                {!showResolution && <Text className={clsx("text-4xl mt-8 mx-8 font-imfell text-blue")}>{data.title}</Text>}

                <ScrollView 
                    className={clsx("mx-8", {
                    ["mt-8"] : showResolution,
                    ["mt-6"] : !showResolution,
                    })} 
                    showsVerticalScrollIndicator={false} 
                    fadingEdgeLength={200}
                    ref={scrollRef}
                >
                    <Text className="text-white text-xl mb-32 font-museo400 tracking-widest">
                        {!showResolution ? data.description : data.resolution}
                    </Text>
                </ScrollView>

                <MainButton changeContent={changeContent} showResolution={showResolution} colors={colors}/>
        </View>
    )
}
