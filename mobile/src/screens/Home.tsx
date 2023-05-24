import { useCallback, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { api } from "../lib/axios"
import { Chip } from "../components/Chip";
import { Header } from "../components/Header"
import { Loading } from "../components/Loading";
import { CardList } from "../components/CardList";

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

            console.log('response.data', response.data)
            setStories(response.data.stories)
            setPage(page + 1)
        } catch (error) {
            console.log(error)
            Alert.alert('Ops', 'Não foi possível carregar')
        } finally {
            setLoading(false)
        }
    }
    
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
        <SafeAreaView className="flex-1 bg-black px-3">
            <Header />

            <ScrollView 
                horizontal={true} 
                className="mt-8 h-20" 
                showsHorizontalScrollIndicator={false}
                onScrollEndDrag={fetchStories}
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
            </ScrollView>

            <CardList data={stories}/>

        </SafeAreaView>
    )
}