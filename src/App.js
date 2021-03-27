import './App.css';
import Model from "./components/Model"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';


function App() {
  return (
    <Typography component="div" style={{ backgroundColor: 'purple', height: '100vh' }} >
    <CssBaseline />
    <Container maxWidth="sm">
    

      <h1>Colearners Education and Research Institute</h1>
      <h2>3D CUBE MODEL REPRESENTATION IN WIREFRAME</h2>

<Model/>

<h3 className="h3"> This is an small and first example of making interactive 3d Model<br/>
we can pan zoom and rotate the cube</h3>
<h4>The Following Tools has been used</h4>
<ol className="ol">
  <li>React JS for Front End</li>
  <li>React three library for 3d</li> 
  <li>Material ui</li>

</ol>


    </Container>
    </Typography>
  );
}

export default App;
