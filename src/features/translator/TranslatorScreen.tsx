import React from 'react'
import styled from 'styled-components'
import {
  Confidence,
  ExchangeLanguage,
  Loader,
  SelectLanguage,
  TextCounter,
  TextInput,
} from 'lib/components'

export const TranslatorScreen: React.FunctionComponent = () => {
  return (
    <Container>
      <TranslatorContainer>
        <InputContainer>
          <SelectLanguage />
          <TextInput />
          <Loader />
          <InputFooter>
            <Confidence />
            <TextCounter />
          </InputFooter>
        </InputContainer>
        <ExchangeLanguage />
        <InputContainer>
          <SelectLanguage />
          <TextInput />
          <Loader />
        </InputContainer>
      </TranslatorContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${({ theme }) => theme.colors.typography};
`
const TranslatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const InputFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
