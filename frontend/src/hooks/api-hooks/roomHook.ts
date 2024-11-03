import { useQuery } from '@tanstack/react-query';
import { getRoom, getRooms } from '@/api/roomApi';

export const useGetRoomsQuery = () => {
    return useQuery<Room[]>({
        queryKey: ['rooms'],
        queryFn: getRooms,
    });
};

export const useGetRoomQuery = (socketId: string) => {
    return useQuery<Room>({
        queryKey: ['room', socketId],
        queryFn: () => getRoom(socketId),
        enabled: !!socketId,
    });
};
