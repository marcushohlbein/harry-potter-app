import HouseFilter from './HouseFilter'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'HouseFilter',
  component: HouseFilter,
}

const onFilterByHouse = actions('onFilterByHouse')
export const defaultHouseFilter = () => HouseFilter(onFilterByHouse)
