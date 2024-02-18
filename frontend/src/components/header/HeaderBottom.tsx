import { Link } from 'react-router-dom';
import { classNames } from '../../utils/helpers';
import HeaderTopItems from './HeaderTopItems.tsx';
import menu from '.././../data/data-menu.json';

type MenuItem = {
  name: string;
  path: string;
  current: boolean;
  svg: string;
};

type HeaderBottomProps = {
  isMobile: boolean;
  isOpenMenu: boolean;
};

function HeaderBottom({ isMobile, isOpenMenu }: HeaderBottomProps) {
  return (
    <div
      className={`absolute left-0 top-[48px] z-20 h-full w-full -translate-x-full bg-white px-2 shadow-md transition-all md:top-[64px] md:h-max md:pt-0  lg:translate-x-0 lg:opacity-100 ${
        isOpenMenu ? 'translate-x-0 opacity-100' : 'opacity-5'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-2 lg:px-8">
        <div className="lg:flex ">
          {menu.map((item: MenuItem) => (
            <Link
              key={item.name}
              to={`${item.path}`}
              className={classNames(
                item.current
                  ? ' is-active text-black'
                  : ' text-extragray hover:text-black',
                'lg:border-x-[rgba(5, 5, 5, 0.10)] group flex w-full cursor-pointer items-center border-b-[0.5px] border-b-[#E2E9F2] py-3 text-sm font-bold transition lg:my-2 lg:justify-center lg:border-y-[0] lg:border-l-[0.5px] lg:px-3 lg:py-[2px] last:lg:border-r-[0.5px]'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <span
                className={classNames(
                  item.current
                    ? '[&>svg>g>path]:fill-[black] [&>svg>path]:fill-[black]'
                    : '',
                  'group-hover:[&>svg>g>path]:fill-[black] group-hover:[&>svg>path]:fill-[black]'
                )}
                dangerouslySetInnerHTML={{ __html: item.svg }}
              ></span>
              <span className="ml-2 whitespace-nowrap">{item.name}</span>
            </Link>
          ))}
        </div>
        {!isMobile ? null : <HeaderTopItems />}
      </div>
    </div>
  );
}

export default HeaderBottom;
