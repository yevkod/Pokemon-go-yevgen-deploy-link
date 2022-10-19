import React from 'react';
import s from './PokeInfo.module.css';

interface IInfo {
    data: any,
}

export const PokeInfo: React.FC<IInfo> = ({data}) => {

    return (
        <>
            {
                (!data) ? '' : (
                    <div className={s.infoAbout}>
                        <div className={s.boxInfo}>
                            <div>
                                <img className={s.img}
                                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                                     alt="pokemon"/>
                                <div className={s.nameAbout}>
                                    <h1 className={s.h1}>{data.name} #{data.id}</h1>
                                </div>
                                <div className={s.abilities}>
                                    <div className={s.about}>
                                        <div className={s.stats}>
                                            <div className={s.type1}>Type</div>
                                            <div className={s.type2}>{data.types[0].type.name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.stat}>
                                    {
                                        data.stats.map((pok: any) => {
                                            return (
                                                <div className={s.stats}>
                                                    <div className={s.statName}>{pok.stat.name}</div>
                                                    <div className={s.baseStat}>{pok.base_stat}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className={s.weight}>
                                    <div className={s.weight1}>Weight</div>
                                    <div className={s.weight2}>{data.weight}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
