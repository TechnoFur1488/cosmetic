import { NavLink, Outlet } from "react-router-dom";
import s from "./Face.module.css"

export const Face = () => {
    return (
        <div className={s.container}>
            <h1>Уход для лица</h1>
            <div>
                <nav>
                    <ul className={s.list}>
                        <li className={s.listItem}>
                            <NavLink to={"Cream"}>Крем</NavLink>
                        </li>
                        <li className={s.listItem}>
                            <NavLink to={"Serums"}>Сыворотки</NavLink>
                        </li>
                        <li className={s.listItem}>
                            <NavLink to={"Gel"}>Гель для умывания</NavLink>
                        </li>
                        <li className={s.listItem}>
                            <NavLink to={"Oil"}>Масло для лица</NavLink>
                        </li>
                        <li className={s.listItem}>
                            <NavLink to={"Emulsion"}>Эмульсии</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </div>
    )
};

