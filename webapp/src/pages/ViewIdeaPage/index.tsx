import type { TrpcRouterOutput } from '@ideanick/backend/src/router'
import { useParams } from 'react-router-dom'

import { LinkButton } from '../../components/Button'
import Segment from '../../components/Segment'
import { withPageWrapper } from '../../lib/pageWrapper'
import { getEditIdeaRoute } from '../../lib/routes/routeHelpers'
import { trpc } from '../../lib/trpc'

import css from './include.module.scss'

const LikeButton = ({ idea }: { idea: NonNullable<TrpcRouterOutput['getIdea']['idea']> }) => {
  const trpcUtils = trpc.useUtils()
  const setIdeaLike = trpc.setIdeaLike.useMutation({
    onMutate: ({ isLikedByMe }) => {
      const oldGetIdeaData = trpcUtils.getIdea.getData({ ideaNick: idea.nick })
      if (oldGetIdeaData?.idea) {
        const newGetIdeaData = {
          ...oldGetIdeaData,
          idea: {
            ...oldGetIdeaData.idea,
            isLikedByMe,
            likesCount: oldGetIdeaData.idea.likesCount + (isLikedByMe ? 1 : -1),
          },
        }
        trpcUtils.getIdea.setData({ ideaNick: idea.nick }, newGetIdeaData)

        // return { oldGetIdeaData }
      }
    },
    onSuccess: () => {
      // onSuccess: (responseData) => {
      void trpcUtils.getIdea.invalidate({ ideaNick: idea.nick })
      // trpcUtils.getIdea.setData({ ideaNick: idea.nick }, (currentData) => {
      //   if (currentData?.idea) {
      //     return {
      //       ...currentData,
      //       idea: {
      //         ...currentData.idea,
      //         isLikedByMe: responseData.idea.isLikedByMe,
      //         likesCount: responseData.idea.likesCount,
      //       },
      //     }
      //   }
      //   return currentData
      // })
    },
    // onError: (_, __, context) => {
    //   if (context?.oldGetIdeaData) {
    //     trpcUtils.getIdea.setData({ ideaNick: idea.nick }, context.oldGetIdeaData)
    //   }
    // },
  })
  return (
    <button
      className={css.likeButton}
      onClick={() => {
        void setIdeaLike.mutateAsync({ ideaId: idea.id, isLikedByMe: !idea.isLikedByMe })
      }}
    >
      {idea.isLikedByMe ? 'Unlike' : 'Like'}
    </button>
  )
}

export const ViewIdeaPage = withPageWrapper({
  useQuery: () => {
    const { ideaNick } = useParams<string>()
    return trpc.getIdea.useQuery({
      ideaNick: ideaNick as string,
    })
  },
  checkExists: ({ queryResult }) => !!queryResult.data.idea,
  checkExistsMessage: 'Idea not found',
  setProps: ({ queryResult, ctx }) => ({
    idea: queryResult.data.idea,
    me: ctx.me,
  }),
  showLoaderOnFetching: false,
})(({ idea, me }) => (
  <Segment title={idea.name} description={idea.description}>
    <div className={css.createdAt}>Created At: {idea.createdAt.toLocaleDateString('ru-RU')}</div>
    <div className={css.author}>
      Author: {idea.author.nick}
      {idea.author.name ? ` (${idea.author.name})` : ''}
    </div>
    <div className={css.text} dangerouslySetInnerHTML={{ __html: idea.text }} />
    <div className={css.likes}>
      Likes: {idea.likesCount}
      {me && (
        <>
          <br />
          <LikeButton idea={idea} />
        </>
      )}
    </div>
    {me?.id === idea.authorId && (
      <div className={css.editButton}>
        <LinkButton to={getEditIdeaRoute(idea.nick)}>Edit Idea</LinkButton>
      </div>
    )}
  </Segment>
))
