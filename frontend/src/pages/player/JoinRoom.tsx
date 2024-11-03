import { useGetRoomsQuery } from '@/hooks/api-hooks/roomHook';
import Loader from '@/components/root/Loader';
import { useNavigate } from 'react-router-dom';

const JoinRoom = () => {
    const { data: rooms, isLoading } = useGetRoomsQuery();
    const navigate = useNavigate();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col gap-2">
            {rooms &&
                rooms.map((room: Room) => (
                    <span
                        key={room.uuid}
                        className="bg-white text-red-600 w-fit"
                        onClick={() =>
                            navigate(
                                `/game/question/${room.question}?roomName=${room.roomName}&socketId=${room.socketId}`,
                            )
                        }
                    >
                        {room.roomName}
                    </span>
                ))}
        </div>
    );
};

export default JoinRoom;
