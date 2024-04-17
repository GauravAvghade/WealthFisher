 import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import useNavigate hook
import PixIcon from "@mui/icons-material/Pix";
import { Box, Button, Typography , useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';

const Navbar = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");

    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]} >

            {/* LEFT SIDE TOP */}
            <FlexBetween gap="0.75rem">
                <PixIcon sx={{ fontSize: "28px"}} />
                <Typography variant="h4" fontSize="16px">
                 WealthFisher
                </Typography>
            </FlexBetween>

            {/* RIGHT SIDE */}
            <FlexBetween gap="2rem">
                <Box sx={{ "&:hover": { color: palette.primary[100]}}}>
                    <NavLink 
                        to="/dashboard"
                        onClick={() => setSelected("dashboard")}
                        style={{
                            color: selected === "dashboard" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Dashboard
                    </NavLink>
                </Box>

                <Box sx={{ "&:hover": { color: palette.primary[100]}}}>
                    <NavLink 
                        to="/predictions"
                        onClick={() => setSelected("predictions")}
                        style={{
                            color: selected === "predictions" ? "inherit" : palette.grey[700],
                            textDecoration: "inherit",
                        }}
                    >
                        Predictions
                    </NavLink>
                </Box>

                <Button
                    component={NavLink}
                    to="/login"
                    sx={{
                        color: palette.grey[900],
                        backgroundColor: palette.grey[700],
                        boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
                        textDecoration: "none",
                    }}
                >
                    Login
                </Button>
            </FlexBetween>

        </FlexBetween>
    );
};  

export default Navbar;
