import styled from 'styled-components'
import FakeRadio from './FakeRadio'
import HiddenInputRadio from './HiddenInputRadio'

const ContainerRadio = styled.div`
  position: relative;
  height: auto;
  cursor: pointer;

  // Use of a circle in the radio when it's checked.

  ${FakeRadio}:after {
    content: '';
    position: absolute;
    display: none;
    left: calc(${({ theme }) => theme.components.radio.sizes.widths} / 6);
    top: calc(${({ theme }) => theme.components.radio.sizes.heights} / 6);
    width: calc(${({ theme }) => theme.components.radio.sizes.widths} / 3);
    height: calc(${({ theme }) => theme.components.radio.sizes.heights} / 3);
    border: solid ${({ theme }) => theme.components.radio.colors.background};
    border-width: ${({ theme }) => theme.components.radio.sizes.widthCheckSign};
    border-radius: 50%;
  }
  // Modifications of the color background of the radio :

  &:hover > ${HiddenInputRadio} ~ ${FakeRadio} {
    background: ${({ theme }) => theme.components.radio.colors.backgroundHover};
  }

  > ${HiddenInputRadio}:checked ~ ${FakeRadio} {
    background: ${({ theme }) => theme.components.radio.colors.backgroundHover};
    &:after {
      display: block;
    }
  }
`

export default ContainerRadio
