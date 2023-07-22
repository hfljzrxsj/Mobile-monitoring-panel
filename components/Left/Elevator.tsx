import * as React from 'react';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import styleModule from './Elevators.module.scss';
interface Props {
  index: number
}
function Elevator(props: Props): JSX.Element {
  const { index } = props;
  const level = 5;
  const height = '50px';
  return (
    <React.StrictMode>
      <Box
        style={{ '--height': height }}
        sx={{
          top: `calc(.8px + (50px + 1.6px) * ${level})`,
          minHeight: `calc(${height} + .8px)`
        }}
        className={styleModule.elevator}
      >{index}
      </Box>
    </React.StrictMode>
  );
}
function mapStateToProps(state: boolean[]) {
  return state;
}
export default connect(
  mapStateToProps,
)(Elevator);