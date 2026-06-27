export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	batonpass: {
		inherit: true,
		selfSwitch: true,
	},
	darkvoid: {
		inherit: false,
		num: 464,
		accuracy: 50,
		basePower: 0,
		category: "Status",
		name: "Dark Void",
		pp: 10,
		priority: 0,
		flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1},
		status: 'slp',
		onModifyMove(move, pokemon, target) {
			if (target?.effectiveWeather() === 'nighttime') {
				move.accuracy = true;
				break;
			}
		},
		onTry(source, target, move) {
			if (move.hasBounced) {
				return;
			}
			this.add('-fail', source, 'move: Dark Void');
			return null;
		},
		target: "allAdjacentFoes",
		type: "Dark",
		zMove: { effect: 'clearnegativeboost' },
		contestType: "Clever",
	},
};
