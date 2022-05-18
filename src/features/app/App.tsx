import './App.less';
import { RouteObject, useRoutes } from 'react-router-dom';
import Login from '@feat/login';
import { AuthProvider, RequireAuth } from '@feat/auth';
import AppLayout from './AppLayout';

const routesConfig: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'index',
        element: <PublicPage />,
      },
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
