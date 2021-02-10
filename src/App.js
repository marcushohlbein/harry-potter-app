import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import Content from './components/Content'
import Grid from './components/Grid/Grid'
import Navigation from './components/Navigation'
import SearchBar from './components/SearchBar'
import getCharacters from './services/getCharacters'

export default function App() {
  const grid = Grid()
  document.body.append(grid)

  const header = AppHeader('Harry Potter App')
  const content = Content()
  const searchbar = SearchBar('Search Character ...', onTypeSearch)
  content.append(searchbar)
  const navigation = Navigation()
  grid.append(header, content, navigation)

  const characters = []

  getCharacters()
    .then(data => {
      characters.push(...data)
      createCards(characters)
    })
    .catch(error => console.log(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character.name))
    content.append(...cards)
  }

  function onTypeSearch(searchString) {
    console.log(searchString)
    const filteredList = characters.filter(character =>
      character.name.toLowerCase().includes(searchString)
    )
    createCards(filteredList)
  }
}
