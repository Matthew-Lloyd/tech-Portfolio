import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import Particles from 'react-particles-js';
import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css";


const partObj = {
  particles: {
    number: {
      value:100,
      density: {
        enable:true,
        // value_area:2500
      }
    },
    color: {
      value:["#ffffff"]
    },
    shape: {
      "type":["circle", "star"],
      stroke: {
        width:2,
        color:"#226b9b"
      },
      polygon: {
        nb_sides:5
      },
      image: {
        src:"https://cdn.iconscout.com/public/images/icon/premium/png-512/shooting-star-3790d9a9f184a332-512x512.png",
        width:250,height:250
      }
    },
    opacity: {
      value:1,
      random:false,
      anim: {
        enable:false,
        speed:0.7308694910712106,
        opacity_min:0,
        sync:true
      }
    },
    size: {
      value:3.5,
      random:true,
      anim: {
        enable:false,
        speed:40,
        size_min:0.1,
        sync:false
      }
    },
    line_linked: {
      enable:true,
      distance:100,
      color:"#226b9b",
      opacity:1,
      width:2,
    },
    move: {
      enable:true,
      speed:2,
      direction:"bottom left",
      random:true,
      straight:false,
      out_mode:"out",
      bounce:false,
      attract: {
        enable:false,
        rotateX:600,
        rotateY:1200
      }
    }
  },
  interactivity: {
    detect_on:"canvas",
    events: {
      onhover: {
        enable:true,
        mode:"repulse"
      },
      onclick: {
        enable:true,
        mode:"push"
      },
      resize:true
    },
    modes: {
      grab: {
        distance:200,
        line_linked: {
          opacity:1
        }
      },
      bubble: {
        distance:200,
        size:100,
        duration:2,
        opacity:1,
        speed:3
      },
      repulse: {
        distance:50,
        duration:0.4
      },
      push: {
        particles_nb:4
      },
      remove: {
        particles_nb:2
      }
    }
  },
  retina_detect:true
};

var hist = createBrowserHistory();

ReactDOM.render(
  <div>
    <div className="parallax">
      <div style={{
        position: "absolute",
        width: "100%",
      }}>
        <Router history={hist}>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} key={key} component={prop.component} />;
            })}
          </Switch>
        </Router>
      </div>
    <Particles 
      className="particles"
      params={partObj}
      // style={{
      //   width: '100%',
      //   height: '100%',
      //   // backgroundImage: `url(${logo2})`
      // }}
      >
    </Particles>

    </div>
  </div>, 
  document.getElementById("root")
);
