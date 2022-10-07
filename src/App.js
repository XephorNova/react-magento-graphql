import Table from "./components/Table";
import { useQuery } from "@apollo/client";
import GET_COUNTRIES from "./graphql/queries/getCountries";

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  console.log(data)
  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error) {
    return <h1>Error Occured</h1>
  }
  return (
    <Table  keys={Object.keys(data.locations[0])} jsonData={data.locations}/>
  );
}

export default App;
