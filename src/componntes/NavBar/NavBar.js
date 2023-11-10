import CartWidget from "../CartWidget/CartWidget"
import ProfileCard from "../ProfileCard"
import iphone_12 from "../CartWidget/img/iphone _12.jpg"
import iphone_11 from "../CartWidget/img/iphone_11.jpg"
import iphone11_pro_mx from "../CartWidget/img/iphone11_pro_mx.jpg"


import "../css/estilos.css"
const NavBar = () => {
    return (
        
            <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">accesorios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">cargadores</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " aria-disabled="true">ver mas</a>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
<div className="carrito">
    <CartWidget/>
</div>
<div className="column">
<div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      <ProfileCard titulo="iphone_12" arroba="iphone12" img={iphone_12}/>
    </div>
    <div class="col">
    <ProfileCard titulo="iphone_11" arroba="iphone11" img={iphone_11} />
    </div>
    <div class="col">
    <ProfileCard titulo="iphone_11" arroba="iphone11" img={iphone11_pro_mx}/>
    </div>
  </div>
</div>

</div>

</div>


        
      
   
    )
}
export default NavBar







