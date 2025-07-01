import s from "./MyContact.module.css";

export const MyContact = () => {
    return (
        <>
            <h1 className={s.title}>Наши контакты</h1>
            <section className={s.sectionS}>
                <div className={s.container}>
                    <div>
                        <img src="/images/Vector (1).png" alt="" />
                        <span>8 800 555-35-35</span>
                    </div>
                    <div>
                        <img src="/images/XMLID_426_.png" alt="" />
                        <span>beautyboutiquenatur@mail.ru</span>
                    </div>
                    <div>
                        <img src="/images/Vector (2).png" alt="" />
                        <span>beautybotique</span>
                    </div>
                    <div>
                        <img src="/images/Vector (3).png" alt="" />
                        <span>Москва, ул.Хорошева 22</span>
                    </div>
                </div>
            </section>
        </>
    );
};
