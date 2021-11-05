

const Options = ({ handleOption, pending, delivered }) => {
    return (
        <div className='flex flex-row justify-center mb-4 mt-2 py-4'>
            <span className='hover:text-lime-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50' onClick={() => handleOption(pending)}>{pending}</span>
            <span className='text-teal-500 px-14'>|</span>
            <span className='hover:text-lime-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50' onClick={() => handleOption(delivered)}>{delivered}</span>
        </div>
    )
}

export default Options;