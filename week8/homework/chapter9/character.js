export class Character {
  constructor(name, health, strength, logFn = console.log) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.gold = 10; // New characters start with 10 gold coins
    this.keys = 1; // New characters start with one key
    this.log = logFn;
  }

  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      this.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        this.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        this.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold coins and ${target.keys} keys`
        );
        this.xp += bonusXP;
      }
    } else {
      this.log(`${this.name} can’t attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength, ${this.xp} XP points, ${this.gold} gold coins and ${this.keys} keys.`;
  }
}