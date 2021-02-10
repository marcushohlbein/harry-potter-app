import AppHeader from './components/AppHeader'
import Card from './components/Card/Card'
import Content from './components/Content'
import Navigation from './components/Navigation'
import getCharacters from './services/getCharacters'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const content = Content()
  const navigation = Navigation()

  document.body.append(header, content, navigation)

  getCharacters()
    .then(data => createCards(data))
    .catch(error => console.log(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character.name))
    content.append(...cards)
  }
}
