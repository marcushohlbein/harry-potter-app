import AppHeader from './components/AppHeader'
import Grid from './components/Grid/Grid'
import getCharacters from './services/getCharacters'

export default function App() {
  const grid = Grid()
  const header = AppHeader('Harry Potter App')

  grid.append(header)

  getCharacters()
    .then(data => console.log(data))
    .catch(error => console.log(error))
}
