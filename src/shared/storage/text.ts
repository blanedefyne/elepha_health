import AsyncStorage from "@react-native-async-storage/async-storage";

const pulseInstruction = 'pulseInstruction';

export const getPulseInstruction = async (): Promise<string> => {
  const instruction = await AsyncStorage.getItem(pulseInstruction);
  return instruction || '';
}

export const setPulseInstruction = async (instruction: string): Promise<void> => {
  await AsyncStorage.setItem(pulseInstruction, instruction);
}