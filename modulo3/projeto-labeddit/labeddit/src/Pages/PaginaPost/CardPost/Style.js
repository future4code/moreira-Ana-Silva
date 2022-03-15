import styled from 'styled-components'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

export const StyleCardContainer = styled(Card)`
    display: flex;
    background-color: #def2fe;
    flex-direction: column;
    width: 80vw;
    max-width:600px;
    margin: 20px;
`
export const StyleCardContainer2 = styled.div`
    display: flex;
    background-color: #def2fe;
    flex-direction: column;
    width: 80vw;
    max-width:600px;
    border-radius: 20px 40px;
    box-shadow: 5px 5px 5px -6px;
    margin: 20px;
`
export const StyleCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`
export const StyleBotoes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

`
export const StyleConteudo = styled.div`
  display: flex;
`
export const StyleSeta = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 8px;
  flex-direction: column;
`
export const StyleConteudos = styled(Box)`
  margin-left: 15px;
  margin-bottom: 50px;
`