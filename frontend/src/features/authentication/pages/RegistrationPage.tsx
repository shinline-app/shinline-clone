import { useEffect } from 'react';
import BreadCrumb from '../../../ui/BreadCrumb.js';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import SignUpForm from '../components/SignUpForm.tsx';
import UpdatePasswordForm from '../components/UpdatePasswordForm.tsx';
import PageTitle from '../../../ui/PageTitle.tsx';

export default function RegistrationPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/auth', name: 'Registration' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title="Registration / Password recovery" />
      <SignUpForm />
      {/* <UpdatePasswordForm/> */}
    </>
  );
}
