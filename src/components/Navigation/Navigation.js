import createElement from '../../lib/createElement'
import './Navigation.css'

export default function Navigation(onNavigate) {
  const el = createElement('nav', { className: 'Navigation' })
  return el
}
