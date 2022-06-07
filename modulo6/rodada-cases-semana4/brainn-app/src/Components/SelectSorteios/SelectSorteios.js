import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const SelectSorteios = () => {
  const navigate = useNavigate()

  const handleChange = (value) => {
    navigate(`${value}`)
  }

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 185 }} size="small" variant="filled" color="secondary">
        <InputLabel >Escolha um sorteio</InputLabel>
        <Select
          label="Escolha um sorteio"
          onChange={e => handleChange(e.target.value)}
          defaultValue=""
        >
          <MenuItem value={'/'}>MEGA-SENA</MenuItem>
          <MenuItem value={'/quina'}>QUINA</MenuItem>
          <MenuItem value={'/lotoFacil'}>LOTOFÁCIL</MenuItem>
          <MenuItem value={'/lotoMania'}>LOTOMANIA</MenuItem>
          <MenuItem value={'/timeMania'}>TIMEMANIA</MenuItem>
          <MenuItem value={'/diaDeSorte'}>DIA DE SORTE</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default SelectSorteios