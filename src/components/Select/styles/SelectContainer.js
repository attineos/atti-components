import styled from 'styled-components'

const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
  height: 36px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  &:after {
    content: '∨';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 1;
    width: 30px;
    height: 32px;
    border-left: 2px solid white;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding-bottom: 3px;
    box-sizing: border-box;
  }
`

export default SelectContainer
