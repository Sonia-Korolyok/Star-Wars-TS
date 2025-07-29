
import {period_month, characters} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import type {HeroInfo} from "../utils/types";
import {useParams} from "react-router";

const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    const {heroId} = useParams();
    const selectedName = ((heroId && heroId in characters) ? heroId : "luke") as keyof typeof characters;
    useEffect(() => {
        const storedData = localStorage.getItem(selectedName);
        const heroData = storedData ? JSON.parse(storedData) : null;
        if (heroData && ((Date.now() - heroData.timestamp) < period_month)) {
            setHero(heroData.payload);
        } else {
            fetch(characters[selectedName].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
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
                    localStorage.setItem(selectedName, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [heroId, selectedName])
    if (!hero) return <p>Loading...</p>;
    return (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    <h1 className="mt-4 text-3xl font-bold">{characters[selectedName].name}</h1>
                    <img src={characters[selectedName].img} alt={characters[selectedName].name} className={"rounded-lg w-100px object-cover"}/>
                    {(Object.keys(hero) as (keyof HeroInfo)[]).map(key => <p key={key}>
                        <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                    </p>)}
                </div>
            }
        </>
    );
};

export default AboutMe;
