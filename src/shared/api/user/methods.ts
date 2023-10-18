import axios from 'axios';
import { RawUser } from 'shared/api'

export const sendFeedback = async (email: string) => {
    console.error('Not Implemented', email);
};

export const login = async (
    email: string,
    password: string,
): Promise<{ status: number, data: object }> => {
    let res;
    try {
        res = await axios.get(
            process.env.EXPO_PUBLIC_API_URL +
            'elepha-users' +
            `?filters[email][$eq]=${email}&filters[password][$eq]=${password}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );

        if (res.status == 200 && res.data.data.length === 1) {
            const data: RawUser = res.data.data[0].attributes;
            data.id = res.data.data[0].id;
            return {status: 200, data: data};
        }
        return {status: 400, data: {}}
    } catch (e) {
        // console.error(e)
        return {status: 400, data: {}}
    }
};

export const register = async (
    phoneNumber: string,
    email: string,
    password: string,
    firstName: string,
    secondName: string,
): Promise<number> => {
    let res;
    try {
        res = await axios.post(
            process.env.EXPO_PUBLIC_API_URL + 'elepha-users/',
            {
                data: {
                    fist_name: firstName,
                    second_name: secondName,
                    email: email,
                    password: password,
                    phone_number: phoneNumber,
                },
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );
        return res.status;
    } catch (e) {
        // console.error(e)
        return res?.status || 500;
    }
};

export const updateUser = async (data: object, id: string): Promise<number> => {
    let res;
    try {
        res = await axios.put(
            process.env.EXPO_PUBLIC_API_URL + 'elepha-users' + `/${id}`,
            {
                data: data,
            },
            {
                headers: {
                    'Authorization': 'Bearer ' + process.env.EXPO_PUBLIC_API_TOKEN
                }
            }
        );
        return res.status;
    } catch (e) {
        // console.error(e)
        return res?.status || 500;
    }
};
