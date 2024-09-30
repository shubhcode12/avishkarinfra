interface MediaSize {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  filesize: number;
  source_url: string;
}

interface MediaDetails {
  width: number;
  height: number;
  sizes: {
    medium: MediaSize;
    large: MediaSize;
    thumbnail: MediaSize;
    medium_large: MediaSize;
    '1536x1536': MediaSize;
    '2048x2048'?: MediaSize;
  };
}

interface GalleryImage {
  id: number;
  title: string;
  caption: string;
  full_image_url: string;
  thumbnail_image_url: string;
  large_srcset: string;
  medium_srcset: string;
  media_details: MediaDetails;
  alt_text: string;
  url: string;
  target: string;
}

interface Gallery {
  images: any;
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  template: string;
  meta: {
    _acf_changed: boolean;
  };
  class_list: string[];
  acf: {
    photo_gallery: {
      photo_gallery: GalleryImage[][];
    };
  };
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    'wp:attachment': { href: string }[];
    curies: {
      name: string;
      href: string;
      templated: boolean;
    }[];
  };
}

export default Gallery;
