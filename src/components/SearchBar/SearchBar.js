import createElement from '../../lib/createElement'
import './SearchBar.css'

export default function SearchBar(placeholder) {
  const input = createElement('input', {
    type: 'search',
    className: 'SearchBar',
    placeholder: placeholder,
  })

  const iconSpan = createElement('span', { className: 'icon' })
  input.append(iconSpan)
  const icon = createElement('i', { className: 'fas fa-search' })
  iconSpan.append(icon)
  return input
}
