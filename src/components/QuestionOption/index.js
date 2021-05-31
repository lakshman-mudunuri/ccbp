// Write your code here.
import {Component} from 'react'
import './index.css'

class QuestionOption extends Component {
  state = {
    i: '',
  }

  clickingCard = () => {
    const {optionsData} = this.props
    const {id} = optionsData
    this.setState({i: id})
  }

  render() {
    const {i} = this.state
    const {optionsData} = this.props
    const {id, optionTitle, description} = optionsData

    const changingColor = () => {
      if (i === id) {
        return 'changing'
      }
      return ''
    }
    const changingImg = () => {
      if (i === id) {
        return 'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
      }
      return 'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
    }

    return (
      <li
        className={`${changingColor()} options-card`}
        onClick={this.clickingCard}
      >
        <div className="i">
          <h1>{optionTitle}</h1>
          <img alt="img" src={changingImg()} className="im" />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </li>
    )
  }
}
export default QuestionOption
