import { trpc } from '../../lib/trpc'

const AllIdeasPage = () => {
  const { data, error, isError, isLoading, isFetching } = trpc.getIdeas.useQuery() || []

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error?.message}</div>
  }

  return (
    <div>
      <h1>Ideanick</h1>
      {data?.ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  )
}
export default AllIdeasPage
