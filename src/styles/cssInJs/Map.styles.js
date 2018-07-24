import styled, { css } from 'styled-components'
import { setTextProps} from './Mixins.styles';

const MapFrame = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: center; 
    align-items: center;
    font-size: 1.5rem;
    line-height: 2rem;
`

const BodyText = styled.div`
    font-weight: 300;
    color: white;
    padding-left: 40px;
`
const Para = styled.p`
    text-align: left;
`
export { BodyText, Para, MapFrame }