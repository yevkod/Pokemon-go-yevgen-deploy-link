import React, {useEffect, useState} from 'react';
import s from './MainStyles.module.css';
import {CardComponents} from "./MainComponents/CardComponent/CardComponents";
import {PokeInfo} from "./MainComponents/PokeInfoComponent/PokeInfo";


export const Main: React.FC = () => {
    const [choose, setChoose] = useState([]);
    const [load, setLoad] = useState('https://pokeapi.co/api/v2/pokemon/?limit=12');
    const [pokData, setPokData] = useState();

    const fetchApi: any = async () => {
        const res = await fetch(load)
        const data = await res.json()

        setLoad(data.next)
        fetchId(data.results)

        function fetchId(results: any) {
            results.forEach(async (pokemon: any) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                // @ts-ignore
                setChoose(currentList => [...currentList, data])
                choose.sort((a: any, b: any) => a.id - b.id)
            })
        }
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            <h1 className={s.paragraph}>Pokedex</h1>
            <div className={s.MainWrapper}>
                <div className={s.box}>
                    <div className={s.CardWrapper}>
                            <CardComponents data={choose}
                                            infoPok={(pok:any) => setPokData(pok)}
                            />
                    </div>
                </div>
                <div className={s.info}>
                    <PokeInfo data={pokData} />
                </div>
                <div>
                <button className={s.loadMore} onClick={() => {
                    // @ts-ignore
                    setChoose([])
                    fetchApi()}
                } >Load More</button>
                </div>
            </div>
        </div>
    );
}
