import createElement from '../../lib/createElement'
import './Card.css'

export default function Card(...personData) {
  const el = createElement('section', { className: 'Card' }, ...personData)

  return el
}
