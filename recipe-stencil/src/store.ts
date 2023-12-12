import { createStore } from "@stencil/store";

interface StoreState {
  ingredients: Ingredient[];
}

const { state } = createStore<StoreState>({
  ingredients: [],
});



export class Ingredient{
    id: String;
    season_start: String;
    season_end: String;
    image: String;

    static mapToClass(json: any) : Ingredient {
        const result = new Ingredient();
        result.id = json["id"];
        result.season_start = json["season_start"];
        result.season_end = json["season_end"];
        result.image = json["image"];
        return result;
    }
}

export default state;