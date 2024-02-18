import { useEffect } from 'react';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext';
import BreadCrumb from '../../../ui/BreadCrumb';
import PageTitle from '../../../ui/PageTitle';
import CatalogFilterFeatures from '../../catalog/components/CatalogFilterFeatures';
import TireMarkBackLink from '../components/TireMarkBackLink';
import TireMarkModelBlock from '../components/TireMarkModelBlock';
import TireMarkModelSort from '../components/TireMarkModelSort';

const sort = [
  {
    id: 1,
    name: '1 (E81-E88) Cabrio Restyle 2007-2011',
  },
  {
    id: 143,
    name: '1 (E81-E88) Coupe Restyle 2008-2013',
  },
  {
    id: 132,
    name: ' 1 (E81-E88) Hatchback 2004-2007',
  },
  {
    id: 1433,
    name: '1 (E81-E88) Hatchback Restyle 2008-2013',
  },
  {
    id: 41433,
    name: '2 (F22) Coupe 2013-2018',
  },
];

function TireMarkModelPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/trademarks', name: 'Trade marks' },
          { path: '', name: 'Catalog shine for BMW' },
        ]);
      });
  }, []);
  return (
    <>
      <BreadCrumb />
      <PageTitle title="Catalog shine for BMW" />

      <TireMarkModelSort sort={sort} />
      <TireMarkBackLink />
      <div className="my-4 mt-2 flex gap-x-3">
        <CatalogFilterFeatures />
        <TireMarkModelBlock />
      </div>
    </>
  );
}

export default TireMarkModelPage;
