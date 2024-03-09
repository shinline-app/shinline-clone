import { useEffect } from 'react';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext';
import BreadCrumb from '../../../ui/BreadCrumb';
import PageTitle from '../../../ui/PageTitle';
import TireMarkBackLink from '../components/TireMarkBackLink';
import TireMarkDetailSection from '../components/TireMarkDetailSection';
import TireMarkDetailSeasons from '../components/TireMarkDetailSeasons';

function TireMarkDetailPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/trademarks', name: 'Trade marks' },
          { path: '/trademarks/bmw', name: 'Catalog shine for BMW' },
          {
            path: '',
            name: 'Catalog shine for BMW 1 (E81-E88) Coupe Restyle 2008-2013 Model 180d',
          },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title="Tires for BMW 1 (E81-E88) Coupe Restyle 2008-2013" />

      <div className="mb-4 flex items-center justify-center border border-[#E2E9F2] px-6 py-5 sm:justify-between sm:rounded">
        <TireMarkBackLink />
        <TireMarkDetailSection />
      </div>

      <TireMarkDetailSeasons />
    </>
  );
}

export default TireMarkDetailPage;
