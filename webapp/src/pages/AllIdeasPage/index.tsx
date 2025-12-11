import { zGetIdeasTrpcInput } from '@ideanick/backend/src/router/getIdeas/input'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'
import { useDebounceValue } from 'usehooks-ts'

import { Alert } from '../../components/Alert'
import { Input } from '../../components/Input'
import Segment from '../../components/Segment'
import { layoutContentElRef } from '../../components/layouts'
import { useForm } from '../../lib/form'
import { withPageWrapper } from '../../lib/pageWrapper'
import { getViewIdeaRoute } from '../../lib/routes/routeHelpers'
import { trpc } from '../../lib/trpc'

import css from './include.module.scss'

export const AllIdeasPage = withPageWrapper({
  title: 'All Idea - IdeaNick',
})(() => {
  const { formik } = useForm({
    initialValues: { search: '' },
    validationSchema: zGetIdeasTrpcInput.pick({ search: true }),
  })
  const [search] = useDebounceValue(formik.values.search, 400)
  const {
    data,
    error,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = trpc.getIdeas.useInfiniteQuery(
    {
      search,
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextCursor
      },
    }
  )

  return (
    <Segment title="All Ideas">
      <div className={css.filter}>
        <Input maxWidth={'100%'} label="Search" name="search" formik={formik} />
      </div>
      {isLoading || isRefetching ? (
        <div>Loading...</div>
      ) : isError || !data ? (
        <Alert color="red">{error ? error.message : 'Тут пусто...'}</Alert>
      ) : (
        <div className={css.ideas}>
          <InfiniteScroll
            threshold={200}
            loadMore={() => {
              if (!isFetchingNextPage && hasNextPage) {
                void fetchNextPage()
              }
            }}
            hasMore={hasNextPage}
            loader={
              <div className={css.more} key="loader">
                Loading...
              </div>
            }
            getScrollParent={() => layoutContentElRef.current}
            useWindow={
              true
              // (layoutContentElRef.current &&
              // getComputedStyle(layoutContentElRef.current).overflow) !== 'auto'
              // false
            }
          >
            {data.pages
              .flatMap((page) => page.ideas)
              .map((idea) => (
                <div className={css.idea} key={idea.nick}>
                  <Segment
                    size={2}
                    title={
                      <Link className={css.ideaLink} to={getViewIdeaRoute(idea.nick)}>
                        {idea.name}
                      </Link>
                    }
                    description={idea.description}
                  >
                    Likes: {idea.likesCount}
                  </Segment>
                </div>
              ))}
          </InfiniteScroll>
        </div>
      )}
    </Segment>
  )
})
export default AllIdeasPage
