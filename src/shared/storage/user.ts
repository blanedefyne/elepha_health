import AsyncStorage from "@react-native-async-storage/async-storage";

export interface StorageUser {
    second_name: string,
    email: string,
    phone_number: string,
    createdA: string,
    updatedAt: string,
    publishedAt: string,
    password: string,
    first_name: string,
    id: string,
}

export const getUser = async (
    setFirstName: (text: string) => void = null,
    setSecondName: (text: string) => void = null,
    setEmail: (text: string) => void = null,
    setPhoneNumber: (text: string) => void = null,
    setId: (text: string) => void = null,
): Promise<StorageUser> => {
    const rawUser = await AsyncStorage.getItem('currentUser');
    const user: StorageUser = JSON.parse(rawUser || '');
    if (
        setFirstName !== null
        && setSecondName !== null
        && setEmail !== null
        && setPhoneNumber !== null
        && setId !== null
    ) {
        setFirstName(user.first_name);
        setSecondName(user.second_name);
        setEmail(user.email);
        setPhoneNumber(user.phone_number);
        setId(user.id);
    }

    return user;
}

export const setUser = async (user: StorageUser): Promise<void> => {
    const stringUser = JSON.stringify(user);
    await AsyncStorage.setItem('currentUser', stringUser);
}
