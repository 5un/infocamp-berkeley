import React from 'react'
import Script from 'react-load-script'
import queue from 'queue'
import _ from 'lodash'

const threejsScript = '/js/three.min.js'
// const threejsScript = '/js/three.js'

const scriptList = [
  '/js/three.min.js',
  '/js/loaders/BinaryLoader.js',
  '/js/shaders/ConvolutionShader.js',
  '/js/shaders/CopyShader.js',
  '/js/shaders/FilmShader.js',
  '/js/shaders/FocusShader.js',
  '/js/postprocessing/EffectComposer.js',
  '/js/postprocessing/BloomPass.js',
  '/js/postprocessing/FilmPass.js',
  '/js/postprocessing/MaskPass.js',
  '/js/postprocessing/RenderPass.js',
  '/js/postprocessing/ShaderPass.js',
];

class ThreejsBackdrop extends React.Component {

  constructor() {
    super();
    this.scriptLatch = scriptList.length;
    this.state = {
      threejsScriptLoaded: false
    };
  }

  handleThreejsScriptLoad() {
    this.setState({ threejsScriptLoaded: true });
  }

  handleScriptLoad() {
    if(this.scriptLatch - 1 > 0) {
      this.scriptLatch -= 1;
    } else {
      this.init();
      this.lastRenderTime = Date.now();
      this.animate();
    }
  }

  init() {
    const THREE = window.THREE;
    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;

    this.meshes = [];
    this.clonemeshes = [];

    this.clock = new THREE.Clock();

    this.camera = new THREE.PerspectiveCamera( 20, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 50000 );
    this.camera.position.set( 0, 1200, 7000 );

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0x1B1D25 );
    this.scene.fog = new THREE.FogExp2( 0x000104, 0.0000675 );
    this.camera.lookAt( this.scene.position );

    this.loader = new THREE.BinaryLoader();

    // this.loader.load( "/obj/gallardo/GallardoNoUv_bin.js", (geometry) => {
    //   this.createMesh( geometry, this.scene, 60.8, 2200, -200, -100, 0x0055ff, false );
    // });

    // this.loader.load( "/obj/female02/Female02_bin.js", (geometry) => {
    //   this.createMesh( geometry, this.scene, 4.05, -1000, -350,    0, 0xffdd44, true );
    //   this.createMesh( geometry, this.scene, 4.05,     0, -350,    0, 0xffffff, true );
    //   this.createMesh( geometry, this.scene, 4.05,  1000, -350,  400, 0xff4422, true );
    //   this.createMesh( geometry, this.scene, 4.05,   250, -350, 1500, 0xff9955, true );
    //   this.createMesh( geometry, this.scene, 4.05,   250, -350, 2500, 0xff77dd, true );
    // });
    // this.loader.load( "/obj/male02/Male02_bin.js", (geometry) => {
    //   this.createMesh( geometry, this.scene, 4.05,  -500, -350,   600, 0xff7744, true );
    //   this.createMesh( geometry, this.scene, 4.05,   500, -350,     0, 0xff5522, true );
    //   this.createMesh( geometry, this.scene, 4.05,  -250, -350,  1500, 0xff9922, true );
    //   this.createMesh( geometry, this.scene, 4.05,  -250, -350, -1500, 0xff99ff, true );
    // });

    this.loader.load( "/obj/female02/Female02_bin.js", (geometry) => {
      this.createMesh( geometry, this.scene, 4.05, -1000, -350,    0, 0x2bffff, true );
      this.createMesh( geometry, this.scene, 4.05,     0, -350,    0, 0x2bffff, true );
      this.createMesh( geometry, this.scene, 4.05,  1000, -350,  400, 0x2bffff, true );
      this.createMesh( geometry, this.scene, 4.05,   250, -350, 1500, 0x2bffff, true );
      this.createMesh( geometry, this.scene, 4.05,   250, -350, 2500, 0x2bffff, true );
    });
    this.loader.load( "/obj/male02/Male02_bin.js", (geometry) => {
      this.createMesh( geometry, this.scene, 4.05,  -500, -350,   600, 0x2bffff, true );
      this.createMesh( geometry, this.scene, 4.05,   500, -350,     0, 0x2bffff, true );
      this.createMesh( geometry, this.scene, 4.05,  -250, -350,  1500, 0x2bffff, true );
      this.createMesh( geometry, this.scene, 4.05,  -250, -350, -1500, 0x2bffff, true );
    });


