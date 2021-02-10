import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import getCharacters from './services/getCharacters'

export default function App() {
  const header = AppHeader('Harry Potter App')
  document.body.append(header)

  getCharacters()
    .then(data => createCards(data))
    .catch(error => console.log(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character.name))
    document.body.append(...cards)
  }
}
