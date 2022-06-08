import styled from 'styled-components'

export const TituloTrailer = styled.div`
    margin-top: 60px;
    margin-left: 240px;
    font-size: 25px;
    font-weight: bold;
    color:#131313;
`
export const Player = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
iframe {
  position: absolute;
  top: 20px;
  left: 14%;
  bottom: 0;
  right: 0;
  width: 60%;
  height: 60%;
  border: none;
  border-radius: 5px;
}
`
