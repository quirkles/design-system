import React from 'react'

import Card from './Card.jsx'
import {shallow} from "enzyme";


describe('Card component', () => {
  it('renders card with header and body', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('.card-header').length).toBe(1);
    expect(wrapper.find('.card-body').length).toBe(1);
  });
  it('renders card with title from props', () => {
    const cardTitle = "The title"
    const wrapper = shallow(<Card title={cardTitle}/>);
    expect(wrapper.find('.card-header').text()).toEqual(cardTitle);
  });
  it('constructs and renders full name from props, including middlename', () => {
    const props = {
      title: 'title',
      data: {
        firstName: 'Melene',
        middleName: 'Betty Anne',
        lastName: 'Melville',
      }
    }
    const wrapper = shallow(<Card {...props}/>);
    expect(wrapper.find('.member-name').text()).toEqual('Melene Betty Anne Melville');
  });
  it('constructs and renders full name from props, no middlename', () => {
    const props = {
      title: 'title',
      data: {
        firstName: 'Melene',
        lastName: 'Melville',
      }
    }
    const wrapper = shallow(<Card {...props}/>);
    expect(wrapper.find('.member-name').text()).toEqual('Melene Melville');
  });
  it('render a table with the number of rows equal to the number of data key value pairs including name props, no middlename', () => {
    const props = {
      title: 'title',
      data: {
        firstName: 'Melene',
        middleName: 'Betty Anne',
        lastName: 'Melville',
        membershipNo: 614818401,
        dateOfBirth: '1975-06-19T04:00:00.000',
        enrolmentDate: '2017-10-10T04:00:00.000',
        lastVisited: '2020-02-07T19:26:20.691'
      }
    }
    const wrapper = shallow(<Card {...props}/>);
    const table = wrapper.find('table');
    expect(table.length).toBe(1);
    expect(table.find('tr').length).toBe(4);
  });
  it('render a table with the number of rows equal to the number of data key value pairs minus name props, no middlename', () => {
    const props = {
      title: 'title',
      data: {
        firstName: 'Melene',
        lastName: 'Melville',
        membershipNo: 614818401,
        dateOfBirth: '1975-06-19T04:00:00.000',
        enrolmentDate: '2017-10-10T04:00:00.000',
        lastVisited: '2020-02-07T19:26:20.691'
      }
    }
    const wrapper = shallow(<Card {...props}/>);
    const table = wrapper.find('table');
    expect(table.length).toBe(1);
    expect(table.find('tr').length).toBe(4);
  });
});
