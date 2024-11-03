import axios from 'axios';
import { API_CONFIG } from '../configs';
axios.defaults.baseURL = API_CONFIG.URL;

export const getRooms = async () => {
    const res = await axios.get<Room[]>(`/room`);
    return res.data;
};

export const getRoom = async (socketId: string) => {
    const res = await axios.get<Room>(`/room/${socketId}`);
    return res.data;
};
