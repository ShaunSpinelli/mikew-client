import styled, { css } from 'styled-components'
import { setTextProps, setImgProps} from './Mixins.styles';

const Name = styled.h3`
${setTextProps('2rem', '500', 'white')}
`
const Img = styled.img`
  ${setImgProps('50%','180px', '180px', '25px', '25px')}
`
export { Name, Img }