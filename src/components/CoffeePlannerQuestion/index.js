// Write your code here.
import {Component} from 'react'
import './index.css'
import QuestionOption from '../QuestionOption'

class CoffeePlannerQuestion extends Component {
  render() {
    const {getQuestionData} = this.props
    const {id, questionType, questionTitle, optionsData} = getQuestionData
    return (
      <div className="body">
        <h1>{questionTitle}</h1>
        <ul className="options">
          {optionsData.map(item => (
            <QuestionOption optionsData={item} key={item.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default CoffeePlannerQuestion
