import React from 'react';
import  styled  from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const HeroSection = styled('div')({
  position: 'relative',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'url(path/to/hero-image.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'brightness(0.7)',
});

const HeroTextOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: theme.palette.common.white,
}));

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const AboutUsSection = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

const Benefits = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: theme.spacing(4),
}));

const BenefitItem = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  maxWidth: '200px',
}));

const BenefitIcon = styled(HomeIcon)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

const ViewPage = () => {
  return (
    <>
      <HeroSection>
        <HeroTextOverlay>
          <HeroHeading variant="h1">Discover the World, One Couch at a Time</HeroHeading>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </HeroTextOverlay>
      </HeroSection>
      <AboutUsSection>
        <Typography variant="h2" gutterBottom>Connect with the World Through Couch Surfing</Typography>
        <Typography variant="body1" paragraph>
          [Your platform name] is a community platform that connects travelers seeking affordable
          accommodation with welcoming hosts who have spare space.
        </Typography>
        <Benefits>
          <BenefitItem>
            <BenefitIcon />
            <Typography variant="h6">Hosts: Share Your Space & Connect</Typography>
          </BenefitItem>
          <BenefitItem>
            <PublicIcon style={{ fontSize: '2rem', color: '#1976d2', marginBottom: '8px' }} />
            <Typography variant="h6">Surfers: Experience Culture Authentically</Typography>
          </BenefitItem>
        </Benefits>
      </AboutUsSection>
    </>
  );
};

export default ViewPage;
