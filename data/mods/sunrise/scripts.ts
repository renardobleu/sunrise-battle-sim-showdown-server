export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen7',
  mod: 'sunrise',
	gen: 7,
	/**
	 * Given a table of base stats and a pokemon set, return the actual stats.
	 */
  spreadModify(baseStats, set) {
		const modStats: StatsTable = {hp: 10, atk: 10, def: 10, spa: 10, spd: 10, spe: 10};
		let statName: StatName;
		for (statName in modStats) {
			const stat = baseStats[statName];
      modStats[statName] = stat + 1 * set.level + set.evs[statName];
		}
		if ('hp' in baseStats) {
			const stat = baseStats['hp'];
      modStats['hp'] = stat + 2 * set.level + set.evs['hp'];
		}
		return this.natureModify(modStats, set);
  },
  /**
   * In Sunrise, Pokemons are always adjacent
   */
	isAdjacent(pokemon1, pokemon2) {
		if (pokemon1.fainted || pokemon2.fainted) return false;
		return true;
	},
};
