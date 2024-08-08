import React from 'react'
import styled from 'styled-components'

export const Loader: React.FunctionComponent = ({ children }) => (
  <LoaderContainer>
    <ActivityIndicator />
    {children}
  </LoaderContainer>
)

const ActivityIndicator = styled.div`
  width: 98%;
  margin: 5px auto;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  animation: loading 1s linear infinite alternate;

  @keyframes loading {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }
`

const LoaderContainer = styled.div``
