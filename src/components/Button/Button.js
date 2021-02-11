import createElement from '../../lib/createElement'
import './Button.css'

export default function Button(buttonText, onClick) {
  const button = createElement('button', { className: 'Button' }, buttonText)

  button.addEventListener('click', onClick)

  function toggle() {
    button.classList.toggle('active')
  }

  function updateText(buttonText) {
    button.innerText = buttonText
  }

  return {
    button,
    toggle,
    updateText,
  }
}
