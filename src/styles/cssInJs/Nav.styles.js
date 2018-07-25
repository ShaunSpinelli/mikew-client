import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { setButtonProps} from './Mixins.styles';

const Navbar = styled.div`
    height: 11rem;
    position: relative;
    top: 0;
    width: 100%;
    line-height: 4rem;
    background-color: #282727;
    transition: 0.4s;
    text-align: center;
`
const StyledLink = styled(NavLink)`
    background-color: #48474A;
    padding: 10px 10px;
    margin-left: 1rem;
    vertical-align: middle;
    text-decoration: none;
    color: white;
    transition: 0.4s;
    &:hover {
        margin-left: 1.5rem;
        vertical-align: middle;
        text-decoration: none;
        background-color: yellow;
        color: black;
        }
        
`
const FirstStyledLink = StyledLink.extend`
    background-color: #282727;
    postion: fixed;
    display: block;
    margin-left: 0;
    &:hover {
        margin-left: 0;
        background-color: #282727;
  `

const Button = styled.button`
    ${setButtonProps('#48474A', 'white', 'none', 'none', 'none', 'none')}
`

const Initial = styled.span`
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.first ? 'yellow' : 'white'};
    &:hover {
        color: ${props => props.first ? 'white' : 'yellow'};
        margin-left: 0;
    } 
`

export {Navbar, StyledLink, FirstStyledLink, Button, Initial};
