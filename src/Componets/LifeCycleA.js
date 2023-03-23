import React from 'react';
 
// in this component we can learn aboutcomponent life cycle
// 1) component mounting lifecycle (LifeCycleA Component)
// 2)
//  3)
//  4)
class LifeCycleA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'chandru',
    };
    console.log('lifecycleA constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleA static method');
    return null;
  }
  render() {
    console.log('LifeCycleA render method');
    return <div>Hi from lifecycleA render method</div>;
  }
}
export default LifeCycleA;
