interface RenderedContent {
    rendered: string;
    protected: boolean;
  }
  
  interface Guid {
    rendered: string;
  }
  
  interface Meta {
    _acf_changed: boolean;
    footnotes: string;
  }
  
  interface Links {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    author: { embeddable: boolean; href: string }[];
    replies: { embeddable: boolean; href: string }[];
    "version-history": { count: number; href: string }[];
    "wp:attachment": { href: string }[];
    "wp:term": { taxonomy: string; embeddable: boolean; href: string }[];
    curies: { name: string; href: string; templated: boolean }[];
  }
  
  export interface Post {
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
    title: RenderedContent;
    content: RenderedContent;
    excerpt: RenderedContent;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: Meta;
    categories: number[];
    tags: any[];
    class_list: string[];
    acf: any[];
    _links: Links;
    featured_media_src_url: string;
  }