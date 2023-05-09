import { useCallback, useState } from "react";
import { Alert, ScrollView, View, Text, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { api } from "../lib/axios"
import { Chip } from "../components/Chip";
import { Header } from "../components/Header"
import { Loading } from "../components/Loading";
import clsx from "clsx";
import { CardList } from "../components/CardList";

type CategoryProps = Array<{
    name: string;
}>

type StoryProps = Array<{
    id: string;
    title: string;
    description: string;
}>

export function Home() {
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(0);
    const [categories, setCategories] = useState<CategoryProps>([]);
    const [stories, setStories] = useState<StoryProps>([]);

    async function fetchCategories() {
        try {
            setLoading(true);
            const response = await api.get('/category');

            console.log('response.data', response.data)
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
            const response = await api.get('/story');

            console.log('response.data', response.data)
            setStories(response.data)
        } catch (error) {
            console.log(error)
            Alert.alert('Ops', 'Não foi possível carregar')
        } finally {
            setLoading(false)
        }
    }
    console.log('stories', stories)
    useFocusEffect(useCallback(() => {
        fetchCategories();
        fetchStories();
    }, []));

    if(loading) {
        return (
            <Loading />
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-black p-3">
            <Header />

            <ScrollView horizontal={true} className="mt-8 h-20" showsHorizontalScrollIndicator={false}>
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
            </ScrollView>

            <CardList data={stories} />

        </SafeAreaView>
    )
}