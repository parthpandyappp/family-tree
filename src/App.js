import './App.css';
import { Folder } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { setFamilyData, updateFamilyData } from './features';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  const { family_data, selected_folder } = useSelector((state) => state.familydata)

  useEffect(() => {
    dispatch(setFamilyData())
  }, [])


  const addToFamily = (folder) => {
    dispatch(updateFamilyData(folder))
  }

  console.log("DATA: ", family_data)

  return (
    <div>
      <Folder explorer={family_data} />
      <button onClick={() => addToFamily(selected_folder)}>Add family</button>
    </div >
  );
}

export default App;
