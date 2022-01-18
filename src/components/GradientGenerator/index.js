import {Component} from 'react'

import {ContainerOne, FirstcolorInput, ParagraphText} from './styledComponents'

import './index.css'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeid: gradientDirectionsList[0].value,
    firstcolor: '#8ae323',
    secondcolor: '#014f7b',
    firstcolorone: '#8ae323',
    secondcolorone: '#014f7b',
    activeidone: gradientDirectionsList[0].value,
  }

  FirstInputColor = eventone => {
    this.setState({firstcolor: eventone.target.value})
  }

  SecondInputColor = event => {
    this.setState({secondcolor: event.target.value})
  }

  selectedValuegradient = value => {
    this.setState({activeid: value})
  }

  onGenerateBtn = () => {
    const {activeid, firstcolor, secondcolor} = this.state
    this.setState({
      activeidone: activeid,
      firstcolorone: firstcolor,
      secondcolorone: secondcolor,
    })
  }

  valueofcolor = () => {
    const {activeidone, firstcolorone, secondcolorone} = this.state
    return `to ${activeidone},${firstcolorone},${secondcolorone}`
  }

  render() {
    const {
      firstcolor,
      secondcolor,
      firstcolorone,
      secondcolorone,
      activeidone,
      activeid,
    } = this.state
    return (
      <ContainerOne
        datavalue={this.valueofcolor()}
        active1={activeidone}
        first={firstcolorone}
        second={secondcolorone}
        data-testid="gradientGenerator"
      >
        <h1 className="heading">Generate a CSS Color Gradient</h1>
        <ParagraphText>Choose Direction</ParagraphText>
        <ul className="unorderlistone">
          {gradientDirectionsList.map(eachone => (
            <GradientDirectionItem
              element={activeid === eachone.value}
              key={eachone.directionId}
              eachone={eachone}
              selectedValuegradient={this.selectedValuegradient}
            />
          ))}
        </ul>
        <p className="paragraph">Pick the Colors</p>
        <div className="containercoolor-text-input-element">
          <div className="m-3">
            <p className="colorparagraph">{firstcolor}</p>
            <FirstcolorInput
              type="color"
              onChange={this.FirstInputColor}
              color1={firstcolor}
            />
          </div>
          <div className="m-3">
            <p className="colorparagraph">{secondcolor}</p>
            <FirstcolorInput
              type="color"
              onChange={this.SecondInputColor}
              color2={secondcolor}
            />
          </div>
        </div>
        <button
          type="button"
          className="mt-3 generatebuttonstyling"
          onClick={this.onGenerateBtn}
        >
          Generate
        </button>
      </ContainerOne>
    )
  }
}

export default GradientGenerator
