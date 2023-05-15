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

                <ScrollView className="mx-4" showsVerticalScrollIndicator={false} fadingEdgeLength={200}>
                    <Text className="text-white text-2xl mb-32">{data.description}</Text>
                </ScrollView>

                <MainButton />
        </View>
    )
}

const styles = {
    descriptionContainer: {
      flex: 1,
      overflow: 'hidden',
    },
    descriptionHeading: {
      marginTop: 20,
      fontSize: 21,
      color: '#212121',
    },
    descriptionText: {
      fontSize: 15,
      color: '#6f6f6f',
    },
    linearGradientContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  }

