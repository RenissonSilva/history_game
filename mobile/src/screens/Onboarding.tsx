import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Lottie1.json'),
    text: 'Apenas você sabe os detalhes da história, seus amigos te farão perguntas para descobrir o que aconteceu',
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce',
  },
  {
    id: 2,
    animation: require('../assets//animations/Lottie2.json'),
    text: 'Junte seus amigos e escolha uma história',
    textColor: '#1e2169',
    backgroundColor: '#bae4fd',
  },
  {
    id: 3,
    animation: require('../assets//animations/Lottie3.json'),
    text: 'Leia o enigma para seus amigos e mostre a imagem',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
  {
    id: 4,
    animation: require('../assets//animations/Lottie3.json'),
    text: 'Seus amigos devem te fazer perguntas para descobrir o que aconteceu, responda apenas com Sim, Não ou Irrelevante',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
  {
    id: 5,
    animation: require('../assets//animations/Lottie3.json'),
    text: 'Quando conseguirem descobrir o que aconteceu você conta a resolução e mostra a imagem final',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default data;