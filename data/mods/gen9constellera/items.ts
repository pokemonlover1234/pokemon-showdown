export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
  berserkgene: {
		name: "Berserk Gene",
		spritenum: 388,
		onUpdate(pokemon) {
			if (pokemon.useItem()) {
			}
		},
		boosts: {
			atk: 2,
      def: -2,
		},
		num: 0,
		gen: 2,
		isNonstandard: "Past",
	},

};
