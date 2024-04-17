import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'black',
  padding: '0.3rem',
  borderRadius: '2rem',
  width: '15rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.main, 
    filter: 'brightness(90%)',
  },
}));

export default StyledButton;
