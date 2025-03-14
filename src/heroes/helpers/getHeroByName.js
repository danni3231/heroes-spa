import { heroes } from '../data/heroes';

export const getHeroByName = (name) =>{

    name = name.toLowerCase().trim();

    if(!name || name.length===0) return [];

    return heroes.filter(hero=> hero.superhero.toLocaleLowerCase().includes(name))

}