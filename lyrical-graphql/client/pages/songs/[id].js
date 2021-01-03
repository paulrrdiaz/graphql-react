import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoIosArrowBack } from 'react-icons/io'
import { useQuery } from '@apollo/react-hooks'
import { fetchSong } from 'queries'
import LyricCreate from 'components/LyricCreate'

const SongsDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const { loading, data } = useQuery(fetchSong, { variables: { id } })

  if (loading || !data) {
    return <h1>loading...</h1>
  }

  return (
    <div>
      <div>
        <Link href="/">
          <a
            className={`
              text-3xl inline-flex items-center 
              justify-center text-white w-14 h-14 
              rounded-full bg-green-500
            `}
          >
            <IoIosArrowBack />
          </a>
        </Link>
      </div>
      <h1 className="title">Song's detail</h1>
      <div>
        <h3 className="subtitle">{data.song.title}</h3>
      </div>
      <div className="mb-8">
        {data.song.lyrics.map(({ content }) => (
          <p className="lyric" key={content}>
            {content}
          </p>
        ))}
      </div>
      <LyricCreate songId={id} />
    </div>
  )
}

export default SongsDetail
