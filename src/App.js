import patientInfo from './patient.json'
import Patient from './components/Patient/Patient.component';

function App() {
  return (
   <div className="m-8 font-sans">
      <h1 className='text-3xl text-center font-semibold'>
        Information About Patients:
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-2 gap-4 mt-8'>
        {patientInfo.map(userInfo => (
          <Patient userInfo={userInfo} key={userInfo.Id} />
        ))}
      </div>
   </div>
  );
}

export default App;
