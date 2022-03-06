import './styling/App.css';
import { CustomDropdown } from './components/CustomDropdown';

const dummyData = [
  { label: 'Ten', value: 10 },
  { label: 'Eleven', value: 11 },
  { label: 'Twelve', value: 12 },
];

const lotsOfData = [
  { label: 'Ten', value: 10 },
  { label: 'Eleven', value: 11 },
  { label: 'Twelve', value: 12 },
  { label: 'Thirteen', value: 13 },
  { label: 'Fourteen', value: 14 },
  { label: 'Fifteen', value: 15 },
  { label: 'Sixteen', value: 16 },
  { label: 'Seventeen', value: 17 },
  { label: 'Eighten', value: 18 },
];
const dummyTitle = 'Age';

const App = () => {
  return (
    <div>
      <header className="app-header">
        <CustomDropdown options={dummyData} title={dummyTitle} />
        <CustomDropdown
          isMultiple={true}
          options={lotsOfData}
          title={dummyTitle}
        />
      </header>
    </div>
  );
};

export default App;
