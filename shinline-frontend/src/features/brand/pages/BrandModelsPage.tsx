import { useEffect } from 'react';
import BreadCrumb from '../../../ui/BreadCrumb';
import PageTitle from '../../../ui/PageTitle';
import BrandImage from '../components/BrandImage';
import BrandList from '../components/BrandList';
import BrandModelCard from '../components/BrandModelCard';
import BrandModelInfo from '../components/BrandModelInfo';
import BrandModelSort from '../components/BrandModelSort';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext';

function BrandModelsPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  const seasonTypes = [
    {
      id: 32651,
      colors: {
        from: '#FF5C00',
        to: '#FCC537',
      },
      path: '/',
      name: 'Summer tires',
      value: 'summer-tires',
      icon: 'sunny',
    },
    {
      id: 35421,
      colors: {
        from: '#0E3D39',
        to: '#28CA55',
      },
      path: '/',
      name: 'All season tires',
      value: 'winter-summer',
      icon: 'winter-summer',
    },
  ];
  const itemsToShow = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
  ];

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/brands', name: 'Brands' },
          { path: '', name: 'Contyre' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />
      <PageTitle title="Car tires Cordiant in Uzbekistan" />
      <div className="my-4 flex flex-col gap-x-5 md:flex-row">
        <BrandImage />
        <BrandModelSort seasonTypes={seasonTypes} />
      </div>
      <div className="my-4 flex gap-x-5">
        <BrandList lists={itemsToShow} initiallyDisplayed={5} />
        <BrandModelCard />
      </div>
      <BrandModelInfo />
    </>
  );
}

export default BrandModelsPage;
