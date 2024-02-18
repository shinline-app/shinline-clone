import { useEffect } from 'react';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import PageTitle from '../../../ui/PageTitle.tsx';
import CreateOrder from '../comonents/CreateOrder.tsx';

function OrderPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/order', name: 'Order' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title={'Placing on order'} />
      <CreateOrder />
    </>
  );
}

export default OrderPage;
