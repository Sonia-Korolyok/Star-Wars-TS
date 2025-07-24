import {base_url, period_month} from "../utils/constants.js";
import {useEffect, useState} from "react";
import type {Hero, StorageItem} from "../utils/types"

const AboutMe = () => {
    const [hero, setHero] = useState<Hero | null>(null);
    useEffect(() => {
        const storageValue: string | null = localStorage.getItem("hero");
        const hero: StorageItem = storageValue ? JSON.parse(storageValue) : null;

        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info: Hero = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    } as StorageItem));
                })
        }
    }, [])

    return (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {hero[key]}
                    </p>)}
                </div>
            }
        </>
    );
};

export default AboutMe;

