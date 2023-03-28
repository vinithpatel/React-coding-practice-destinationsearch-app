import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <li className="destination-container">
      <img className="destination-image" alt={name} src={imgUrl} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
