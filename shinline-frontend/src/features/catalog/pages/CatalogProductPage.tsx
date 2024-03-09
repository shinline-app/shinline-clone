import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import { ReactNode, SetStateAction, useEffect, useState } from 'react';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import ProductCard from '../../product/components/ProductCard.tsx';
import ProductModal from '../../product/components/product-modal/ProductModal.tsx';
import { getProductList } from '../../../services/product/index.ts';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import CatalogSortSection from '../components/CatalogSortSection.tsx';
import CatalogFilterParameter from '../components/CatalogFilterParameter.tsx';
import CatalogFilterSeasonal from '../components/CatalogFilterSeasonal.tsx';
import CatalogHead from '../components/CatalogHeadSection.tsx';
import { ProductItem, ProductState, initialProduct } from '../../../models';
import CatalogFilterFeatures from '../components/CatalogFilterFeatures.tsx';
import sorts from '../../../data/data-sort.json';
import seasons from '../../../data/data-seasons.json';
import ProductCardV2 from '../../product/components/ProductCardV2.jsx';
import Pagination from '../components/Pagination.tsx';
import { classNames } from '../../../utils/helpers.ts';

const data = [
  {
    id: 1,
    height: '155',
    width: '65',
    diameter: '14',
  },
  {
    id: 2,
    height: '155',
    width: '',
    diameter: '14',
  },
  {
    id: 4,
    height: '9.5L',
    width: '',
    diameter: '15-3L',
  },
  {
    id: 6,
    height: '',
    width: '',
    diameter: '22.5',
  },
  {
    id: 6,
    height: '',
    width: '65',
    diameter: '13',
  },
];

function CatalogProductPage() {
  const [product, setProduct] = useState<ProductItem>(initialProduct);
  const [isOpenModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const { setBreadcrumb } = useBreadCrumbContext();

  const { products, skip, total, limit }: ProductState[] =
    useLoaderData() as ProductState[];

  const totalPages = Math.ceil(total / limit);

  function displayPages() {
    let pagesArray: number[] = [];
    for (let i = 1; i < totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  console.log(products, skip, total, limit, 'products');
  function handleOpenModal(value: SetStateAction<ProductItem>) {
    setProduct(value);
    setOpenModal(true);
  }

  const handleShowMore = () => {
    setCurrentPage(currentPage + 1);

    // Check if there are more products to load
    if (currentPage * productsPerPage >= products.length) {
      setHasMore(false);
    }
  };

  function handlePageChange(page: number) {
    setCurrentPage(page);
    const skip = ((page - 1) * limit).toString();
    setSearchParams({ skip });
  }

  function renderPageNumbers() {
    const pageNumbers: ReactNode[] = [];

    if (totalPages <= 5) {
      const pageRange = 10;
      const { startPage, endPage } = calculatePageRange(
        currentPage,
        totalPages,
        pageRange
      );

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <li
            key={i + Math.random()}
            className={i === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </li>
        );
      }
    } else {
      // Display the first two pages
      pageNumbers.push(
        <li
          key={1 + Math.random()}
          className={1 === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(1)}
        >
          1
        </li>
      );

      pageNumbers.push(
        <li
          key={2 + Math.random()}
          className={2 === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(2)}
        >
          2
        </li>
      );

      // Display ellipsis if not on the first two pages
      if (currentPage > 2) {
        pageNumbers.push(
          <li key="startEllipsis" className="ellipsis">
            ...
          </li>
        );
      }

      // Display current and surrounding pages
      for (
        let i = Math.max(currentPage - 1, 3);
        i <= Math.min(currentPage + 1, totalPages - 1);
        i++
      ) {
        pageNumbers.push(
          <li
            key={i + Math.random()}
            className={i === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </li>
        );
      }

      // Display ellipsis if not on the last two pages
      if (currentPage < totalPages - 1) {
        pageNumbers.push(
          <li key="endEllipsis" className="ellipsis">
            ...
          </li>
        );
      }

      // Display the last two pages
      pageNumbers.push(
        <li
          key={totalPages - 1 + Math.random()}
          className={totalPages - 1 === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(totalPages - 1)}
        >
          {totalPages - 1}
        </li>
      );

      pageNumbers.push(
        <li
          key={totalPages + Math.random()}
          className={totalPages === currentPage ? 'active' : ''}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </li>
      );
    }

    return pageNumbers;
  }

  useEffect(() => {
    setBreadcrumb([
      { path: '/', name: 'Home' },
      { path: '/catalog', name: 'Catalog' },
    ]);
  }, []);

  if (!products.length) {
    return <h1 className="mt-20 text-center">No products</h1>;
  }

  return (
    <>
      <BreadCrumb />
      <div className="py-5">
        <CatalogHead />
        <CatalogFilterSeasonal seasons={seasons} />
        <CatalogFilterParameter parameters={data} />
        <CatalogSortSection sorts={sorts} />
        <div className="my-4 flex gap-x-3">
          <CatalogFilterFeatures />
          <div className="flex-[75%]">
            <div className="mb-10 flex flex-wrap">
              {products.map((product) => (
                <ProductCardV2 key={product.id} product={product} />
                // <ProductList currentPage={currentPage} itemsPerPage={10} />
              ))}
              {/* {products.map((product: any) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={handleOpenModal}
                />
              ))} */}
            </div>
            {/* PAGINATION, LOAD MORE */}
            <div className="flex items-center justify-between">
              {hasMore ? (
                <button onClick={handleShowMore}>Show More</button>
              ) : null}
              <div className="flex items-center">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="flex h-10 w-8 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M8.12344 9.00005L11.8359 12.7126L10.7754 13.7731L6.00244 9.00005L10.7754 4.22705L11.8359 5.28755L8.12344 9.00005Z"
                      fill="black"
                    />
                  </svg>
                </button>
                {displayPages().map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={classNames(
                      currentPage === page ? 'bg-red text-white' : 'text-black',
                      'mx-[2px] flex h-10 w-10 items-center justify-center rounded-[10px] text-base transition-all hover:bg-red hover:text-white'
                    )}
                  >
                    {page}
                  </button>
                ))}
                <button
                  disabled={currentPage + 1 === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="flex h-10 w-8 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.87656 9.00005L6.16406 12.7126L7.22456 13.7731L11.9976 9.00005L7.22456 4.22705L6.16406 5.28755L9.87656 9.00005Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductModal
        product={product}
        isOpen={isOpenModal}
        openModal={setOpenModal}
      /> */}
    </>
  );
}

export default CatalogProductPage;

export async function loader({ request }: any) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || 9;
  const skip = searchParams.get('skip') || 0;

  const productList = (await getProductList({
    limit,
    skip,
  })) as ProductState[];
  return productList;
}
