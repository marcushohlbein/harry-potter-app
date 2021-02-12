import createElement from '../../lib/createElement'
import './IconButton.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default function IconButton(iconName, onClick) {
  const el = createElement('button', { className: 'IconButton' })
  const icon = createElement('i', { className: `fas fa-${iconName}` })

  el.append(icon)

  el.addEventListener('click', () => {
    if (icon.className === 'fas fa-sort-alpha-down') {
      icon.className = 'fas fa-sort-alpha-down-alt'
      onClick()
    } else {
      icon.className = 'fas fa-sort-alpha-down'
    }
    onClick()
  })

  return el
}
