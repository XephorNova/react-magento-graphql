import Table from "./components/Table";
import { useQuery } from "urql";
import GET_COUNTRIES from "./graphql/queries/getCountries";
import { useEffect, useState } from "react";

function App() {
  // const [error, setError] = useState(false);
  // const [fetching, setLoading] = useState(true)
  // const [data, setData] = useState([])
  const [result, reexecuteQuery] = useQuery({
    query: GET_COUNTRIES,
  });
  const { data, fetching, error } = result;
  console.log(data)
  // useEffect(() => {
  //   fetch('https://magentopractice.m2dev.invanos.net/kagento/graphql', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: `{
  //         countries {
  //           full_name_english
  //           full_name_locale
  //           id
  //           three_letter_abbreviation
  //           two_letter_abbreviation
  //         }
  //       }`
  //     })
  //   }).then((responseData) => {
  //     responseData.json().then((d) => {
  //       setData(d)
  //       setLoading(false);
  //     })
  //   }).catch((e) => {
  //     setLoading(false)
  //     setError(true);
  //     console.log(e)
  //   })
  // },[])
  if(fetching) {
    return <h1>Loading...</h1>
  }
  if(error) {
    return <h1>Error Occured</h1>
  }
  return (
    <Table  keys={Object.keys(data.countries[0])} jsonData={data.countries}/>
  );
}

export default App;
