import React, { useState } from 'react';
import { Card as MuiCard, CardContent, Typography, Box } from '@mui/material';
import { PortfolioData } from '../../types/portfolioData';

interface CardProps {
    data: PortfolioData;
}

const Card: React.FC<CardProps> = ({ data }) => {
    const [showText, setShowText] = useState(false);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                verticalAlign: 'middle',
            }}
        >
            <MuiCard
                sx={{
                    width: 250,
                    height: 250,
                    transition: 'all 0.3s ease-in-out',
                    transform: showText ? 'scale(1.1)' : 'none',
                    boxShadow: showText ? '0px 0px 10px rgba(0, 0, 0, 0.5)' : 'none',
                    margin: '0 auto',
                }}
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${data.profile.profilePic})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: showText ? 'blur(2px)' : 'none',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                        }}
                    />
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            padding: '0 20px',
                            opacity: showText ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                            transitionDelay: showText ? '0.2s' : '0s',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            transform: 'none',
                            textAlign: 'center',
                        }}
                    >
                        <div style={{ filter: 'none' }}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    fontSize: 16,
                                    color: 'white',
                                    marginBottom: 2,
                                }}
                            >
                                {data.profile.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: 12,
                                    color: 'white',
                                }}
                            >
                                {data.summary}
                            </Typography>
                        </div>
                    </CardContent>
                </div>
            </MuiCard>
        </Box>
    );
};

export default Card;