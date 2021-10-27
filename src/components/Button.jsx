//import PropTypes from 'prop-types';

const Button = ({ type, name, onClick }) => {

  const buttonStyles = {
    primary: 'bg-lime-300 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 my-4 text-xs sm:text-base',
    secondary: 'bg-teal-500 rounded w-28 sm:h-10 sm:w-40 h-7 ml-2 text-xs sm:text-base text-white font-semibold',
    tertiary: 'bg-teal-500 rounded w-28 sm:h-10 sm:w-40 h-7 ml-4 sm:ml-12  text-xs sm:text-base text-white font-semibold'
  }


  return (
    <button className={buttonStyles[type]} onClick={onClick}>{name}</button >
  )
}
export default Button;

// Button.propTypes = {
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired
// }