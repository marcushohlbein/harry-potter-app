import createElement from '../../lib/createElement'
import './IconButton.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function IconButton(iconName) {
  const el = createElement('button', { className: 'IconButton' })
  const icon = createElement('i', { className: `fas fa-${iconName}` })

  el.append(icon)

  return el
}
