import s from "./Body.module.css";
import { NavLink, Outlet } from "react-router-dom";

export const Body = () => {
    return (
        <div className={s.container}>
            <h1>Уход для тела</h1>
            <div>
                <nav>
                    <ul className={s.list}>
                        <li className={s.listItem}>
                            <NavLink to={"Shampoo"}>Шампунь</NavLink>
                        </li>
                        <li className={s.listItem}>
                            <NavLink to={"GelBody"}>Гель для душа</NavLink>
                        </li>
                        <li className={s.listItem}>
                            <NavLink to={"Scrab"}>Скраб</NavLink>
                        </li>
                        <li className={s.listItem}>
                            <NavLink to={"CreamBody"}>Крем</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </div>
    )
};
