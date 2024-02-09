import { useCallback, useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardFlow } from 'react-native-onboard';

import { api } from "../lib/axios"
import { Chip } from "../components/Chip";
import { Header } from "../components/Header"
import { Loading } from "../components/Loading";
import { CardList } from "../components/CardList";
import RenderItem from "../components/RenderItem";
import data from "./Onboarding";
import Animated from "react-native-reanimated";
import OnboardingScreen from "./OnboardingScreen";

type CategoryProps = Array<{
    name: string;
}>

type StoryProps = Array<{
    id: string;
    title: string;
    description: string;
    coverImage: string;
}>

export function Home() {
    const [page, setPage] = useState<number>(1);
    const [loadedEverything, setLoadedEverything] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(0);
    const [categories, setCategories] = useState<CategoryProps>([]);
    const [stories, setStories] = useState<StoryProps>([]);

    async function fetchCategories() {
        try {
            setLoading(true);
            const response = await api.get('/category');

            setCategories(response.data)
        } catch (error) {
            console.log(error)
            Alert.alert('Ops', 'Não foi possível carregar')
        } finally {
            setLoading(false)
        }
    }

    async function fetchStories() {
        try {
            setLoading(true);
            const response = await api.get('/story', { params: { page }});
            if(response.data.stories.length > 0) {
                setStories([...stories, ...response.data.stories])
                setPage(page + 1)
            } else {
                setLoadedEverything(true)
            }
        } catch (error) {
            console.log(error)
            Alert.alert('Ops', 'Não foi possível carregar')
        } finally {
            setLoading(false)
        }
    }
    
    // useFocusEffect(useCallback(() => {
    //     fetchCategories();
    //     fetchStories();
    //     setLoadedEverything(false)
    // }, []));

    useEffect(() => {
        fetchCategories();
        fetchStories();
        setLoadedEverything(false)
    }, [])

    if(loading) {
        return (
            <Loading />
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-black px-3">
            <Header />

            {/* <ScrollView 
                horizontal={true} 
                className="mt-8 h-20" 
                showsHorizontalScrollIndicator={false}
            >
                {
                    categories.length > 0 && categories.map((category, i) => (
                        <Chip 
                            key={`${category.name}-${i}`}
                            name={category.name} 
                            activeCategory={activeCategory === i} 
                            setActiveCategory={setActiveCategory}
                            index={i}
                        />
                    ))
                }
            </ScrollView> */}

            <CardList
                data={stories} 
                fetchStories={fetchStories}
                loadedEverything={loadedEverything}
            />

        </SafeAreaView>
    )
}