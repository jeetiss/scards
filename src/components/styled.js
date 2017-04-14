import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: 0px 1px 5px 0px #5e6069;
  transition: box-shadow .35s ease;

  &:hover {
    box-shadow: #5e6069 0px 10px 20px -5px;
  }
`

export const AllCenter = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
