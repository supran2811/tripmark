import { translate } from 'react-i18next'
import i18n from '../i18n'

export const withI18next = (namespaces = ['common']) => ComposedComponent => {
  console.log("namespaces ====> ",namespaces);
  const Extended = translate(namespaces, { i18n, wait: process.browser })(
    ComposedComponent
  )

  Extended.getInitialProps = async (ctx) => {
    const composedInitialProps = ComposedComponent.getInitialProps
      ? await ComposedComponent.getInitialProps(ctx)
      : {}

    const i18nInitialProps = ctx.req
      ? i18n.getInitialProps(ctx.req, namespaces)
      : {};

    return {
      ...composedInitialProps,
      ...i18nInitialProps
    }
  }

  return Extended
}