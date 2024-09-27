interface Guid {
    rendered: string;
  }
  
  interface Title {
    rendered: string;
  }
  
  interface Content {
    rendered: string;
    protected: boolean;
  }
  
  interface Meta {
    _acf_changed: boolean;
  }
  
  interface Acf {
    title: string;
    summery: string;
    content: string;
    image: number;
    address: string;
  }
  
  interface Link {
    href: string;
  }
  
  interface Links {
    self: Link[];
    collection: Link[];
    about: Link[];
    'wp:attachment': Link[];
    'wp:term': Array<Link & { taxonomy: string; embeddable: boolean }>;
    curies: Array<{ name: string; href: string; templated: boolean }>;
  }
  
  export interface Project {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Title;
    content: Content;
    featured_media: number;
    template: string;
    meta: Meta;
    project_category: string[]; 
    class_list: string[];
    acf: Acf;
    _links: Links;
    project_tag : string[];
  }