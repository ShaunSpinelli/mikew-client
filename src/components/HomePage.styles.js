import styled, { css, injectGlobal } from 'styled-components'

const Home = styled.div`
  height: 75vh;
`
const setTextProps = (size, weight, colour ) => css`
  font-size: ${size};
  font-weight: ${weight};
  color: ${colour};
`
const Title = styled.h4`
  ${setTextProps('3.5em','300','white','yellow')}
`
const Subtitle = styled.h2`
${setTextProps('2em','300','white','yellow')}
`
const Slogan = styled.h3`
line-height: 1.7em;
${setTextProps('1.5em','300','white','yellow')}
`
const Icon = styled.img`
  position: absolute;
  padding-right: 5vw;
  bottom: 1rem;
  right: 3rem;
  height: 2.5rem;
`
export { Title, Subtitle, Slogan, Home, Icon }
