// Login-test.js
import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';
import renderer from 'react-test-renderer';

describe('login components',()=>{
// make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<Login />).find('form.login').exists()).toBe(true)
 });

 // within the Login components describe function
 it('renders a email input', () => {
  expect(shallow(<Login />).find('#email123').length).toEqual(1)
 });

 it('renders a password input',()=>{

    expect(shallow(<Login/>).find('#password').length).toEqual(1)
 });
 it('renders status of button',()=>{
    expect(shallow(<Login/>).find('button').prop('disabled')).toBe(true);
 });
it('renders readonly property of date',()=>{
    expect(shallow(<Login/>).find('button').prop('readOnly')).toBeFalsy();
});
it('renders required property of input',()=>{
    expect(shallow(<Login/>).find('input').prop('required')).toBe(true);
});
});




// within the Login components describe function
describe('Email input', () => {
  
  it('should respond to change event and change the state of the Login Component', () => {
   
   const wrapper = shallow(<Login />);
   wrapper.find('#email123').simulate('change', {target: {name: 'email', value: 'kritika@gmail.com'}});
   
  expect(wrapper.state('email')).toEqual('kritika@gmail.com');
  })
 });

 describe('incorrect format for email', () => {
  
  it('should respond to change event and change the state of the Login Component', () => {
   
   const wrapper = shallow(<Login />);
   wrapper.find('#email123').simulate('change', {target: {name: 'value', value: 'kritika'}});
   
  expect(wrapper.state('email')).not.toEqual('kritika');
  })
 });



describe('Password input',()=>{
    it('should respond to change event and change the state of the login copmonent',()=>{
        const wrapper=shallow(<Login/>);
        wrapper.find('#password').simulate('change',{target:{name:'password', value:'pwd'}});

        expect(wrapper.state('password')).toEqual('pwd');
    })
});
describe('placeholder for username',()=>{
    it('should render correct placeholder for mail',()=>{
        const wrapper=shallow(<Login/>);
        wrapper.find('#email123').simulate('change',{target:{name:'placeholder',value:'mail..'}});
        expect(wrapper.state('placeholder')).toEqual('mail..');
    })
});

describe('placeholder for password',()=>{
    it('should render correct placeholder for password',()=>{
        const wrapper=shallow(<Login/>);
        expect(wrapper.find('#password').at(0).props().placeholder).toEqual('password..');
    })
});



//snapshot testing for login form components
 test('when login components will change',()=>{
  const component= renderer.create(
      <Login/>
  );
  let tree=component.toJSON();
 expect(tree).toMatchSnapshot();

 });

