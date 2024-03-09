import { Link } from 'react-router-dom';
import { useBreadCrumbContext } from '../context/BreadcrumbContext.tsx';

function BreadCrumb() {
  const { breadcrumb } = useBreadCrumbContext();

  if (!breadcrumb.length) {
    return null;
  }

  const isLastPath = (index: number) => breadcrumb.length - 1 !== index;

  return (
    <nav className="mt-20 hidden w-full rounded-md text-sm lg:block">
      <ol className="list-reset flex">
        {breadcrumb.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`text-[#566879] transition duration-150 ease-in-out ${
                isLastPath(index)
                  ? 'hover:text-gray-900'
                  : 'pointer-events-none text-opacity-75'
              }`}
            >
              {item.name}
            </Link>
            {isLastPath(index) && (
              <span className="mx-2 text-neutral-500">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumb;
