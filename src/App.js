import "./App.css";
import { useCovidCountryConfirmed  } from "./hooks/use-models";

function App() {
  const { country, isError, isLoading} = useCovidCountryConfirmed("chile")
  if (isLoading) return <p> loading </p>
  if (isError) return <p>{JSON.stringify(isError)}</p>
  return <p>{country[0].Cases}</p>
}

export default App;
