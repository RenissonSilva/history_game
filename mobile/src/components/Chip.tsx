import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'

interface Props extends TouchableOpacityProps {
    name: string;
    activeCategory: boolean;
    setActiveCategory: (value: number) => void;
    index: number;
}

export function Chip({name, activeCategory, setActiveCategory, index, ...rest}: Props) {
    console.log('...rest', rest)
    return (
        <TouchableOpacity 
            className={
                activeCategory
                ? 'bg-filter rounded-full h-12 mr-4 justify-center'
                : 'bg-filterDisabled rounded-full h-12 mr-4 justify-center'
            }
            activeOpacity={0.7}
            onPress={() => setActiveCategory(index)}
            {...rest}
        >
            <Text className={
                activeCategory
                ? 'text-white text-lg mx-10 font-raleway400'
                : 'text-textDisabled text-lg mx-10 font-raleway400'
            }>
                {name}
            </Text>
         </TouchableOpacity>   
    )
}