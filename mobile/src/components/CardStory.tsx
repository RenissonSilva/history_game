import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import clsx from "clsx";

interface CardStoryProps extends TouchableOpacityProps {
    data:{
        id: string; 
        title: string; 
        description: string; 
    }
    index: number; 
    column: number;
}
  
export function CardStory({ data, index, column, ...rest }: CardStoryProps) {

    return (
        <TouchableOpacity className={
            clsx("rounded-lg w-50 m-1", {
                ["bg-blue h-60"] : index % 2 === 1 && column === 0,
                ["bg-green h-60"] : index % 2 === 0 && column === 0,
                ["bg-purple h-60"] : index % 2 === 1 && column === 1,
                ["bg-red h-60"] : index % 2 === 0 && column === 1,
                ["bg-red h-80"] : index === 0 && column === 1,
            })}
            key={data.id}
            {...rest}
        >
            <Text>
                {data.title}
            </Text>

            <Text>
                {data.description}
            </Text>
        </TouchableOpacity>
    )
}