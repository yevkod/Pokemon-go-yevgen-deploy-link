import React from 'react';
import s from './CardComponents.module.css';


interface IComponent {
    data: any,
    infoPok: any,
}

export const CardComponents: React.FC<IComponent> = ({data, infoPok}) => {

    /*const styled = type + "styles";*/

    return (
        <>
            {
                (!data) ? '' : (
                    data.map((pok: any) => {
                        return (
                            <div className={s.CardWrapper}>
                                <div className={s.cardBox} key={pok.id} onClick={() => infoPok(pok)}>
                                    <img className={s.img} src={pok.sprites.front_default} alt={pok.name}/>
                                    <div>
                                        <h3 className={s.h3}>{pok.name}</h3>
                                        <div className={s.styles}>
                                            <small className={s.styled}><div>{pok.types[0].type.name}</div></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }))
            }
        </>
    );
};

