import React from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/pt-br'
import Logo from '../../Assets/logo.png'
import { colors } from '../../Constants/Colors'
import { BASE_URL } from '../../Constants/Urls'
import useRequestData from '../../Hooks/UseRequestData'
import Background from '../../Components/Background/Background'
import { Container, Main, SectionRight, Info, Select, LogoAlign, Footer, P } from "./Styled"

const HomePage = () => {
  const [lotteries] = useRequestData([], `${BASE_URL}/loterias`)
  const [contests] = useRequestData([], `${BASE_URL}/loterias-concursos`)
  const [raffleId, setRaffleId] = React.useState([])
  const [selectValue, setSelectValue] = React.useState('0')

  const contestsId = contests.filter((lot) => lot.loteriaId == selectValue).map((lot) => lot.concursoId)
  const color = colors.filter((lot) => lot.id == selectValue).map((lot) => lot.color)

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/concursos/${contestsId?.[0]?.contestsId === undefined ? 2359 : contestsId?.[0]?.contestsId}`)
      .then((response) => { setRaffleId([response.data]) })
      .catch((error) => { })
  }, [selectValue])

  return (
    <Container>
      <Main>
        <Background fill={color} />

        <Info>
          <Select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
            {lotteries.map((lot) => (<option value={lot.id} key={lot.id}>{lot.nome.toUpperCase()}</option>))}
          </Select>

          {raffleId.map(lot => (
            <><LogoAlign>
              <img src={Logo} alt="Logo" />
              {colors.filter((lot) => lot.id == selectValue).map((lot) => (<span>{lot.name.toLocaleUpperCase()}</span>))}
            </LogoAlign>

              <Footer>
                <p>CONCURSO</p> <span>{lot.id} - {moment(`${lot.data}`).format('L')}</span>
              </Footer></>
          ))}
        </Info>

        <SectionRight>
          <ul> {raffleId.map(lot => lot.numeros.map(num => (<li><strong>{num}</strong></li>)))}</ul>
          <P> Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</P>
        </SectionRight>

      </Main>
    </Container>
  )
}
export default HomePage