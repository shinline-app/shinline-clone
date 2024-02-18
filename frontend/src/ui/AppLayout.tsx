import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Footer from '../components/footer/Footer.tsx';
import Loader from './Loader.tsx';
import Header from '../components/header/Header.tsx';
import useDelayedVisibility from '../hooks/useDelayedVisibility.ts';

function AppLayout() {
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === 'loading';
  const loading = useDelayedVisibility(isLoading);

  return (
    <div
      className={`grid h-screen grid-rows-[auto_1fr_auto] ${
        location.pathname === '/' ? 'bg-[#F8FAFD]' : 'bg-white'
      }`}
    >
      {!loading ? <Loader /> : null}
      <Header />
      <main className="mx-auto w-full max-w-7xl px-2 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
