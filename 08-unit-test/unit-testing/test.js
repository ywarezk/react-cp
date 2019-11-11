import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({ adapter: new Adapter() });

const importAll = (r) => r.keys().forEach(r)
const context = require.context('./src', true, /\.spec\.js$/);

importAll(context);