import { ScrollView, View } from 'react-native'

import { CardStory } from "./CardStory";

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

export function CardList({ data, fetchStories, loadedEverything }: Props) {

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            onScroll={(e) => {
                let paddingToBottom = 10;
                paddingToBottom += e.nativeEvent.layoutMeasurement.height;
                if(!loadedEverything && (e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom)) {
                  fetchStories();
                }
            }}
        >
                <View className="flex-row flex-1">
                    {/* Left Column Cards */}
                    <View className="flex-1">
                        {data.filter((item, index) => index % 2 === 0).map((story, index) => (
                            <CardStory data={story} index={index} column={0} key={story.id} />
                        ))}
                    </View>

                    {/* Right Column Cards */}
                    <View className="flex-1">
                        {data.filter((item, index) => index % 2 === 1).map((story, index) => (
                            <CardStory data={story} index={index} column={1} key={story.id} />
                        ))}
                    </View>
                </View>
                
            </ScrollView>
    )
}