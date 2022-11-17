import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Folder, FamilyDetails, FamilyForm } from './components';
import { setFamilyData, toggleForm } from './features';

function App() {
  const dispatch = useDispatch()
  const { family_data, selected_folder, is_form } = useSelector((state) => state.familydata)

  useEffect(() => {
    dispatch(setFamilyData())
  }, [dispatch])




  console.log("Selected Folder: ", selected_folder)

  return (
    <div>
      <Folder explorer={family_data} />
      {selected_folder && <FamilyDetails family_details={selected_folder} />}
      {is_form && <FamilyForm />}
      {/* <button onClick={() => addToFamily(selected_folder)}>Add family</button> */}
      <button onClick={() => dispatch(toggleForm())}>Add family</button>
    </div >
  );
}

export default App;
