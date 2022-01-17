import Button from './styledComponents'

// Write your code here
import './index.css'

const GradientDirectionItem = props => {
  const {eachone, selectedValuegradient, element} = props
  const {value, displayText} = eachone

  const isTrue = element ? '#ffffff' : '#334155'

  const opacity = element ? 1 : 0.5

  const TextClicked = () => {
    selectedValuegradient(value)
  }

  return (
    <li className="list-item-gradients">
      <Button
        type="button"
        onClick={TextClicked}
        bgColor={isTrue}
        opacity={opacity}
      >
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
