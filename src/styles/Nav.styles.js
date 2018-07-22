import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = styled.div`
    height: 100px;
    position: relative;
    top: 0;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    background-color: var(--dark-grey);
    transition: 0.4s;
`
const StyledLink = styled(NavLink)`
    border: 1px white solid;
    padding: 10px;
    margin-left: 3rem;
    vertical-align: middle;
    text-decoration: none;
    color: white;
    transition: 0.4s;
    &:hover {
        margin-left: 3rem;
        vertical-align: middle;
        text-decoration: none;
        color: yellow;
        }
`
const FirstStyledLink = StyledLink.extend`
    border: none;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 700;
    float: left;
    color: yellow;
    &:hover {
        color: white;
        }
`

const Button = styled.button`
    margin-left: 3rem;
    vertical-align: middle;
    text-decoration: none;
    color: white;
    transition: 0.4s;
    &:hover {
        margin-left: 3rem;
        vertical-align: middle;
        text-decoration: none;
        color: var(--aqua-color);
        }
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;  
`



export {Navbar, StyledLink, FirstStyledLink, Button};
