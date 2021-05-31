// Write your code here.
import {Component} from 'react'
import './index.css'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

class CoffeePlanner extends Component {
  bodySection = () => {
    const {coffeePlannerData} = this.props
    return (
      <div className="body-question-heading">
        {coffeePlannerData.map(item => (
          <CoffeePlannerQuestion key={item.id} getQuestionData={item} />
        ))}
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="image">
          <h1 className="white">Create a Plan</h1>
          <p className="white">
            We offer an assortment of the best artesian coffees from the globe
            delivered fresh to the door create your plan with this
          </p>
        </div>
        {this.bodySection()}
        <div className="b">
          <button type="button" className="btn">
            Create My Plan
          </button>
        </div>
      </div>
    )
  }
}

export default CoffeePlanner
