import styled, { css } from 'styled-components'
import { setButtonProps} from './Mixins.styles';

const Button = styled.button`
    ${setButtonProps('#181818', 'white', 'black', 'yellow', '2px solid yellow', '2px solid #48474A;')}
    &:hover {
        border: 2px solid yellow;
    }
`
export { Button }