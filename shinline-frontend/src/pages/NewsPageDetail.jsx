import { CalendarDaysIcon, EyeIcon } from '@heroicons/react/24/outline';
import BreadCrumb from '../ui/BreadCrumb';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useBreadCrumbContext } from '../context/BreadcrumbContext.tsx';
import PageTitle from '../ui/PageTitle';

function NewsPageDetail() {
  const { newId } = useParams();

  const [detail, setDetail] = useState({});
  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch(`../../src/data/news-data.json`) // todo: `/news/${newId}`
      .then((response) => response.json())
      .then((data) => {
        const current = data.find((f) => f.id === parseInt(newId));
        setDetail(current);
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/news', name: 'News' },
          { path: `/news/${newId}`, name: current.title },
        ]);
      });
  }, [newId]);

  return (
    <>
      <BreadCrumb />
      <PageTitle title={detail.title} />
      <div className="mt-6 gap-4 md:flex lg:gap-[50px]">
        <div className="basis-[70%]">
          <div className="mb-4  flex md:mb-8">
            <p className="flex items-center">
              <CalendarDaysIcon className="h-6 w-6 text-extragray" />
              <span className="ml-[6px] font-medium text-extragray">
                03 january, 11:51
              </span>
            </p>
            <p className="ml-3 flex items-center">
              <EyeIcon className="h-6 w-6 text-extragray" />
              <span className="ml-[6px] font-medium text-extragray">378</span>
            </p>
          </div>
          <p className="mb-5 sm:text-lg">{detail.description}</p>
        </div>
        <div className="w-full basis-[30%]">
          <img className="w-full" src={detail.imgUrl} alt="" />
        </div>
      </div>
    </>
  );
}

export default NewsPageDetail;
