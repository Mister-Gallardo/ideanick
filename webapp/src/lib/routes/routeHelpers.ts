export const getAllIdeasRoute = () => '/'

export const getViewIdeaRoute = (ideaNick: string) => `/ideas/${ideaNick}`

export const getEditIdeaRoute = (ideaNick: string) => `/ideas/${ideaNick}/edit`

export const getNewIdeaRoute = () => `/ideas/new`

export const getEditProfileRoute = () => '/edit-profile'

export const getSignUpRoute = () => '/sign-up'

export const getSignInRoute = () => '/sign-in'

export const getSignOutRoute = () => '/sign-out'
