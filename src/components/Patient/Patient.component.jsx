import userIcon from '../../assets/user-regular.svg'
import Relative from '../Relative/Relative.component'

const Patient = ({ userInfo }) => {
    const { Gender, Name, Surname, Address, IdCard, DateOfBirth, 
        Postcode, ContactNumber1, ContactNumber2, NextOfKin, Medical } = userInfo

    return(
        <div className='bg-gray-200 rounded p-4'>
            <div className='flex'>
                <img src={userIcon} alt="user icon" className='w-8 h-8 m-4' />
                <div>
                    <h2 className='font-bold text-2xl'>{Name} {Surname}</h2>
                    <h3 className='text-gray-800 text-sm'>{Gender}</h3>
                </div>
            </div>
            <div className='mb-2'>
                <h3 className='text-xl text-bold'>General Info: </h3>               
                <div className='pl-4 font-medium text-lg py-2'>
                    <div>Idcard: {IdCard}</div>
                    <div>Birthday: {DateOfBirth}</div>
                    <div>Address: {Address}</div>
                    <div>Postcode: {Postcode}</div>
                    <div>Contact Numbers: {ContactNumber1}, {ContactNumber2}</div>
                </div>
            </div>
            <details>
                <summary className='text-xl text-bold'>Close Relatives</summary>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 gap-x-4'>
                    {NextOfKin.map(relative => (
                        <Relative relative={relative} key={relative.IdCard} />
                    )) }
                </div>
            </details>
            <details>
                <summary className='text-xl'>Medical Information</summary>
                <article>
                    {Medical.Conditions.map(condition =>(
                        <div className="text-lg mt-2">
                            Condition: 
                            <span className='font-bold ml-2'>{condition.Name}</span>
                        </div>
                    ))}
                    {Medical.Alergies.map(allergy =>(
                        <div className="text-lg">
                           Allergies: 
                            <span className='font-bold ml-2'>{allergy.Name}</span>
                        </div>
                    ))}
                    {Medical.Medication.map(medication => (
                        <div className='text-lg'>
                            <div>
                                Medication: 
                                <span className='font-bold ml-2'>{medication.Name}</span>
                            </div>
                            <div>
                                Start Date: 
                                <span className='font-bold ml-2'>{medication.StartDate}</span>
                            </div>
                            { medication.EndDate && 
                                <div>
                                    End Date: 
                                    <span className='font-bold ml-2'>{medication.EndDate}</span>
                                </div>
                            }
                        </div>
                    ))}
                </article>
            </details>
        </div>
    )
}

export default Patient