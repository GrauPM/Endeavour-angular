export class Character {
    id: number;
    name: string;
    title?: string;
    level: number;
    class: number;
    health: number;
    mana: number;
    str: number;
    vit: number;
    dex: number;
    int: number;
    crit: number;
    regen: number;
    spells: Array<any>;
    equippedItem: string;
}
