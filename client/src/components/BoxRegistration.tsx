import { Box } from "@mui/material";
import { styled } from "@mui/system";

const BoxRegistration = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: "1rem",
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",
  '& > *': {
    marginBottom: '1rem', //Margin for all childrens inside it 
  },
}));

export default BoxRegistration;
