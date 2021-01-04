import { useForm } from 'react-hook-form'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { fetchSong } from 'queries'

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`

const LyricCreate = ({ songId }) => {
  const { register, handleSubmit, reset } = useForm()
  const [addLyricToSong] = useMutation(mutation, {
    refetchQueries: [{ query: fetchSong, variables: { id: songId } }],
    onCompleted() {
      reset()
    },
  })
  const onSubmit = (data) => {
    addLyricToSong({ variables: { ...data, songId } })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="control">
        <label className="label" htmlFor="content">
          Add a lyric:
        </label>
        <input
          name="content"
          placeholder="Add your awesome lyric"
          className="input"
          type="text"
          ref={register}
        />
      </div>
      <button type="submit" className="button">
        Add lyric to this song
      </button>
    </form>
  )
}

export default LyricCreate
