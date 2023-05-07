import { Alert, ScrollView } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { Chip } from "../components/Chip";
import { Header } from "../components/Header"
import { Loading } from "../components/Loading";
import { api } from "../lib/axios"

type CategoryProps = Array<{
    name: string;
}>

export function Home() {
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState(0);
    const [categories, setCategories] = useState<CategoryProps>([]);

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

    useFocusEffect(useCallback(() => {
        fetchCategories();
    }, []));

    if(loading) {
        return (
            <Loading />
        )
    }

    return (
        <SafeAreaView className="flex-1 bg-black p-6">
            <Header />

            <ScrollView horizontal={true} className="mt-8" showsHorizontalScrollIndicator={false}>
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

        </SafeAreaView>
    )
}