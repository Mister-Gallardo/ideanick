import { useParams } from 'react-router-dom'

import { trpc } from '../../lib/trpc'

const ViewIdeaPage = () => {
  const { ideaNick } = useParams<{ ideaNick: string }>()

  if (!ideaNick) {
    return <div>Idea nick is missing from URL.</div>
  }

  const { data, error, isError, isLoading, isFetching } = trpc.getIdea.useQuery({ nick: ideaNick })

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error?.message}</div>
  }

  if (!data || !data.idea) {
    return <div>Idea not found</div>
  }

  return (
    <div>
      <h1>{data.idea.name}</h1>
      <p>{data.idea.description}</p>
      <div dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </div>
  )
}
export default ViewIdeaPage
