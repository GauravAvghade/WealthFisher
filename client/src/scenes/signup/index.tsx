import { useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import BoxRegistration from '@/components/BoxRegistration';
import FlexBetween from '@/components/FlexBetween';
import StyledInput from '@/components/StyledInput';
import StyledButton from '@/components/StyledButton';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import axios from 'axios'

const SignUp = () => {
    const { palette } = useTheme();
    const navigate = useNavigate(); // Initialize navigate function
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const { username, email, password } = formData; 
        axios.post('http://localhost:1337/users', { username, email, password }) // Replace '<your_api_endpoint>' with your actual API endpoint
            .then(result => {
                console.log(result)
                navigate('/')
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
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder='Enter Username'
                    />
                </FlexBetween>

                <FlexBetween gap="1rem" alignItems="center"> {/* Flex container to align items */}
                    <StyledInput
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Enter Email'
                    />
                </FlexBetween>

                <FlexBetween gap="1rem" alignItems="center">
                    <StyledInput
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        type="password"
                        placeholder='Enter Password'
                    />
                </FlexBetween>

                <FlexBetween gap="1rem" alignItems="center" >
                    <StyledInput
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        type="password"
                        placeholder='Confirm Password'
                    />
                </FlexBetween>

                <StyledButton onClick={handleSignUp}>Sign Up</StyledButton> {/* Button to trigger sign-up action */}

                <FlexBetween paddingBottom="0" marginBottom="0">
                    <Typography color={palette.primary[100]} variant="body1">Already have an account?</Typography>
                    <Button
                        sx={{
                            backgroundColor: "transparent",
                            color: palette.primary.main
                        }}
                        onClick={() => navigate('/login')} // Redirect to Login page on button click
                    >
                        Login
                    </Button>
                </FlexBetween>

            </BoxRegistration>
        </Box>
    );
};

export default SignUp;
