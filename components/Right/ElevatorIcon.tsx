import * as React from 'react';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { addElevatorFloor, removeElevatorFloor } from '../../redux/actions';
import { Dispatch } from 'redux';
interface Props {
  addElevatorFloor: (index: number) => void,
  // removeElevatorFloor: (index: number) => void,
  index: number
}
function ElevatorIcon(props: Props): JSX.Element {
  const { addElevatorFloor,
    // removeElevatorFloor,
    index } = props;
  return (
    <React.StrictMode>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          height: 100,
          bgcolor: 'background.paper',
          borderRadius: '50%',
        }}
        onClick={() => addElevatorFloor(index)}
      >
        {index}
      </Box>
    </React.StrictMode>
  );
}
// interface state {
//   count: number
// }
function mapStateToProps() {
  return null;
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addElevatorFloor: (index: number) => dispatch(addElevatorFloor(index)),
    removeElevatorFloor: (index: number) => dispatch(removeElevatorFloor(index)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ElevatorIcon);