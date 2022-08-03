import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { Movie } from '../../@types/typings';
import { modalState, movieState } from '../../atoms/modalAtom';
import { w500Url } from '../../constants/movie';

interface IProps {
  movie: Movie;
  // When using firebase
  // movie: Movie | DocumentData;
}

function Thumbnail({ movie }: IProps) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`${w500Url}${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
