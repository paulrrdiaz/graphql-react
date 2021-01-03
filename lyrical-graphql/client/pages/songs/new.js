import { useForm } from 'react-hook-form'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { fetchSongs } from 'queries'

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`

const NewSong = () => {
  const router = useRouter()
  const [addSong] = useMutation(ADD_SONG, {
    refetchQueries: [{ query: fetchSongs }],
    onCompleted() {
      router.push('/')
    },
  })
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    addSong({ variables: { ...data } })
  }

  return (
    <>
      <h1 className="title">Create a new song</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="control">
          <label className="label" htmlFor="title">
            Song Title:
          </label>
          <input
            name="title"
            placeholder="Add your awesome song's title"
            className="input"
            type="text"
            ref={register}
          />
        </div>
        <button type="submit" className="button">
          Add new song
        </button>
      </form>
    </>
  )
}

export default NewSong
