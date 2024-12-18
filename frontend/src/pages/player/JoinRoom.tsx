import { useGetRoomsQuery } from '@/hooks/api-hooks/roomHook';
import Loader from '@/components/root/Loader';
import PrimaryButton from '@/components/root/PrimaryButton';

import { useNavigate } from 'react-router-dom';

const JoinRoom = () => {
    const { data: rooms, isLoading } = useGetRoomsQuery();
    const navigate = useNavigate();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col gap-2 items-center w-full p-8 max-h-screen overflow-y-scroll">
            {rooms &&
                rooms.map((room: Room) => (
                    <PrimaryButton
                        key={room.uuid}
                        value={room.uuid.substring(0, 6)}
                        onClick={() =>
                            navigate(
                                `/game/question/${room.question}?roomName=${room.roomName}&socketId=${room.socketId}`,
                            )
                        }
                    />
                ))}
        </div>
    );
};

export default JoinRoom;
