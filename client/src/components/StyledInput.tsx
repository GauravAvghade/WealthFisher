import { Input } from "@mui/material";
import { styled } from "@mui/system";

const StyledInput = styled(Input)(({ theme }) => ({
  paddingLeft: "0.5rem",  
  backgroundColor: 'transparent',
  color: "white",
  width: '15rem',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "0.5rem",
  "&::placeholder": {
    color: theme.palette.primary[100],
  },
  "&:focus": {
    outline: "none",
    borderColor: theme.palette.primary.main,
  },
}));

export default StyledInput;
