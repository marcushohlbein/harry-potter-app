import createElement from '../../lib/createElement'
import './SearchBar.css'

export default function SearchBar(placeholder, onTypeSearch) {
  const input = createElement('input', {
    type: 'search',
    className: 'SearchBar',
    placeholder: placeholder,
  })

  const iconSpan = createElement('span', { className: 'icon' })
  const icon = createElement('i', { className: 'fas fa-search' })

  input.append(iconSpan)
  iconSpan.append(icon)

  input.addEventListener('input', e => {
    const searchString = e.target.value
    onTypeSearch(searchString)
  })

  return input
}
