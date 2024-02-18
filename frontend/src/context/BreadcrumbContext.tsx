import {
  useState,
  createContext,
  type ReactNode,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

type BreadcrumbItem = {
  path: string;
  name: string;
};

type BreadCrumbContextValue = {
  breadcrumb: BreadcrumbItem[];
  setBreadcrumb: Dispatch<SetStateAction<BreadcrumbItem[]>>;
};

const BreadCrumbContext = createContext<BreadCrumbContextValue | null>(null);

type BreadCrumbProviderProps = {
  children: ReactNode;
};

function BreadCrumbProvider({ children }: BreadCrumbProviderProps) {
  const [breadcrumb, setBreadcrumb] = useState<BreadcrumbItem[]>([]);

  return (
    <BreadCrumbContext.Provider
      value={
        {
          breadcrumb,
          setBreadcrumb,
        } as BreadCrumbContextValue
      }
    >
      {children}
    </BreadCrumbContext.Provider>
  );
}

function useBreadCrumbContext(): BreadCrumbContextValue {
  const context = useContext(BreadCrumbContext);

  if (context === null) {
    throw new Error('BreadCrumbContext is null - that should not be the case!');
  }

  return context;
}

export { BreadCrumbProvider, useBreadCrumbContext };
