import styled, { css } from 'styled-components'

const setTextProps = (size, weight, colour) => css`
  font-size: ${size};
  font-weight: ${weight};
  color: ${colour};
  margin: 0;
  padding: 0.35rem;
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
    ${setTextProps('2em','300','yellow')}
`
const Subtitle = styled.h2`
    padding: 0.75em;
    ${setTextProps('1em','300','white')}
`

  export {setTextProps, setIconProps, Title, Subtitle}