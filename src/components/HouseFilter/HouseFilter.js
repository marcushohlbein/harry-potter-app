import createElement from '../../lib/createElement'
import Button from '../Button/Button'
import './HouseFilter.css'

export default function HouseFilter(onFilterByHouse) {
  const houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Huffelpuff']

  const buttons = houses.map(house => {
    const button = Button(house, () => {
      onFilterByHouse(house)
      button.toggle()
    })
    return button
  })

  return createElement('section', { className: 'HouseFilter' }, ...buttons)
}
