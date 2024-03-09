import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './ui/Error.tsx';
import AppLayout from './ui/AppLayout';
import CartPage from './features/cart/pages/CartPage.tsx';
import CatalogPage from './features/catalog/pages/CatalogPage.tsx';
import CatalogProductPage, {
  loader as catalogLoader,
} from './features/catalog/pages/CatalogProductPage.tsx';
import SelectionByCarSize from './pages/SelectionByCarSize';
import RegistrationPage from './features/authentication/pages/RegistrationPage.tsx';
import AccountPage from './features/authentication/pages/AccountPage.tsx';
import NewsPage from './features/news/pages/NewsPage.tsx';
import NewsPageDetail from './pages/NewsPageDetail';
import HomePage from './features/home/pages/HomePage.tsx';
import { BreadCrumbProvider } from './context/BreadcrumbContext.tsx';
import OrderPage from './features/order/pages/OrderPage.tsx';
import UserOrders from './features/account/components/UserOrders.tsx';
import UserSubscription from './features/account/components/UserSubscription.tsx';
import UserDetails from './features/account/components/UserDetails.tsx';
import UserWishlist from './features/account/components/UserWishlist.tsx';
import ProductDetailPage from './features/product/pages/ProductDetailPage.tsx';
import BrandPage from './features/brand/pages/BrandPage.tsx';
import BrandModelsPage from './features/brand/pages/BrandModelsPage.tsx';
import BrandDetailPage from './features/brand/pages/BrandDetailPage.tsx';
import TireMarkPage from './features/tiremark/pages/TireMarkPage.tsx';
import TireMarkModelPage from './features/tiremark/pages/TireMarkModelPage.tsx';
import TireMarkDetailPage from './features/tiremark/pages/TireMarkDetailPage.tsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/product',
        element: <ProductDetailPage />,
      },
      {
        path: '/catalog',
        element: <CatalogPage />,
      },
      {
        path: '/catalog/:catalogName',
        element: <CatalogProductPage />,
        loader: catalogLoader,
        errorElement: <Error to="/catalog" text="Go to catalog" />,
      },
      {
        path: '/product/:id',
        element: <ProductDetailPage />,
      },
      {
        path: '/assortiments',
        element: <SelectionByCarSize />,
      },
      {
        path: '/brands',
        element: <BrandPage />,
      },
      {
        path: '/brands/:brandName',
        element: <BrandModelsPage />,
      },
      {
        path: '/brands/:brandName/:brandModelName',
        element: <BrandDetailPage />,
      },
      {
        path: '/trademarks',
        element: <TireMarkPage />,
      },
      {
        path: '/trademarks/:markName',
        element: <TireMarkModelPage />,
      },
      {
        path: '/trademarks/:markName/:markModelName',
        element: <TireMarkDetailPage />,
      },
      {
        path: '/order',
        element: <OrderPage />,
      },
      {
        path: '/auth',
        element: <RegistrationPage />,
      },
      {
        path: '/profile',
        element: <AccountPage />,
        children: [
          {
            path: '',
            element: <UserDetails />,
          },
          {
            path: '/profile/orders',
            element: <UserOrders />,
          },
          {
            path: '/profile/wishlist',
            element: <UserWishlist />,
          },
        ],
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/news/:newId',
        element: <NewsPageDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <BreadCrumbProvider>
        <RouterProvider router={router} />
      </BreadCrumbProvider>
    </>
  );
}

export default App;
