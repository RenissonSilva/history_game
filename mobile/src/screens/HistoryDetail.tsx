import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native"

import { Loading } from "../components/Loading";
import { BackButton } from "../components/BackButton";
import { MainButton } from "../components/MainButton";
import { LinearGradient } from "expo-linear-gradient";

interface Params {
    data: {
        title: string;
        resolution: string;
        description: string;
        coverImage: string;
        resolutionImage: string;
    };
}

export function HistoryDetail() {
    const route = useRoute();
    const { data } = route.params as Params;
    console.log('data', data.coverImage)
    const [loading, setLoading] = useState(false);

    if(loading) {
        return (
            <Loading />
        )
    }

    return (
        <View className="flex-1 bg-black pt-12">
                <View className="bg-blue h-80 rounded-b-3xl p-4">
                    <BackButton />

                    <Image
                        className="w-64 h-64 self-center relative mt-4"
                        source={{uri: data.coverImage}}
                    />
                </View>

                <Text className="text-blue text-3xl my-6 mx-4 font-extrabold">{data.title}</Text>

                <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,0.9)']}>
                        <Text className="text-white text-2xl z-1">
                            {data.description}
                        </Text>
                    </LinearGradient>
                </ScrollView>

                <MainButton />
        </View>
    )
}