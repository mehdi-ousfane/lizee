type VariantProduct = {
  available: boolean;
  axis: string[];
  code: string;
  enabled: boolean;
  images?: Object[];
  name: string;
  nameAxis: {
    [key: string]: string;
  };
  optionValueId: number;
  price: {
    currency: string;
    current: number;
  };
  purchase: boolean;
  sku: string;
  tryingOnRequired: boolean;
};

export type Product = {
  associations: {
    similar_products: Product[];
  };
  attributes: {
    code: string;
    name: string;
    type: string;
    value: string;
  }[];
  averageRating: number;
  channelCode: string;
  code: string;
  description: string;
  enabled: boolean;
  images: {
    code?: string;
    cachedPath: string;
    path: string;
  }[];
  isSimpleProduct: boolean;
  name: string;
  shortDescription: string;
  slug: string;
  taxons: {
    main: string;
    others: string[];
  };
  variants: {
    [key: string]: VariantProduct;
  };
  _links: {
    self: {
      href: string;
    };
  };
};

export type ProductsRequestData = {
  items: Product[];
  limit: number;
  page: number;
  pages: number;
  total: number;
  _links?: {
    first: string;
    last: string;
    next: string;
    self: string;
  };
};
