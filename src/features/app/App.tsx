import './App.less';
import { RouteObject, useRoutes } from 'react-router-dom';
import Login from '@feat/login';
import { AuthProvider, RequireAuth } from '@feat/auth';
import AppLayout from './AppLayout';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <PublicPage /> },
      {
        path: '/protected',
        element: (
          <RequireAuth>
            <ProtectedPage />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

function App() {
  let elements = useRoutes(routesConfig);

  return (
    <AuthProvider>
      <>{elements}</>
    </AuthProvider>
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

export default App;
