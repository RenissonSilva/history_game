import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font'


import { Loading } from './src/components/Loading';

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    RalewayRegular: require('./assets/fonts/Raleway/Raleway-Regular.ttf'),
    RalewaySemiBold: require('./assets/fonts/Raleway/Raleway-SemiBold.ttf'),
    RalewayBold: require('./assets/fonts/Raleway/Raleway-Bold.ttf'),
    MuseoModernoRegular: require('./assets/fonts/MuseoModerno/MuseoModerno-Regular.ttf'),
    MuseoModernoSemiBold: require('./assets/fonts/MuseoModerno/MuseoModerno-SemiBold.ttf'),
    MuseoModernoBold: require('./assets/fonts/MuseoModerno/MuseoModerno-Bold.ttf'),
    IMFellEnglishSC: require('./assets/fonts/IM_Fell_English_SC/IMFellEnglishSC-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </>
  );
}

