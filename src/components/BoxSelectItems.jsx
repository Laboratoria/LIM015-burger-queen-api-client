const BoxSelectItems = ({ children }) => {
    return (

        <div className="bg-white-200 shadow grid grid-cols-3 grid-rows-3 mt-10 rounded-2xl p-2 mx-8 justify-center">
            {children}
            {/* {children2} */}
        </div>
    )
}
export default BoxSelectItems;