import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import { useContext, useEffect, useState } from 'react';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import NewItem from '../components/NewItem.tsx';
import PageTitle from '../../../ui/PageTitle.tsx';

function NewsPage() {
  const [news, setNews] = useState([]);
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/news-data.json')
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/news', name: 'News' },
        ]);
      });
  }, []);

  return (
    <>
      <BreadCrumb />

      <PageTitle title={'News'} />
      <div className="my-4 grid grid-cols-1  gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {news.map((item) => (
          <NewItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default NewsPage;
