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
const setImgProps = (radius,height,width,margin1,margin2) => css`
border-radius: ${radius};
height: ${height};
width: ${width};
margin-top: ${margin1};
margin-bottom: ${margin2};
`
const setButtonProps = (bgcolour,colour,colour2,colour3,border1, border2) => css`
background-color: ${bgcolour};
color: ${colour};
margin-left: 1rem;
vertical-align: middle;
text-decoration: none;
transition: 0.4s;
background: none;
&:hover {
    margin-left: 1.5rem;
    vertical-align: middle;
    text-decoration: none;
    color: ${colour2};
    background-color: ${colour3}
    border: ${border1}
    }
border: ${border2};
font: inherit;
cursor: pointer;
outline: inherit;  
`
const Title = styled.h4`
    padding-top: 0.5em;
    ${setTextProps('2em','300','yellow')}
`
const Subtitle = styled.h2`
    padding: 0.75em;
    ${setTextProps('1em','300','white')}
`


  export {setTextProps, setIconProps, setImgProps, setButtonProps, Title, Subtitle}