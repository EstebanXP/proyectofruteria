
import './css/App.css';
import Navbar from './componentes/Navbar';
import Poupup from './componentes/PopupChat';
import Vista from './componentes/Vista';

function App() {
  return (
    <div className="App">
      
      {/* Aqui empieza el jsx, no borrar el div de "App" pq sino no jala*/}
      <header className="App-header">
      <Navbar></Navbar>
        Header. Hola mundo, el erick me la pela durisimo 
        {/* 
        <p>
          Este es nomas un parrafo
          <code>No se que hace esta parte</code> 
        </p>
        */}
        
      </header>
      <Vista></Vista>
      <body>
        Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, felis class augue lectus pharetra aptent vitae, quisque ante molestie sociis phasellus habitasse laoreet. Taciti venenatis natoque iaculis fames pellentesque parturient class curae auctor aptent interdum blandit, mollis aliquet feugiat libero pretium eu lacinia ante integer litora vel, fringilla et laoreet ornare lacus egestas euismod inceptos vitae eros at. Eleifend rhoncus luctus torquent potenti donec class nam, velit euismod ultrices mus mollis praesent interdum, mattis phasellus orci dictum aenean fermentum.

Sagittis ligula tincidunt vehicula sociis rhoncus vel fringilla aliquet, dui etiam venenatis dictumst potenti libero congue scelerisque urna, imperdiet porta integer placerat porttitor nibh metus. Cum fames sociis metus arcu risus ante, diam habitasse feugiat bibendum facilisi eget, pretium ut nibh morbi donec. Natoque tellus egestas interdum semper nam aliquet dapibus donec, id rutrum montes nullam ridiculus facilisis diam velit, parturient venenatis odio sociosqu porttitor habitasse mi.
      </body>
      
      <Poupup></Poupup>
      {/* Aqui empieza el jsx, no borrar el div de justo abajo pq sino no jala*/}

    </div>
  );
}

export default App;
