import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1 style={headingStyle}>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// Styling in CSS
const headingStyle = {
    color: 'blue',
    backgroundColor: 'Grey',
}

export default Header
