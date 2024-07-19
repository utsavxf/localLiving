import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit, Preview } from '@mui/icons-material';
import { useValue } from '../../../context/ContextProvider';
import { deleteRoom } from '../../../actions/room';
import { useNavigate } from 'react-router-dom';

const RoomsActions = ({ params }) => {
  const {
    dispatch,
    state: { currentUser },
  } = useValue();

    
  const navigate = useNavigate(); // Add this line to get the navigation function

  const handleDelete = async () => {
    await deleteRoom(params.row, currentUser, dispatch);
  };

  return (
    <Box>
      <Tooltip title="View room details">
        <IconButton
          onClick={() => dispatch({ type: 'UPDATE_ROOM', payload: params.row })}
        >
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this room">
        <IconButton onClick={() => {}}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this room">
        <IconButton
          onClick={handleDelete}
        >
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default RoomsActions;