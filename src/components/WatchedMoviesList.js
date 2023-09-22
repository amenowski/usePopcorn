import { WatchedMovie } from "./WatchedMovie";

export function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <WatchedMovie
      watched={watched}
      key={watched.imdbID}
      onDeleteWatched={onDeleteWatched}
    />
  );
}
