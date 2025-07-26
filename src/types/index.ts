export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
}