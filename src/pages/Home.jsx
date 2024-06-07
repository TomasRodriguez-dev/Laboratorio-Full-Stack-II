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
        <Box sx={{ color: '#ffffff', textAlign: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{mb: 4}}>
            Bienvenidos a Mi Portfolio 
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ color: '#ffffff', textAlign: 'center' }}>
          <img src="../../assets/Foto3.jpg" alt="Foto de Perfil" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }} />
          <Typography variant="h4" align="center" gutterBottom sx={{mt: 4}}>
            Tomás Javier Rodriguez Ocampo 
          </Typography>
          <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></img>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ color: '#ffffff', textAlign: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom sx={{mt: 4}}>
           <img src = "https://github.com/TomasRodriguez-dev/TomasRodriguez-dev/assets/102562595/d77f840c-70ed-4447-b139-f4e35eb27d2b" width="50px"></img> Acerca de mi
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{mb: 4, mt: 4}}>
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
          <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"></img>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ color: '#ffffff' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Habilidades
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Estas son las tecnologías que manejo:
          </Typography>
          <Grid container spacing={4}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sx={{mb: 4, mt: 4}} sm={6} md={4} key={index}>
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