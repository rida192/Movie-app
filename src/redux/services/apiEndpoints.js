// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getLatestMovies: builder.query({
      query: (pageNumber) =>
        `discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`,
    }),
    getMovieDetails: builder.query({
      query: (movieId) =>
        `movie/${movieId}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`,
    }),
    getTopRatedMovies: builder.query({
      query: (pageNumber) =>
        `movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${pageNumber}`,
    }),

    getsearchedMovies: builder.query({
      query: (args) => {
        const { search, pageNumber } = args;
        return {
          url: `search/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US&page=${pageNumber}&query=${search}`,
        };
      },
    }),
    getSimilerMovies: builder.query({
      query: (movieId) =>
        `movie/${movieId}/similar?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetLatestMoviesQuery,
  useGetMovieDetailsQuery,
  useGetTopRatedMoviesQuery,
  useGetsearchedMoviesQuery,
  useGetSimilerMoviesQuery,
} = moviesApi;
