import styled from 'styled-components'

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: #f29400;
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;
  font-size: 1em;
  margin: 1em;
  padding: 0.45em 1em;
  border: 1px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  img.black {
    display: none;
  }
  img.white {
    display: flex;
  }

  :hover {
    background: white;
    color: #f29400;
    img.black {
      display: flex;
    }
    img.white {
      display: none;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    border: 0;
    margin: 0;
    padding: 0;
    margin-right: 10px;
  }
`

export const Title = styled.h1`
  color: white;
  font-family: Arial;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 27px;
    text-align: center;
  }
`

export const DivHeader = styled.div`
  background-color: #f29400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 70px;
`

export const Align = styled.div`
  display: flex;

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

export const Gitspan = styled.span`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`
