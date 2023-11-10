import { Profiler } from "react"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>hola bienvenidos a la tienda</h3>
            <div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col align-self-start">
                            <button>iphone 11</button>
                        </div>
                        <div class="col align-self-center">
                            <button>iphone 11 pro max</button>
                        </div>
                        <div class="col align-self-end">
                            <button>iphone 12</button>
                        </div>
                    </div>
                </div>

            </div>
            <CartWidget />

        </nav>
    )
}
export default NavBar
