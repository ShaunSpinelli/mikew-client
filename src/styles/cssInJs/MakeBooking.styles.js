import styled, { css } from 'styled-components'
import { setTextProps} from './Mixins.styles';

const BookingForm = styled.div`
    postion: fixed;
    display: block;
    text-align: center;
    background-color:#181818;
`

const Question = styled.h2`
    padding: 0.75em;
    ${setTextProps('.85em','300','white')}
`
const Text = styled.span`
    ${setTextProps('.75em','300','white')}
`

export {BookingForm, Question, Text }