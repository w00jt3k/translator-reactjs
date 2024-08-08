import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Confidence,
  ExchangeLanguage,
  Loader,
  Message,
  SelectLanguage,
  TextCounter,
  TextInput,
} from 'lib/components'
import { useSupportedLanguages } from './useSupportedLanguages'
import { Language } from 'lib/models'
import { useTranslations } from 'lib/hooks'

export const TranslatorScreen: React.FunctionComponent = () => {
  const T = useTranslations()
  const [languages, setLanguages] = useState<Array<Language>>([])
  const {
    isLoading,
    hasError,
    fetch: getSupportedLanguages,
  } = useSupportedLanguages(setLanguages)

  useEffect(() => {
    //getSupportedLanguages()
  }, [])

  if (isLoading) {
    return (
      <Loader>
        <LoaderText>{T.components.screen.translator.loading}</LoaderText>
      </Loader>
    )
  }

  if (hasError) {
    return (
      <Message
        message="Something went wrong"
        withButton={true}
        onClick={() => getSupportedLanguages()}
      />
    )
  }

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
          <InputFooter>
            <Confidence />
            <TextCounter />
          </InputFooter>
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

const LoaderText = styled.div`
  color: ${({ theme }) => theme.colors.typography};
  margin-top: 10px;
  text-align: center;
`
