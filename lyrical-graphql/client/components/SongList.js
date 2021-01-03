import Link from 'next/link'
import gpl from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { IoIosAdd, IoIosTrash } from 'react-icons/io'
import { fetchSongs } from 'queries'

const mutation = gpl`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

const SongList = (props) => {
  const { loading, data } = useQuery(fetchSongs)
  const [deleteSong] = useMutation(mutation, {
    refetchQueries: [{ query: fetchSongs }],
  })

  if (loading || !data) {
    return <h1>loading...</h1>
  }

  const handleClick = (id) => {
    deleteSong({ variables: { id } })
  }

  return (
    <div>
      <h2>SongList</h2>
      <ul>
        {data.songs.map(({ title, id }) => (
          <li
            className={`
              border rounded-md border-gray-200
              text-gray-500 px-3 py-2 mb-2
              flex items-center justify-between
            `}
            key={id}
          >
            <Link className="flex-1" href="/songs/[id]" as={`/songs/${id}`}>
              <a>{title}</a>
            </Link>

            <button
              className="rounded-full border border-gray-200 p-2"
              onClick={() => handleClick(id)}
            >
              <IoIosTrash className="text-red-500 text-2xl" />
            </button>
          </li>
        ))}
      </ul>
      <div className="text-right">
        <Link href="/songs/new">
          <a
            className={`
              text-3xl inline-flex items-center 
              justify-center text-white w-14 h-14 
              rounded-full bg-green-500
            `}
          >
            <IoIosAdd />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SongList
