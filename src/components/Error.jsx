/* eslint-disable react/prop-types */
const Error = ({children}) => {
  return (
    <div>

            <div className="bg-red-800 text-white p-3 uppercase text-center font-bold mb-3 rounded-md">
                {children}
            </div>

    </div>
  )
}

export default Error