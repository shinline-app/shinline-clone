import { ReactNode } from 'react';

type ProductTabContentProps = {
  open: string;
  category: string;
  children: ReactNode;
};
function ProductTabContent({
  open,
  category,
  children,
}: ProductTabContentProps) {
  return (
    <div
      className={`text-body-color max-w-[770px] py-6 text-base leading-relaxed ${
        open === category ? 'block' : 'hidden'
      } `}
    >
      {children}
    </div>
  );
}
export default ProductTabContent;
