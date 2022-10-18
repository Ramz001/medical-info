import userIcon from '../../assets/user-regular.svg'

const Relative = ({ relative }) => {
    const { Name, Surname, IdCard, ContactNumber1, ContactNumber2 } = relative
    return(
        <div className="bg-gray-100 p-4 flex flex-col gap-2 rounded my-2">
            <div className='flex items-center'>
                <img src={userIcon} alt="user icon"  className='w-10  p-2'/>
                <h2 className='font-bold'> {Name} {Surname}</h2>
            </div>
            <div>Idcard: {IdCard}</div>
            <div>Numbers: {ContactNumber1}, {ContactNumber2}</div>
        </div>
    )
} 

export default Relative