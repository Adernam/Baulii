import React, { useEffect, useState } from "react";
import styled from "styled-components";


const DivApp = styled.div`
  background: linear-gradient(#414345, #232526);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CenterDiv = styled.div`
  /* background-color: blue; */
  height: 400px;
  width: 410px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const DivContainers = styled.div`
  margin: 50px;
  display: flex;
  gap: 50px;
`

const Ipt = styled.input`
  width: 50px;
  height: 30px;
`

const DivA = styled.div`
  width: 126px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const DivB = styled.div`
  width: 126px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

const Btn = styled.button`
  margin-left: 165px;
  height: 30px;
  width: 80px;
  border-radius: 8px;
  background-color: white;
`

const DivRes = styled.div`
  width: 126px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 138px;
  margin-top: 35px;
`

const ResP = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: white;
`

const DivDev = styled.div`
  /* background-color: yellow; */
  /* width: 100%; */
  margin-top: 50vh;

  @media screen and (max-height: 815px) {
    margin-top: 25vh;
    /* margin-left: 60px; */
  }

  @media screen and (max-height: 670px) {
    margin-top: 15vh;
  }
`


const P = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Tapestry&display=swap');
  /* font-family: 'Tapestry', sans-serif; */
  color: #FFFF;
  margin-bottom: 100px;
`


function App() {

  const [c1, setC1] = useState("")
  const [c2, setC2] = useState("")
  const [c3, setC3] = useState("")
  const [c4, setC4] = useState("")
  const [c5, setC5] = useState("")
  const [c6, setC6] = useState("")
  const [c7, setC7] = useState("")
  const [c8, setC8] = useState("")
  const [c9, setC9] = useState("")
  const [c10, setC10] = useState("")
  const [c11, setC11] = useState("")
  const [c12, setC12] = useState("")
  const [r1, setR1] = useState("")
  const [r2, setR2] = useState("")
  const [r3, setR3] = useState("")
  const [r4, setR4] = useState("")
  const [r5, setR5] = useState("")
  const [r6, setR6] = useState("")


  const calcular = () => {
    const a = c1 * c5
    const b = c2 * c7
    const c = c1 * c6
    const d = c2 * c8
    const e = c3 * c5
    const f = c4 * c7
    const g = c3 * c6
    const h = c4 * c8

    setR1(a + b)
    setR2(c + d)
    setR3(e + f)
    setR4(g + h)
  }

  const onChangeC1 = (event) => {
    setC1(event.target.value)
  }

  const onChangeC2 = (event) => {
    setC2(event.target.value)
  }

  const onChangeC3 = (event) => {
    setC3(event.target.value)
  }

  const onChangeC4 = (event) => {
    setC4(event.target.value)
  }

  const onChangeC5 = (event) => {
    setC5(event.target.value)
  }

  const onChangeC6 = (event) => {
    setC6(event.target.value)
  }

  const onChangeC7 = (event) => {
    setC7(event.target.value)
  }

  const onChangeC8 = (event) => {
    setC8(event.target.value)
  }

  return (
    <DivApp>
      <CenterDiv>
        <DivContainers>
          <DivA>
            <Ipt type="number" value={c1} onChange={onChangeC1}></Ipt>
            <Ipt type="number" value={c2} onChange={onChangeC2}></Ipt>
            <Ipt type="number" value={c3} onChange={onChangeC3}></Ipt>
            <Ipt type="number" value={c4} onChange={onChangeC4}></Ipt>
          </DivA>
          <DivB>
            <Ipt type="number" value={c5} onChange={onChangeC5}></Ipt>
            <Ipt type="number" value={c6} onChange={onChangeC6}></Ipt>
            <Ipt type="number" value={c7} onChange={onChangeC7}></Ipt>
            <Ipt type="number" value={c8} onChange={onChangeC8}></Ipt>
          </DivB>
        </DivContainers>
        <Btn onClick={calcular}>Calcular</Btn>
        <DivRes>
          <ResP>{r1}</ResP>
          <ResP>{r2}</ResP>
          <ResP>{r3}</ResP>
          <ResP>{r4}</ResP>
        </DivRes>
      </CenterDiv>
      <DivDev>
        <P>Dev: Adernam F. Bauli</P>
      </DivDev>
    </DivApp>
  );
}

export default App;