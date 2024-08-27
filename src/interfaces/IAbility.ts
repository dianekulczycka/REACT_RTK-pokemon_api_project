export interface IAbility {
    ability: {
        name: string;
        pokemon?: {
            pokemon: {
                url: string;
            };
        }[];
    }
}