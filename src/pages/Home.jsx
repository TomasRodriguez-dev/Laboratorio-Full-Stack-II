import Navbar from '../components/Navbar/Navbar';
import Cards from '../components/Card/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function HomePage() {
  const cardData = [
    {
      title: 'React',
      description: 'Manejo de React',
      image: 'assets/Logo-React.png',
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
  ];

  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box>
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
