import React, { Fragment } from "react";
import Carrousel from "./Carrusel"

const Home = () =>{
    return(
        <Fragment>
            <div className="contenedorHome">
                <Carrousel />
                <div className="contenedorVideosHome">
                    <article className="articuloVideo">
                        <h3 className="fuenteBody">Preparar un buen Mojito</h3>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/CAn7k-M_YSU?si=AgQzD__Wt78Ld0ug" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </article>
                    <article className="articuloVideo">
                        <h3 className="fuenteBody">Los tragos mas coloridos</h3>
                        <iframe
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/8pj2NPydHpc?si=Dxii2eHKa_6gtbUh" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </article>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;