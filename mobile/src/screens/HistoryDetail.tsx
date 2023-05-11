import { useState } from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native"

import { Loading } from "../components/Loading";
import { BackButton } from "../components/BackButton";

interface Params {
    data: {
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

            <Text>{data.description}</Text>
        </View>
    )
}