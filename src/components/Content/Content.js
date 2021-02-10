import createElement from '../../lib/createElement'
import './Content.css'

export default function Content(...children) {
  return createElement('main', { className: 'Content' }, ...children)
}
