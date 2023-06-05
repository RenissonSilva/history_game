import { useState } from "react";
import { ScrollView, View, RefreshControl } from 'react-native'
import { Snackbar } from 'react-native-paper';

import { CardStory } from "./CardStory";
import { Toast } from "./Toast";

export interface StoryCardProps {
    id: string;
    title: string;
    description: string;
    coverImage: string;
}

interface Props {
    data: StoryCardProps[];
    fetchStories: () => void;
    loadedEverything: boolean;
}

export function CardList({ data, loadedEverything}: Props) {
    const [refreshing, setRefreshing] = useState(false);
    const [itemsToRender, setItemsToRender] = useState(999);
    const [showToast, setShowToast] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);

        if(itemsToRender < data.length) {
            setTimeout(function() {
                setItemsToRender(itemsToRender + 10)
                setRefreshing(false);
            }, 1000);
        } else {
            setTimeout(function() {
                setShowToast(true)
                setRefreshing(false);
            }, 1000);
        }
    };

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
                // const scrollPosition = e.nativeEvent.contentOffset.y;
                // const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
                // const contentHeight = e.nativeEvent.contentSize.height;
                // const isScrolledToBottom = scrollViewHeight + scrollPosition;

                // if(isScrolledToBottom >= (contentHeight-50) && !loadedEverything){
                //     onRefresh();
                // }

            }}
            // refreshControl={
            //     <RefreshControl
            //       refreshing={refreshing}
            //     />
            // }
        >
                <View className="flex-row flex-1">
                    {/* Left Column Cards */}
                    <View className="flex-1">
                        {data.filter((item, index) => index % 2 === 0 && index < itemsToRender).map((story, index) => (
                            <CardStory data={story} index={index} column={0} key={story.id} />
                        ))}
                    </View>

                    {/* Right Column Cards */}
                    <View className="flex-1">
                        {data.filter((item, index) => index % 2 === 1 && index < itemsToRender).map((story, index) => (
                            <CardStory data={story} index={index} column={1} key={story.id} />
                        ))}
                    </View>
                </View>

                {showToast && 
                    <Toast 
                        visible={showToast} 
                        onDismissSnackBar={() => setShowToast(false)}
                        title="Todas as histórias foram carregadas"
                    />
                }
                
            </ScrollView>
    )
}