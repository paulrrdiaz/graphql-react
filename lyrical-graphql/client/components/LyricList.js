import { FiThumbsUp } from 'react-icons/fi'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const mutation = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`

const LyricList = ({ lyrics }) => {
  const [likeLyric] = useMutation(mutation)

  const handleClick = (id, likes) => {
    likeLyric({
      variables: { id },
      optimisticResponse: {
        likeLyric: {
          id,
          likes: likes + 1,
          __typename: 'LyricType',
        },
      },
    })
  }

  return (
    <div className="mb-8">
      {lyrics.map(({ content, id, likes }) => (
        <div className="flex items-center justify-between lyric">
          <p key={content}>{content}</p>
          <div className="flex items-center">
            <span className="mr-2">{likes}</span>
            <button className="rounded-full border border-green-500 p-2">
              <FiThumbsUp
                onClick={() => handleClick(id, likes)}
                className="text-green-500 text-2xl"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LyricList
