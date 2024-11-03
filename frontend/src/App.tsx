import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainMenu from '@/pages/MainMenu';
import Questions from '@/pages/admin/Questions';
import '@/index.css';
import MainGame from '@/pages/MainGame';
import Root from '@/pages/Root';
import JoinRoom from '@/pages/player/JoinRoom';
import { SocketProvider } from '@/contexts/SocketContext';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30000,
        },
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <MainMenu />,
            },
            {
                path: 'join',
                element: <JoinRoom />,
            },
            {
                path: 'question',
                element: <Questions />,
            },
            {
                path: 'game/question/:questionId',
                element: (
                    <SocketProvider>
                        <MainGame />
                    </SocketProvider>
                ),
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
);
