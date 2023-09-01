import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

// const Header = (props) => {
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

    return (
   <header className='header'>
    
    {/* <h1 style={{color: 'red', backgroundColor:'black'}}>{title}</h1> */}
    {/* <h1 style={headingStyle}>{title}</h1> */}
    <h1>{title}</h1>
    {location.pathname === '/' && (<Button 
    color={showAdd ? 'red' : 'green'} 
    text={showAdd ? 'Close' : 'Add'} 
    onClick={onAdd} 
    />)}
    {/* <Button color='green' text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> */}
    {/* <Button color='blue' text='Hello 1' />
    <Button color='red' text='Hello 2' /> */}
    {/* <h1>{props.title}</h1> */}
   </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS IN JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor:'black',
// }

export default Header
