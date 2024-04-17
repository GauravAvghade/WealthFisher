import { useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import BoxRegistration from '@/components/BoxRegistration';
import FlexBetween from '@/components/FlexBetween';
import StyledInput from '@/components/StyledInput';
import StyledButton from '@/components/StyledButton';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { palette } = useTheme();
    const navigate = useNavigate(); // Initialize navigate function
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = formData; 
        axios.post('http://localhost:1337/login', { email, password }) // Replace '<your_api_endpoint>' with your actual API endpoint
            .then(result => {
                console.log(result)
                if(result.data === "success") {
                    navigate('/dashboard')
                } 
             }) // Corrected 'console' spelling
            .catch(err => console.log(err)); // Corrected 'console' spelling
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', 
                width: '100%', 
            }}
        >
            <BoxRegistration>
                <FlexBetween gap="1rem" alignItems="center"> {/* Flex container to align items */}
                    <StyledInput    
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Enter Email'
                    />
                </FlexBetween>

                <FlexBetween gap="1rem" alignItems="center" >
                    <StyledInput    
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        type="password"
                        placeholder='Enter Password'  
                    />
                </FlexBetween>

                <StyledButton onClick={handleLogin}>Login</StyledButton> {/* Button to trigger login action */}
                <Button sx={{
                    backgroundColor: "transparent",
                    color: palette.primary.main
                    }}
                >Forgot password?</Button>

                <FlexBetween paddingBottom="0" paddingTop="0" marginTop="0" marginBottom="0" >
                    <Typography color = {palette.primary[100]} variant="body1">Dont have an account?</Typography>
                    <Button sx={{
                        backgroundColor: "transparent",
                        color: palette.primary.main
                        }}
                        onClick={() => window.location.href = "/signup"}
                >Sign Up</Button>
                </FlexBetween>

            </BoxRegistration>
        </Box>
    );
};  

export default Login;
