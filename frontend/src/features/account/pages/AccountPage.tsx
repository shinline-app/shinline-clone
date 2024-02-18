import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from '../../../ui/PageTitle.tsx';
import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import ProfileMenu from '../components/ProfileMenu.tsx';

function AccountPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    setBreadcrumb([
      { path: '/', name: 'Home' },
      { path: '/account', name: 'Personal cabinet' },
    ]);
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title="Personal cabinet" />
      <div className="my-5 flex flex-col items-start lg:flex-row">
        <ProfileMenu />
        <Outlet />
      </div>
    </>
  );
}

export default AccountPage;
