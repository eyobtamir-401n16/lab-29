import React from 'react';
import { connect } from 'react-redux';



const count = (props) => {

console.log('props', props.count)

return(
  <>
  <h3> count </h3>
  </>
)

}
const mapStateToProps = (state) => {
  return {
      count: state.count,
  };
};


export default connect(mapStateToProps)(count);
