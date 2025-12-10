import { zUpdateIdeaTrpcInput } from '@ideanick/backend/src/router/updateIdea/input'
import { useNavigate, useParams } from 'react-router-dom'

import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import { FormItems } from '../../components/FormItems'
import { Input } from '../../components/Input'
import Segment from '../../components/Segment'
import { Textarea } from '../../components/TextArea'
import { useForm } from '../../lib/form'
import { withPageWrapper } from '../../lib/pageWrapper'
import { getViewIdeaRoute } from '../../lib/routes/routeHelpers'
import { trpc } from '../../lib/trpc'

export const EditIdeaPage = withPageWrapper({
  authorizedOnly: true,
  useQuery: () => {
    const { ideaNick } = useParams<string>()
    return trpc.getIdea.useQuery({
      ideaNick: ideaNick as string,
    })
  },
  checkExists: ({ queryResult }) => !!queryResult.data.idea,
  checkExistsMessage: 'Idea not found',
  checkAccess: ({ queryResult, ctx }) => !!ctx.me && ctx.me.id === queryResult.data.idea?.authorId,
  checkAccessMessage: 'An idea can only be edited by the author',
  setProps: ({ queryResult }) => ({
    idea: queryResult.data.idea,
  }),
})(({ idea }) => {
  const navigate = useNavigate()
  const updateIdea = trpc.updateIdea.useMutation()
  const { formik, buttonProps, alertProps } = useForm({
    initialValues: {
      name: idea.name,
      nick: idea.nick,
      description: idea.description,
      text: idea.text,
    },
    validationSchema: zUpdateIdeaTrpcInput.omit({ ideaId: true }),
    onSubmit: async (values) => {
      await updateIdea.mutateAsync({ ideaId: idea.id, ...values })
      void navigate(getViewIdeaRoute(values.nick))
    },
    resetOnSuccess: false,
    showValidationAlert: true,
  })

  return (
    <Segment title={`Edit Idea: ${idea.nick}`}>
      <form onSubmit={formik.handleSubmit}>
        <FormItems>
          <Input label="Name" name="name" formik={formik} />
          <Input label="Nick" name="nick" formik={formik} />
          <Input label="Description" name="description" formik={formik} />
          <Textarea label="Text" name="text" formik={formik} />
          <Alert {...alertProps} />
          <Button {...buttonProps}>Update Idea</Button>
        </FormItems>
      </form>
    </Segment>
  )
})
