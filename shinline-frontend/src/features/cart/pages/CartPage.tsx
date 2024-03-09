import { useEffect } from 'react';
import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import PageTitle from '../../../ui/PageTitle.js';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import Cart from '../components/Cart.tsx';

function CartPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/cart', name: 'Cart' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title={'Cart'} />
      <Cart />
    </>
  );
}

export default CartPage;
