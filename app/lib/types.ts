export type NavItem = {
  label: string;
  href: string;
  isActive?: boolean;
};

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  dataAlt: string;
  tags?: string[];
  link?: string;
};
