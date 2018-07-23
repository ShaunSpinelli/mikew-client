import styled, { css } from 'styled-components'
import { setTextProps, setIconProps } from '../styles/Mixins.styles';

const Home = styled.div`
`
const Img = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin: 50px 0 20px 0;
`
const Title = styled.h4`
padding-top: 0.5em;
  ${setTextProps('3.5em','300','yellow')}
`
const Subtitle = styled.h2`
padding: 0.75em;
${setTextProps('2em','300','white')}
`
const Slogan = styled.h3`
line-height: 1.5em;
padding-bottom: 0.5em;
display: block;
${setTextProps('1.5em','300','white')}
`
const Icon1 = styled.img`
${setIconProps('absolute', '5vw', '1rem', '3rem', '2.5rem')}
`
const Icon2 = Icon1.extend`
right: 0rem;
`

export { Title, Subtitle, Slogan, Home, Icon1, Icon2, Img }
