// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails
    return (
      <li className="list-container-two">
        <img src={imageUrl} alt={appName} className="logo" />
        <p>{appName}</p>
      </li>
    )
  }
}
export default AppItem
