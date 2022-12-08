export declare enum Sexe {
    MASCULIN = "masculin",
    FEMININ = "feminin",
    AUTRES = "autres"
}
export declare class Person {
    id: number;
    uuid: string;
    nom: string;
    prenom: string;
    sexe: string;
    email: string;
    telephone?: string;
    date_naissance: Date;
    createdAt: Date;
    updatedAt: Date;
}
