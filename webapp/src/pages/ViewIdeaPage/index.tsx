import { useParams } from 'react-router-dom'

import Segment from '../../components/Segment'
import { trpc } from '../../lib/trpc'

import css from './include.module.scss'

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
    <Segment title={data.idea.name} description={data.idea.description}>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  )
}
export default ViewIdeaPage
