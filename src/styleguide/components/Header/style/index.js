import styled from 'styled-components'

export const Button = styled.button`
  background: #f29400;
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;
  font-size: 1em;
  font-family: Arial;
  margin: 1em;
  padding: 0.5em 0.75em;
  border: 1px solid white;
  border-radius: 2px;
  display: flex;
  align-items: center;

  :hover {
    background: white;
    color: #f29400;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 10px;
    padding: 8px;
  }
`

export const Title = styled.h1`
  color: white;
  font-family: Arial;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 22px;
    text-align: center;
  }
`

export const DivHeader = styled.header`
  background-color: #f29400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 70px;
  margin-left: ${window.location.href.includes('/#!/') ? '0px' : '45px'};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-left: 0;
  }
`

export const Align = styled.div`
  display: flex;
  align-items: center;
  &.left {
    justify-content: flex-start;
  }

  &.center {
    padding: 0 45px;
    position: absolute;
    width: 100%;
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    justify-content: space-between;
  }
`
