import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home'
import { HistoryDetail } from "../screens/HistoryDetail";
import { ShowImage } from "../screens/ShowImage";
import OnboardingScreen from "../screens/OnboardingScreen";

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="onboardingScreen" component={OnboardingScreen}/>
            <Screen name="home" component={Home}/>
            <Screen name="detail" component={HistoryDetail}/>
            <Screen name="showImage" component={ShowImage}/>
        </Navigator>
    )
}