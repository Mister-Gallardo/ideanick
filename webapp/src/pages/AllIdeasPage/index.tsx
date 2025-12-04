import { Link } from 'react-router-dom'

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
    <div>
      <h1 className={css.title}>All Ideas</h1>
      <div className={css.ideas}>
        {data.ideas.map((idea) => (
          <div className={css.idea} key={idea.nick}>
            <h2 className={css.ideaName}>
              <Link className={css.ideaLink} to={getViewIdeaRoute(idea.nick)}>
                {idea.name}
              </Link>
            </h2>
            <p className={css.ideaDescription}>{idea.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AllIdeasPage
