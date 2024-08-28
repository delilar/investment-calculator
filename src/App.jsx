import { useState } from "react";
import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTabel"

function App() {
  const [investmentData, setInvestmentData] = useState({});

  return (
    <>
      <UserInput setInvestmentData = { setInvestmentData } />
      <ResultsTable investmentData= { investmentData } />
    </>
  )
}

export default App