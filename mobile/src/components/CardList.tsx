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
}

export function CardList({ data }: Props) {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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