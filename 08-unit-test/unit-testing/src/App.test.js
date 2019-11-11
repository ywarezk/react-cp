import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme';

describe('App', () => {
  let app;
  beforeEach(() => {
    const div = document.createElement('div');
    app = mount(<App />, {attachTo: div});
    document.body.appendChild(div);
  })

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  afterEach(() => {
    app.unmount();
  })
})


 