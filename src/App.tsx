import { Link, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.scss';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container-fluid">
        <header>
          <Link to="/" className="clean-link">
            Country Info
          </Link>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
