import { Weapon } from './Weapon';

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
  ) {
    const defaultName = 'bow';
    super(defaultName, baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    if (this.damageModifier < this.baseDamage * 0.25)
      this.damageModifier += this.MODIFIER_CHANGE_RATE;
  }
}