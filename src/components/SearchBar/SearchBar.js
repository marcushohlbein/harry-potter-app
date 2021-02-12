import createElement from '../../lib/createElement'
import './SearchBar.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default function SearchBar(placeholder, onTypeSearch) {
  const el = createElement('input', {
    type: 'search',
    className: 'SearchBar',
    placeholder: placeholder,
  })

  const iconDiv = createElement('div', { className: 'icon' })
  const icon = createElement('i', { className: 'fas fa-search icon' })

  el.append(iconDiv)
  iconDiv.append(icon)

  el.addEventListener('input', e => {
    const searchString = e.target.value
    onTypeSearch(searchString)
  })

  return el
}
