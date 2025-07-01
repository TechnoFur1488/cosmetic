import { NavLink, Outlet } from "react-router-dom";
import s from "./Root.module.css";

export const Root = () => {
  return (
    <>
        <nav className={s.container}>
            <ul className={s.list}>
                <li className={s.listEl}>
                    <NavLink to={"Face/"}>Уход за лицом</NavLink>
                </li>
                <li className={s.listEl}>
                    <NavLink to={"Body/"}>Уход за телом</NavLink>
                </li>
                <li className={s.listEl}>
                    <NavLink to={"Sels/"}>Распродажа</NavLink>
                </li>
                <li className={s.listEl}>
                    <NavLink to={"/"}><img src="/images/1061119df5b84d9d0c1a5cf4867e9c4c 4.png" alt="" /></NavLink>
                </li>
                <li className={s.listEl}>
                    <NavLink to={"MyContact"}>Контакты</NavLink>
                </li>
                <li className={s.listEl}>
                    <NavLink to={"Off"}>Доставка</NavLink>
                </li>
                <li className={s.listIcon}>
                    <NavLink to={"Profil"}><img src="/images/Vector (1).svg" alt="" /></NavLink>
                    <NavLink to={"Bucket"}><img src="/images/Vector (2).svg" alt="" /></NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  );
};
