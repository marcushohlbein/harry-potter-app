import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import Content from './components/Content'
import Grid from './components/Grid/Grid'
import IconButton from './components/IconButton/IconButton'
import SearchBar from './components/SearchBar'
import createElement from './lib/createElement'
import getCharacters from './services/getCharacters'

export default function App() {
  const grid = Grid()
  document.body.append(grid)

  const header = AppHeader('Harry Potter App')
  const content = Content()
  const searchContainer = createElement('div', { className: 'searchContainer' })
  const searchbar = SearchBar('Search Character ...', onTypeSearch)
  const sortButton = IconButton('sort-alpha-down', onClick)
  searchContainer.append(searchbar, sortButton)
  grid.append(header, searchContainer, content)

  const characters = []

  getCharacters()
    .then(data => {
      characters.push(...data)
      createCards(characters)
    })
    .catch(error => console.log(error))

  function createCards(characters) {
    const cards = characters.map(character =>
      Card(character.name, character.house)
    )
    content.innerHTML = ''
    content.append(...cards)
  }

  function onTypeSearch(searchString) {
    const filteredList = characters.filter(character =>
      character.name.toLowerCase().includes(searchString.toLowerCase())
    )
    createCards(filteredList)
  }

  function onClick(order) {
    const sortedList = characters.sort((a, b) => {
      if (order === 'ASC') {
        return a.name > b.name
      } else {
        return a.name < b.name
      }
    })
    createCards(sortedList)
  }
}
