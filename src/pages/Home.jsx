import Navbar from '../components/Navbar/Navbar';
import Cards from '../components/Card/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomePage() {
  const cardData = [
    {
      title: 'React',
      description: 'Manejo de React',
      image: 'assets/Logo-React.webp',
    },
    {
      title: 'Angular',
      description: 'Manejo de Angular',
      image: 'assets/Logo-Angular.webp',
    },
    {
      title: 'JavaScript',
      description: 'Manejo de JS',
      image: 'assets/Logo-JS.webp',
    },
    {
      title: 'TypeScript',
      description: 'Manejo de TS',
      image: 'assets/Logo-TS.webp',
    },
    {
      title: 'GitHub',
      description: 'Manejo de GitHub',
      image: 'assets/Logo-GitHub.webp',
    },
    {
      title: 'Figma',
      description: 'Manejo de Figma',
      image: 'assets/Logo-Figma.webp',
    },
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Box sx={{ color: '#ffffff' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Habilidades
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Estas son las tecnologías que manejo:
          </Typography>
          <Grid container spacing={4}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Cards
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default HomePage;