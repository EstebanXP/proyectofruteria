import React, { Fragment } from "react";
import "../assets/ejemploFondo1.jpg";
import { useLocation } from "react-router";
import "../css/Producto.css";
import Navbar from "./Navbar";
import FooterPage from "./Footer";
import left from "../assets/back.png";
import { Link } from "react-router-dom";
import useWindowDimensions from "./funcionVentana";
import { render } from "@testing-library/react";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import Error404 from "./Error.js";


function Producto() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  if(getSafe(() =>location.state.dCompleta)==undefined){
    return <ProductosNoDesc></ProductosNoDesc>
     ;
  }
  else if(getSafe(() =>location.state.titulo)==undefined){
    return <Error404></Error404>
     ;
  }
  else if (width < 500) {
    return <ProductosSmall></ProductosSmall>;
  } else if (Math.abs(width - height) < 400) {
    return <ProductosSquare />;
  } 

  else {
    return <ProductosBig />;
  }
}

function getSafe(fn) {
  try {
      return fn();
  } catch (e) {
      return undefined;
  }
}

function checkBackground(test) {
  if (test == null) {
    return false;
  }
  return true;
}

function ProductosNoDesc() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  return (
    <div className="productoTotalsi">
      {checkBackground(location.state.fondoExtra) ? (
        <img
          className="backgroundImagenProd"
          src={location.state.fondoExtra}
          alt=""
        ></img>
      ) : (
        <img
          className="backgroundImagenProd"
          src={location.state.imagen}
          alt=""
        ></img>
      )}
      <div className="Producto">
        <div className="algoBien">
          <Link to="/productos">
            <img src={left} className="left-arrowProducto" alt="" />
          </Link>
          <h1 className="top">Producto:</h1>
        </div>

        <div
          className="ColumnasProd">
          <div className="columnaImagen" id="ContenedorTexto">
            <img src={location.state.imagen} className="imagenNoDesc" alt=""></img>
            <div className="divButtonProd">
              <a href={location.state.pdfLink}><div className="squareButton"><p className="TextoBotonProd">DESCARGAR INFORMACIÓN NUTRIMENTAL</p></div></a>
            </div>
            
          </div>
          <div className="columnaDatos">
            <h1 className="titulo">{location.state.titulo}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}


function ProductosBig() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  return (
    <div className="productoTotalsi">
      {checkBackground(location.state.fondoExtra) ? (
        <img
          className="backgroundImagenProd"
          src={location.state.fondoExtra}
          alt=""
        ></img>
      ) : (
        <img
          className="backgroundImagenProd"
          src={location.state.imagen}
          alt=""
        ></img>
      )}
      <div className="Producto">
        <div className="algoBien">
          <Link to="/productos">
            <img src={left} className="left-arrowProducto" alt="" />
          </Link>
          <h1 className="top">Producto:</h1>
        </div>

        <div
          className="ColumnasProd"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          
          <div className="columnaImagen" id="ContenedorTexto">
            <img src={location.state.imagen} className="imagen" alt=""></img>
            <div className="divButtonProd">
              <a href={location.state.pdfLink}><div className="squareButton"><p className="TextoBotonProd">DESCARGAR INFORMACIÓN NUTRIMENTAL</p></div></a>
            </div>
            
          </div>
          <div className="columnaDatos">
            <h1 className="titulo">{location.state.titulo}</h1>
            <p className="descripcionCompleta">{location.state.dCompleta}</p>


          </div>
        </div>
      </div>
    </div>
  );
}

function ProductosSmall() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  var a = `https:// $ {location.state.pdfLink}`;
  return (
    <div className="productoTotalsi">
      {checkBackground(location.state.fondoExtra) ? (
        <img
          className="backgroundImagenProd"
          src={location.state.fondoExtra}
          alt=""
        ></img>
      ) : (
        <img
          className="backgroundImagenProd"
          src={location.state.imagen}
          alt=""
        ></img>
      )}
      <div className="Producto">
        <div className="algoBien">
          <Link to="/productos">
            <img src={left} className="left-arrowProducto" alt="" />
          </Link>
          <h1 className="top">Producto:</h1>
        </div>

        <div className="ColumnasProd">
          <div className="columnaImagen" id="ContenedorTexto">
            <img
              src={location.state.imagen}
              className="imagenSmall"
              alt=""
            ></img>
            <div className="divButtonSmall">
              <a href={location.state.pdfLink}><div className="squareButtonSmall"><p className="TextoBotonProdSmall">DESCARGAR INFORMACIÓN NUTRIMENTAL</p></div></a>
            </div>
          </div>
          <div className="columnaDatos">
            <h1 className="titulo">{location.state.titulo}</h1>
            <p className="descripcionCompletaSmall">
              {location.state.dCompleta}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductosSquare() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  return (
    <div className="productoTotalsi">
      {checkBackground(location.state.fondoExtra) ? (
        <img
          className="backgroundImagenProd"
          src={location.state.fondoExtra}
          alt=""
        ></img>
      ) : (
        <img
          className="backgroundImagenProd"
          src={location.state.imagen}
          alt=""
        ></img>
      )}
      <div className="Producto">
        <div className="algoBien">
          <Link to="/productos">
            <img src={left} className="left-arrowProducto" alt="" />
          </Link>
          <h1 className="top">Producto:</h1>
        </div>

        <div className="ColumnasProd">
          <div className="columnaImagen" id="ContenedorTexto">
            <img
              src={location.state.imagen}
              className="imagenSmall"
              alt=""
            ></img>
            <div className="divButtonSquare">
              <a href={location.state.pdfLink}><div className="squareButton"><p className="TextoBotonProd">DESCARGAR INFORMACIÓN NUTRIMENTAL</p></div></a>
            </div>
          </div>
          <div className="columnaDatos">
            <h1 className="tituloSquare">{location.state.titulo}</h1>
            <p className="descripcionCompletaSquare">
              {location.state.dCompleta}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
