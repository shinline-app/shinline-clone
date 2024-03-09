import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import PageTitle from '../../../ui/PageTitle';
import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext';
import ProfileMenu from '../../account/components/ProfileMenu.tsx';

function AccountPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/account', name: 'Account' },
        ]);
      });
  }, []);
  return (
    <>
      <BreadCrumb />
      <PageTitle title="Personal cabinet" />
      <div className="my-5 flex flex-col items-start md:flex-row">
        <div className="mb-5 w-full md:mb-0 md:basis-[35%]">
          <div className=" -mr-[1px] border border-[#E2E9F2]">
            <ProfileMenu />
          </div>
          <Link to={'/'} className="ml-5 mt-5 flex items-center">
            <ArrowLeftOnRectangleIcon className="w-6 text-red sm:w-8" />
            <p className="ml-2 text-sm font-medium uppercase text-red sm:text-base">
              Log out
            </p>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default AccountPage;
