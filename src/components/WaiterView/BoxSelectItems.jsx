import PropTypes from 'prop-types';
const BoxSelectItems = ({ children }) => {
    return (

        <div className="bg-white-200 shadow flex flew-row gap-x-16 mt-10 rounded-2xl p-2 mx-8">
            {children}
        </div>
    )
}
//grid grid-cols-1 grid-rows-1
export default BoxSelectItems;

BoxSelectItems.propTypes = {
    children: PropTypes.node.isRequired
}
