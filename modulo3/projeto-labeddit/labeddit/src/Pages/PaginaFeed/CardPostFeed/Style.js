import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export const StyleCardContainer = styled(Card)`
    display: flex;
    background-color: #def2fe;
    flex-direction: column;
    width: 80vw;
    max-width:700px;
    margin: 20px;
`

export const StyleCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`
