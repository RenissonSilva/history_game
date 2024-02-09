import { AnimationObject } from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  title: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Book.json'),
    title: 'Objetivo do jogo',
    text: 'Apenas você sabe os detalhes da história, seus amigos te farão perguntas para descobrir o que aconteceu',
    textColor: '#B2B5FF',
    backgroundColor: '#00172f',
  },
  {
    id: 2,
    animation: require('../assets/animations/Friends.json'),
    title: 'Passo 1',
    text: 'Junte seus amigos e leia o enredo da história para eles',
    textColor: '#202733',
    backgroundColor: '#e5f2ff',
  },
  {
    id: 3,
    animation: require('../assets/animations/Oracle.json'),
    title: 'Passo 2',
    text: 'Apenas o Oráculo(quem lê a história) tem a resposta, que deve ser mantida em segredo',
    textColor: '#cccccc',
    backgroundColor: '#2f2f2f',
  },
  {
    id: 4,
    animation: require('../assets/animations/Friends2.json'),
    title: 'Passo 3',
    text: 'Seus amigos devem te fazer perguntas para descobrir o que aconteceu, responda apenas com Sim, Não ou Irrelevante',
    textColor: '#4C3E7A',
    backgroundColor: '#9d7fff',
  },
  {
    id: 5,
    animation: require('../assets/animations/Reading.json'),
    title: 'Passo 4',
    text: 'Quando conseguirem descobrir a idéia geral da história, o oráculo revelará todos os detalhes com a resolução',
    textColor: '#002A2A',
    backgroundColor: '#ffa79d',
  },
];

export default data;