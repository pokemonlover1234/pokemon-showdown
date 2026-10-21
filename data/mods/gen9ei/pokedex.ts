import datatables from "./ionite";

export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = datatables["pokedex"]();
(Pokedex as any)["palkiaprimal"]["requiredItem"] = "lustriousorb"
(Pokedex as any)["dialgaprimal"]["requiredItem"] = "adamantorb"
