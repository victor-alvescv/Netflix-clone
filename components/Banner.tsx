import { useEffect, useState } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/outline"
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'

interface Props {
  netflixOriginals: Movie[]
}


function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12"><div>
      <img
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        className="absolute top-0 left-0 h-[40vh] md:h-[50vh] lg:h-[95vh] -z-10 object-cover w-screen " />
    </div>
      <h1 className=" bannerContent text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md hidden md:flex text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>


      <div className="flex space-x-3 pt-3">
        <button className="bannerButton cursor-not-allowed bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7 " />Play</button>
        <button className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}>
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />More Info
        </button>
      </div>
    </div>
  )

}

export default Banner