    this.renderer = new THREE.WebGLRenderer( { antialias: false } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    this.renderer.autoClear = false;
    
    this.threeContainer.innerHTML = "";
    this.threeContainer.appendChild( this.renderer.domElement );
    // this.threeContainer.style.opacity = 0.5;

    this.parent = new THREE.Object3D();
    this.scene.add(this.parent);
    const grid = new THREE.Points( 
      new THREE.PlaneBufferGeometry( 15000, 15000, 64, 64 ), 
      new THREE.PointsMaterial( { color: 0x2bffff, size: 30 } ) 
    );
    grid.position.y = -400;
    grid.rotation.x = - Math.PI / 2;
    this.parent.add( grid );
    
    // postprocessing
    
    var renderModel = new THREE.RenderPass( this.scene, this.camera );
    var effectBloom = new THREE.BloomPass( 0.75 );
    var effectFilm = new THREE.FilmPass( 0.5, 0.5, 1448, false );
    
    this.effectFocus = new THREE.ShaderPass(THREE.FocusShader);
    this.effectFocus.uniforms["screenWidth"].value = window.innerWidth;
    this.effectFocus.uniforms["screenHeight"].value = window.innerHeight;
    this.effectFocus.renderToScreen = true;

    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.addPass(renderModel);
    this.composer.addPass(effectBloom);
    this.composer.addPass(effectFilm);
    this.composer.addPass(this.effectFocus);

    window.addEventListener( 'resize', this.onWindowResize.bind(this), false );

  }

  animate() {
    
    requestAnimationFrame( this.animate.bind(this) );
    const now = Date.now();
    const elapsed = now - this.lastRenderTime;

    // this.camera.position.x = this.camPathRadius * Math.cos(this.camAngle);
    // this.camera.position.z = this.camPathRadius * Math.sin(this.camAngle);
    // this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // this.camAngle += 0.001;

    if (elapsed > 40) {
      this.lastRenderTime = now - (elapsed % 40);
      this.renderThreeJs();
      //stats.update();

    }

  }

