import { Link } from 'react-router-dom'

import { Segment } from '../../components/layouts/Segment/Segment'
import { getViewIdeaRoute } from '../../lib/routes/routeHelpers'
import { trpc } from '../../lib/trpc'

import css from './include.module.scss'

const AllIdeasPage = () => {
  const { data, error, isError, isLoading, isFetching } = trpc.getIdeas.useQuery()

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error?.message}</div>
  }

  if (!data || !data.ideas) {
    return <div>Ideas not found</div>
  }

  return (
    <Segment title="All Ideas">
      <div className={css.ideas}>
        {data.ideas.map((idea) => (
          <div className={css.idea} key={idea.nick}>
            <Segment
              size={2}
              title={
                <Link className={css.ideaLink} to={getViewIdeaRoute(idea.nick)}>
                  {idea.name}
                </Link>
              }
              description={idea.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  )
}
export default AllIdeasPage
