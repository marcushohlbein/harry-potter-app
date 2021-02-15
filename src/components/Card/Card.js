import createElement from '../../lib/createElement'
import './Card.css'

export default function Card(name, house) {
  function getHouseColor(house) {
    if (house === 'Gryffindor') {
      return '#EF5350'
    } else if (house === 'Huffelpuff') {
      return '#FED47E'
    } else if (house === 'Slytherin') {
      return '#8AC185'
    } else if (house === 'Ravenclaw') {
      return '#1E88E5'
    }
  }

  const el = createElement(
    'section',
    {
      className: 'Card',
      backgroundColor: getHouseColor(house),
    },
    name
  )

  return el
}
