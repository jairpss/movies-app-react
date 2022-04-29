import {useEffect} from 'react'

//API key  343d649a
const API_URL = 'https://www.omdbapi.com?apikey=343d649a'

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <h1>App</h1>
  );
}

export default App;
