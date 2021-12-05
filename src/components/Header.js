import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick123 = () => {
        console.log('Click123')
        alert("Hello123")
    }
    const onClick4 = () => {
        console.log('Click4')
        alert("Hello4")
    }
    return (
        <header className = 'header'>
            <h1>{props.title}</h1>
            <Button color = 'maroon' text = 'Add' onClick123 = {onClick123}/>
            <Button color = 'blue' text = 'Add' onClick123 = {onClick4}/>
        </header>
    )
}



Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


export default Header
