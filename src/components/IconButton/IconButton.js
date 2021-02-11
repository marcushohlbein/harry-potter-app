import createElement from '../../lib/createElement'
import './IconButton.css'

export default function IconButton(iconName) {
  const button = createElement('button', { className: 'IconButton' })
  const icon = createElement('img', { className: `fas ${iconName}` })

  button.append(icon)
  return button
}
