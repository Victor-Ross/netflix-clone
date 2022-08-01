export type Category = {
  id: string;
  results: string;
};

export type CategoriesResponse = [
  netFlixOriginals: Category,
  trendingNow: Category,
  topRated: Category,
  actionMovies: Category,
  comedyMovies: Category,
  horrorMovies: Category,
  romanceMovies: Category,
  documentaries: Category
];
