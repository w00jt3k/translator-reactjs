import { useTranslations } from 'lib/hooks'
import styled from 'styled-components'

export const Footer = () => {
  const T = useTranslations()
  const year = new Date().getFullYear()

  return (
    <FooterContainer>
      <CodemaskContainer>
        &copy; {year} {T.companyName}
      </CodemaskContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.foreground};
  align-items: center;
  padding: 0 15px;
`
const CodemaskContainer = styled.div`
  color: ${({ theme }) => theme.colors.typography};
`
