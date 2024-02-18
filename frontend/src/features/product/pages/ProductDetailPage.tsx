import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBreadCrumbContext } from '../../../context/BreadcrumbContext.tsx';
import BreadCrumb from '../../../ui/BreadCrumb.tsx';
import PageTitle from '../../../ui/PageTitle.tsx';
import ProductRecentlyViewed from '../components/product-detail/ProductRecentlyViewed.tsx';
import ProductTab from '../components/product-detail/ProductTab.tsx';
import { ProductItem, initialProduct } from '../../../models/index.ts';
import ProductActionsSection from '../components/product-detail/ProductActionsSection.tsx';
import ProductImageSection from '../components/product-detail/ProductImageSection.tsx';

function ProductDetailPage() {
  const [product, setProduct] = useState<ProductItem>(initialProduct);
  const [error, setError] = useState<string>();
  const params = useParams();

  const { setBreadcrumb } = useBreadCrumbContext();

  useEffect(() => {
    fetch('../../src/data/data-products.json')
      .then((response) => response.json())
      .then((data) => {
        // todo: like shinline breadcrumb
        const result = data.find((f: any) => f.id === Number(params.id));
        setProduct(result);
        setBreadcrumb([
          { path: '/', name: 'Home' },
          { path: '/catalog', name: 'Catalog' },
          { path: '/catalog/trucktires', name: 'Light trucks' },
          {
            path: '/selection/trucktires/samarkand',
            name: 'Light trucks in Samarkand',
          }, //todo: selection page
          { path: '', name: result.title },
        ]);
      });
  }, []);

  if (!Object.keys(product).length) {
    return;
  }

  return (
    <>
      <BreadCrumb />
      <PageTitle title={product.title} />
      <span className="text-[12px] text-[#566879]">Артикул: 00000017910</span>

      <div className="mx-auto mt-6 bg-white">
        <div className="flex flex-col lg:flex-row">
          <ProductImageSection product={product} />
          <ProductActionsSection product={product} />
        </div>
      </div>

      <ProductTab />

      <PageTitle title="Smilar products" />
      {/* todo: need to make content for this */}
      <ProductRecentlyViewed />
    </>
  );
}

export default ProductDetailPage;
