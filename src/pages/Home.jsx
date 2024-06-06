import Cards from '../components/Card/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cardData from '../data/carData'; 

function HomePage() {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ color: '#ffffff' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Acerca de mi
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            👨🏽‍🎓 Soy recibido en Técnico en Programación.
            <br />
            ✏️ Actualmente estoy estudiando Desarrollo de Software Full Stack.
            <br />
            🤓 Un apasionado por la resolución de problemas y el desarrollo de soluciones eficientes.
            <br />
            😄 Experiencia en desarrollo de aplicaciones web, aplicaciones mobile, bases de datos y colaboración en proyectos en equipo.
            <br />
            🎯 Mi enfoque principal siempre va estar basado en el aprendizaje continuo y a la adaptación a las últimas tendencias tecnológicas.
            <br />
            ⏱️ Estoy ansioso por poder contribuir con mi experiencia y habilidades a un entorno dinámico y desafiante.
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ color: '#ffffff', mt: 6 }}>
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