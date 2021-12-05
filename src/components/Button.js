import PropTypes from 'prop-types'



const Button = ({color, text, onClick123}) => {
    const onClick1 = () => {
        console.log('Click1')
        alert("Hello1")
    }

    return (<button 
        style = {{ backgroundColor : color}}
        className='btn' 
        onClick = {onClick123}>
            {text}
        </button>
    )
}


Button.defaultProps = {
    color: 'steelblue',
    text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick123: PropTypes.func,
}

export default Button
