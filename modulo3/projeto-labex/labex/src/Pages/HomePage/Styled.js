import styled from "styled-components"

export const Texto = styled.span`
    color: #ffffff;
    background: black;
    font-size: 200px;
    font-family: Arial;
    text-transform: uppercase;

:before {
    content: "Labex";
    position: absolute;
    mix-blend-mode: difference;
    filter: blur(3px);
}
`
export const Labex = styled.div`
    display: inline-flex;
    filter: brightness(350%);
    overflow: hidden;
`
export const Gradiante = styled.span`
    background: linear-gradient(110.49237860445828deg, rgba(86, 216, 228,1) 5.535481770833334%,rgba(159, 1, 234,1) 96.74641927083333%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
`
export const Desvio = styled.span`
    background: radial-gradient(circle, white, black 35%) center / 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    mix-blend-mode: color-dodge;
    animation: dodge-area 3s linear infinite;

@keyframes dodge-area {
    to {
        transform: translate(50%, 50%);
    }
}
`
export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-direction: column;
    align-items: center;

`