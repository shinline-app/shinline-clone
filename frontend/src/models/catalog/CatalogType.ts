export type CatalogType = {
  id: number;
  name: string;
  path: string;
  value: string;
  current: boolean;
  svg: string;
};

export type CatalogTypeProps = {
  catalog: CatalogType[];
};
