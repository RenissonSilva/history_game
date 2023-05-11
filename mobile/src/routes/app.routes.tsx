import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home'
import { HistoryDetail } from "../screens/HistoryDetail";

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home}/>
            <Screen name="detail" component={HistoryDetail}/>
            {/* <Screen name="habit" component={Habit}/> */}
        </Navigator>
    )
}