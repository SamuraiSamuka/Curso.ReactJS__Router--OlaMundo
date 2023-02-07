import { NavLink } from 'react-router-dom'
import styles from './MenuLink.module.css'

export default function MenuLink({rota, children}){
    
    return (
        <NavLink
            to={rota}
            className={({ isActive }) =>
                `${styles.link}
                ${isActive? styles.linkDestacado: ""}
                `}
            end
            >{children}
        </NavLink>
    )
}