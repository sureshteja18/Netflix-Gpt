// movieSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_OPTIONS } from "./constants";

// Thunk to fetch the now playing movies
export const fetchNowPlayingMovies = createAsyncThunk(
  'movie/fetchNowPlayingMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Failed to fetch now playing movies');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch the popular movies
export const fetchPopularMovies = createAsyncThunk(
  'movie/fetchPopularMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2',
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch the top-rated movies
export const fetchTopRatedMovies = createAsyncThunk(
  'movie/fetchTopRatedMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Failed to fetch top-rated movies');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch the upcoming movies
export const fetchUpcomingMovies = createAsyncThunk(
  'movie/fetchUpcomingMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Failed to fetch upcoming movies');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch the movie details
export const fetchMovieDetails = createAsyncThunk(
  'movie/fetchMovieDetails',
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const data = await response.json();
      console.log('Fetched movie details:', data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch the movie credits cast
export const fetchMovieCredits = createAsyncThunk(
  'movie/fetchMovieCredits',
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie credits');
      }
      const data = await response.json();
      return data.cast;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch the movie videos
export const fetchMovieVideos = createAsyncThunk(
  'movie/fetchMovieVideos',
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie videos');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch the movie images
export const fetchMovieImages = createAsyncThunk(
  'movie/fetchMovieImages',
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/images`,
        API_OPTIONS
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie images');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Creating the movieSlice to store all fetched data
const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieDetails: null,
    movieCredits: null,
    movieVideos: null,
    movieImages: null,
    status: {
      nowPlayingMovies: 'idle',
      popularMovies: 'idle',
      topRatedMovies: 'idle',
      upcomingMovies: 'idle',
      movieDetails: 'idle',
      movieCredits: 'idle',
      movieVideos: 'idle',
      movieImages: 'idle',
    },
    error: {
      nowPlayingMovies: null,
      popularMovies: null,
      topRatedMovies: null,
      upcomingMovies: null,
      movieDetails: null,
      movieCredits: null,
      movieVideos: null,
      movieImages: null,
    },
  },
  reducers: {
    clearMovies: (state) => {
      state.nowPlayingMovies = null;
      state.popularMovies = null;
      state.topRatedMovies = null;
      state.upcomingMovies = null;
      state.movieDetails = null;
      state.movieCredits = null;
      state.movieVideos = null;
      state.movieImages = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchNowPlayingMovies thunk states
      .addCase(fetchNowPlayingMovies.pending, (state) => {
        state.status.nowPlayingMovies = 'loading';
        state.error.nowPlayingMovies = null;
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.status.nowPlayingMovies = 'succeeded';
        state.nowPlayingMovies = action.payload;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.status.nowPlayingMovies = 'error';
        state.error.nowPlayingMovies = action.payload || action.error.message;
      })

      // Handle fetchPopularMovies thunk states
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status.popularMovies = 'loading';
        state.error.popularMovies = null;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status.popularMovies = 'succeeded';
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status.popularMovies = 'error';
        state.error.popularMovies = action.payload || action.error.message;
      })

      // Handle fetchTopRatedMovies thunk states
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.status.topRatedMovies = 'loading';
        state.error.topRatedMovies = null;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.status.topRatedMovies = 'succeeded';
        state.topRatedMovies = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.status.topRatedMovies = 'error';
        state.error.topRatedMovies = action.payload || action.error.message;
      })

      // Handle fetchUpcomingMovies thunk states
      .addCase(fetchUpcomingMovies.pending, (state) => {
        state.status.upcomingMovies = 'loading';
        state.error.upcomingMovies = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.status.upcomingMovies = 'succeeded';
        state.upcomingMovies = action.payload;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.status.upcomingMovies = 'error';
        state.error.upcomingMovies = action.payload || action.error.message;
      })

      // Handle fetchMovieDetails thunk states
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status.movieDetails = 'loading';
        state.error.movieDetails = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status.movieDetails = 'succeeded';
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status.movieDetails = 'error';
        state.error.movieDetails = action.payload || action.error.message;
      })

      // Handle fetchMovieCredits thunk states
      .addCase(fetchMovieCredits.pending, (state) => {
        state.status.movieCredits = 'loading';
        state.error.movieCredits = null;
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.status.movieCredits = 'succeeded';
        state.movieCredits = action.payload;
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.status.movieCredits = 'error';
        state.error.movieCredits = action.payload || action.error.message;
      })

      // Handle fetchMovieVideos thunk states
      .addCase(fetchMovieVideos.pending, (state) => {
        state.status.movieVideos = 'loading';
        state.error.movieVideos = null;
      })
      .addCase(fetchMovieVideos.fulfilled, (state, action) => {
        state.status.movieVideos = 'succeeded';
        state.movieVideos = action.payload;
      })
      .addCase(fetchMovieVideos.rejected, (state, action) => {
        state.status.movieVideos = 'error';
        state.error.movieVideos = action.payload || action.error.message;
      })

      // Handle fetchMovieImages thunk states
      .addCase(fetchMovieImages.pending, (state) => {
        state.status.movieImages = 'loading';
        state.error.movieImages = null;
      })
      .addCase(fetchMovieImages.fulfilled, (state, action) => {
        state.status.movieImages = 'succeeded';
        state.movieImages = action.payload;
      })
      .addCase(fetchMovieImages.rejected, (state, action) => {
        state.status.movieImages = 'error';
        state.error.movieImages = action.payload || action.error.message;
      });
  },
});

export const { clearMovies } = movieSlice.actions;
export default movieSlice.reducer;
