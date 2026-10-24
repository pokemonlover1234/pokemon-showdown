import datatables from "./ionite";

export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = datatables["pokedex"]();
(Pokedex as any)["palkiaprimal"]["requiredItem"] = "lustrousorb";
(Pokedex as any)["dialgaprimal"]["requiredItem"] = "adamantorb";
