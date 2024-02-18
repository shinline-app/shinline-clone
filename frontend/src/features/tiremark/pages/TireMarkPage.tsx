import { useEffect } from 'react';
import BreadCrumb from '../../../ui/BreadCrumb';
import PageTitle from '../../../ui/PageTitle';
import TireSelectionTabs from '../../../ui/TireSelectionTabs';
import TireMarkInfo from '../components/TireMarkInfo';
import TireMarkSearch from '../components/TireMarkSearch';
import TireMarkMarks from '../components/TireMarkMarks';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext';

function TireMarkPage() {
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/trademarks', name: 'Trade marks' },
        ]);
      });
  }, []);
  return (
    <>
      <BreadCrumb />
      <PageTitle title={'Catalog shine'} />
      <TireSelectionTabs />
      <TireMarkInfo />
      <TireMarkSearch />
      <TireMarkMarks />
    </>
  );
}

export default TireMarkPage;
