import styled, { css } from 'styled-components'

const Home = styled.div`
  height: 50vh;
`
const setTextProps = (size, weight, colour, hovercolour ) => css`
  font-size: ${size};
  font-weight: ${weight};
  color: ${colour};
  margin: 0;
  &:hover {
    color:${hovercolour}
  }
`
const setIconProps = (position, paddingr, bottom, right, height) => css`
  position: ${position};
  padding-right: ${paddingr}
  bottom: ${bottom};
  right: ${right};
  height: ${height};
`

const Title = styled.h4`
padding-top: 0.5em;
  ${setTextProps('3.5em','300','yellow', 'white')}
`
const Subtitle = styled.h2`
padding: 0.75em;
${setTextProps('2em','300','white', 'yellow')}
`
const Slogan = styled.h3`
line-height: 1.5em;
padding-bottom: 0.5em;
${setTextProps('1.5em','300','white', 'yellow')}
`
const Icon1 = styled.img`
${setIconProps('absolute', '5vw', '1rem', '3rem', '2.5rem')}
`
const Icon2 = Icon1.extend`
right: 0rem;
`

export { Title, Subtitle, Slogan, Home, Icon1, Icon2 }
