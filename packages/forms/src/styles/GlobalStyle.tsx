import { Global } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles, css } from 'twin.macro'

const GlobalStyleCss = process.env.NODE_ENV === 'production' ? css`` : css`
  html {
    margin: 0;
  }
  body {
    ${tw`px-[40px]`}
  }
`;
const GlobalStyle = () => (
  <>
    <BaseStyles />
    <Global
      styles={GlobalStyleCss}
    />
  </>
)

export default GlobalStyle