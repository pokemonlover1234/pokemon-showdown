import datatables from "./ionite";

export const Pokedex: import('../../../sim/dex-species').ModdedSpeciesDataTable = datatables["pokedex"]();
((Pokedex as any)["palkiaprimal"] as any)["requiredItem") = "lustrousorb";
((Pokedex as any)["dialgaprimal"] as any)["requiredItem") = "adamantorb";
