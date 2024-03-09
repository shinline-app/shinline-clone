import { useEffect, useState } from 'react';
import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import PageTitle from '../../../ui/PageTitle.tsx';
import TireSelectionTabs from '../../../ui/TireSelectionTabs.tsx';
import BrandBlock from '../components/BrandBlock.tsx';
import BrandInfo from '../components/BrandInfo.tsx';
import PopularBrands from '../components/PopularBrands.tsx';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import BrandBlockTitle from '../components/BrandBlockTitle.tsx';
import BrandSort from '../components/BrandSort.tsx';
import brandsData from '../../../data/data-brands.json';

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

function BrandPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/brands', name: 'Brands' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title="Tires for BMW 1 (E81-E88) Coupe Restyle 2008-2013" />
      <TireSelectionTabs />
      <BrandInfo />
      <BrandSort />
      <BrandBlockTitle title="Popular brands" />
      <PopularBrands brandsData={brandsData} />
      <BrandBlockTitle title="All brands" />
      <BrandBlock brandsData={brandsData} />
    </>
  );
}

export default BrandPage;
