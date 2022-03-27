export interface GiphySlice {
  loading: boolean;
  error: string | null;
  pagination: pagination;
  search: string;
  data: DataGiphy[];
  favouriteList: string[];
}

export interface DataGiphy {
  type: string;
  id: string;
  slug: string;
  title: string;
  images: {
    downsized_medium: {
      height: string;
      width: string;
      size: string;
      url: string;
    };
  };
}

type pagination = {
  totalCount: number;
  limit: number;
  offset: number;
};