  onWindowResize() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.camera.lookAt(this.scene.position);
    this.composer.reset();
    this.effectFocus.uniforms[ "screenWidth" ].value = window.innerWidth;
    this.effectFocus.uniforms[ "screenHeight" ].value = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );

    //this.renderer.setSize( window.innerWidth, window.innerHeight );
    //this.uniforms.resolution.value.x = this.renderer.domElement.width;
    //this.uniforms.resolution.value.y = this.renderer.domElement.height;
  }

  createMesh(originalGeometry, scene, scale, x, y, z, color, dynamic) {
    this.THREE = window.THREE;
    let i, c, p, mesh;
    const vertices = originalGeometry.vertices;
    const vl = vertices.length;
    const geometry = new THREE.Geometry();
    const vertices_tmp = [];
    for (i = 0; i < vl; i++) {
      p = vertices[ i ];
      geometry.vertices[ i ] = p.clone();
      vertices_tmp[ i ] = [ p.x, p.y, p.z, 0, 0 ];
    }
    const clones = [
      [  6000, 0, -4000 ],
      [  5000, 0, 0 ],
      [  1000, 0, 5000 ],
      [  1000, 0, -5000 ],
      [  4000, 0, 2000 ],
      [ -4000, 0, 1000 ],
      [ -5000, 0, -5000 ],
      [ 0, 0, 0 ]
    ];
    if (dynamic) {
      for ( i = 0; i < clones.length; i ++ ) {
        c = ( i < clones.length -1 ) ? 0x252525 : color;
        mesh = new THREE.Points( geometry, new THREE.PointsMaterial( { size: 30, color: c } ) );
        mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
        mesh.position.x = x + clones[ i ][ 0 ];
        mesh.position.y = y + clones[ i ][ 1 ];
        mesh.position.z = z + clones[ i ][ 2 ];
        this.parent.add( mesh );
        this.clonemeshes.push( { mesh: mesh, speed: 0.5 + Math.random() } );
      }
    } else {
      mesh = new THREE.Points( geometry, new THREE.PointsMaterial( { size: 30, color: color } ) );
      mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = z;
      this.parent.add( mesh );
    }
    this.meshes.push( {
      mesh: mesh, vertices: geometry.vertices, vertices_tmp: vertices_tmp, vl: vl,
      down: 0, up: 0, direction: 0, speed: 35, delay: Math.floor( 200 + 200 * Math.random() ),
      started: false, start: Math.floor( 100 + 200 * Math.random() ),
      dynamic: dynamic
    } );
  }

  renderThreeJs() {
    //this.uniforms.time.value += 0.05;
    // this.renderer.render( this.scene, this.camera );

    let j, jl, cm, data, vertices, vertices_tmp, vl, d, vt, mesh, p;


    let delta = 10 * this.clock.getDelta();
    delta = delta < 2 ? delta : 2;
    this.parent.rotation.y += -0.02 * delta;

    for( j = 0, jl = this.clonemeshes.length; j < jl; j ++ ) {
      cm = this.clonemeshes[j];
      cm.mesh.rotation.y += -0.1 * delta * cm.speed;
    }
    for( j = 0, jl = this.meshes.length; j < jl; j ++ ) {
      data = this.meshes[j];
      mesh = data.mesh;
      vertices = data.vertices;
      vertices_tmp = data.vertices_tmp;
      vl = data.vl;
      if ( ! data.dynamic ) continue;
      if ( data.start > 0 ) {
        data.start -= 1;
      } else {
        if ( !data.started ) {
          data.direction = -1;
          data.started = true;
        }
      }
      for ( var i = 0; i < vl; i ++ ) {
        p = vertices[ i ];
        vt = vertices_tmp[ i ];
        // falling down
        if ( data.direction < 0 ) {
          // var d = Math.abs( p.x - vertices_tmp[ i ][ 0 ] ) + Math.abs( p.y - vertices_tmp[ i ][ 1 ] ) + Math.abs( p.z - vertices_tmp[ i ][ 2 ] );
          // if ( d < 200 ) {
          if ( p.y > 0 ) {
            // p.y += data.direction * data.speed * delta;
            p.x += 1.5 * ( 0.50 - Math.random() ) * data.speed * delta;
            p.y += 3.0 * ( 0.25 - Math.random() ) * data.speed * delta;
            p.z += 1.5 * ( 0.50 - Math.random() ) * data.speed * delta;
          } else {
            if ( ! vt[ 3 ] ) {
              vt[ 3 ] = 1;
              data.down += 1;
            }
          }
        }
        // rising up
        if ( data.direction > 0 ) {
          //if ( p.y < vertices_tmp[ i ][ 1 ] ) {
          //  p.y += data.direction * data.speed * delta;
          d = Math.abs( p.x - vt[ 0 ] ) + Math.abs( p.y - vt[ 1 ] ) + Math.abs( p.z - vt[ 2 ] );
          if ( d > 1 ) {
            p.x += - ( p.x - vt[ 0 ] ) / d * data.speed * delta * ( 0.85 - Math.random() );
            p.y += - ( p.y - vt[ 1 ] ) / d * data.speed * delta * ( 1 + Math.random() );
            p.z += - ( p.z - vt[ 2 ] ) / d * data.speed * delta * ( 0.85 - Math.random() );
          } else {
            if ( ! vt[ 4 ] ) {
              vt[ 4 ] = 1;
              data.up += 1;
            }
          }
        }
      }
      // all down
      if ( data.down === vl ) {
        if ( data.delay === 0 ) {
          data.direction = 1;
          data.speed = 10;
          data.down = 0;
          data.delay = 320;
          for ( i = 0; i < vl; i ++ ) {
            vertices_tmp[ i ][ 3 ] = 0;
          }
        } else {
          data.delay -= 1;
        }
      }
      // all up
      if ( data.up === vl ) {
        if ( data.delay === 0 ) {
          data.direction = -1;
          data.speed = 35;
          data.up = 0;
          data.delay = 120;
          for ( i = 0; i < vl; i ++ ) {
            vertices_tmp[ i ][ 4 ] = 0;
          }
        } else {
          data.delay -= 1;
        }
      }
      mesh.geometry.verticesNeedUpdate = true;
    }

    this.renderer.clear();
    this.composer.render( 0.01 );
  }

  componentDidMount(){
    this.threeContainer.style.height = window.innerHeight + "px";
    const q = queue()
    q.autostart = false
    q.concurrency = 1

    scriptList.forEach((scr, i) => {
      q.push((cb) => {
        const aScript = document.createElement('script');
        aScript.onload = (e) => { cb() }
        aScript.type = 'text/javascript';
        aScript.src = scr;
        document.head.appendChild(aScript);
      })
    })

    q.start((err) => {
      if (err) throw err
      this.setState({ threejsScriptLoaded: true })
      this.init();
      this.lastRenderTime = Date.now();
      this.animate();
    })

  }

  render () {
    const { threejsScriptLoaded } = this.state;
    return (
      <div>
        <div ref={(el) => this.threeContainer = el} className="threejs-container"></div>
      </div>
    )
  }
}

export default ThreejsBackdrop
