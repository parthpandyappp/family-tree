import './App.css';
import { Folder } from './components';
import { familyData } from './db/familyData';

function App() {
  return (
    <div>
      <Folder explorer={familyData} />
    </div>
  );
}

export default App;
