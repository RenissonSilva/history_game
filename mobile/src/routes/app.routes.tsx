import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home'
import { HistoryDetail } from "../screens/HistoryDetail";
import { ShowImage } from "../screens/ShowImage";
import OnboardingScreen from "../screens/OnboardingScreen";
import { useEffect, useState } from "react";
import { storeData, getItemFor } from "../../helpers/storageHelper";
import { Loading } from "../components/Loading";

export function AppRoutes() {
    const [appHasLaunched, setAppHasLaunched] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const appHasLaunched = await getItemFor('appHasLaunched')
    
            if(appHasLaunched){
                setAppHasLaunched(true);
            } else {
                await storeData('appHasLaunched', 'true')
            }
            setIsLoaded(true);
        }
    
        getData().catch((error) => {console.log(error)});
    }, [])

    if(!isLoaded) {
        return (
          <Loading />
        )
      }

    return(
        <Navigator screenOptions={{ headerShown: false }}>
            {!appHasLaunched && isLoaded && <Screen name="onboardingScreen" component={OnboardingScreen}/>}
            <Screen name="home" component={Home}/>
            <Screen name="detail" component={HistoryDetail}/>
            <Screen name="showImage" component={ShowImage}/>
        </Navigator>
    )
}