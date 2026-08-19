export type Service = {
  id: number;
  name: string;
  price?: string;
  duration: string;
  description: string;
  benefits: string[];
  image: string;
};

export type Category = {
  name: string;
  services: Service[];
};

export type ServicesData = {
  showPricing: boolean;
  categories: Category[];
};