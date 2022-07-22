import {Fragment} from "react"
import mealsImage from "../../Assets/meals.jpg";
import classses from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header=props=>{
    return(
        <Fragment>
            <header className={classses.header}>
                <h1>React-Meal</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classses["main-image"]}>
                <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" />
            </div>

        </Fragment>

    )
}
export default Header;