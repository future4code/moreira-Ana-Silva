import React from 'react'
import UseRequestData from '../../Hooks/UseRequestData'
import { BASE_URL } from '../../Constants/Urls'
import SelectSorteios from '../../Components/SelectSorteios/SelectSorteios'

const MegaSena = () => {
  // const [loterias, setLoterias, carregando] = UseRequestData([], `${BASE_URL}/loterias`)
  const [loteriasConcursos] = UseRequestData([], `${BASE_URL}/loterias-concursos`)
  const [concursos] = UseRequestData([], `${BASE_URL}/concursos/2359`)
  console.log(loteriasConcursos)

  return (
    <>
      <SelectSorteios />

      <img alt={"Logo Mega-Sena"} />
      <h2>MEGA-SENA</h2>
      <p>Concurso Nº {loteriasConcursos.concursoId}</p>
      <p>{concursos.data}</p>

      <div>{concursos.numeros}</div>

      <p> Este sorteio é meramente ilustrativo e não possui ligação alguma com a CAIXA.</p>
    </>
  )
}

export default MegaSena
