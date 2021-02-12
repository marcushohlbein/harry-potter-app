import createElement from '../../lib/createElement'
import './SearchBar.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function SearchBar(placeholder, onTypeSearch) {
  const input = createElement('input', {
    type: 'search',
    className: 'SearchBar',
    placeholder: placeholder,
  })

  const iconDiv = createElement('div', { className: 'icon' })
  const icon = createElement('i', { className: 'fas fa-search icon' })

  input.append(iconDiv)
  iconDiv.append(icon)

  input.addEventListener('input', e => {
    const searchString = e.target.value
    onTypeSearch(searchString)
  })

  return input
}
