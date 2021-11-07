import { Weapon } from './Weapon';

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
  ) {
    const defaultName = 'sword';
    super(defaultName, baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    if (this.baseDurability + this.durabilityModifier < 1)
      this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
  }
}