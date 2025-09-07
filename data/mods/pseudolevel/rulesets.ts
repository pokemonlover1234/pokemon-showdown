export const Rulesets: import('../../../sim/dex-formats').ModdedFormatDataTable = {
    standard: {
        effectType: 'ValidatorRule',
        name: "Standard",
        ruleset: ["Metagame One Restricted Mon", "Sleep Clause Mod"]
    },
    onerestrictmon: {
        effectType: 'Rule',
        name: "Metagame One Restricted Mon",
        onValidateTeam(team){
            let hasRestricted = false;
            for (const set of team) {
                if(this.dex.species.get(set.species).tags.includes("Ionite - Restricted")){
                    if(hasRestricted) {
                        return ["Hey now don't be cheeky. 1 restricted Pokémon only."];
                    }
                    hasRestricted = true;
                }
            }
        }
    }

}