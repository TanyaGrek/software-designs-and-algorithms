import { Item } from './Item';

export abstract class Weapon extends Item {
  readonly MODIFIER_CHANGE_RATE: number = 0.05;
  baseDamage: number;
  damageModifier: number = this.MODIFIER_CHANGE_RATE;
  baseDurability: number;
  durabilityModifier: number = this.MODIFIER_CHANGE_RATE;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number,
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  public getDamage(): number { return this.baseDamage + this.damageModifier };

  public getDurability(): number { return this.baseDurability + this.durabilityModifier };

  public toString(): string {
    return `${this.name} − Value: ${this.value}, Weight : ${this.weight.toFixed(2)},
     Damage : ${(this.baseDamage + this.damageModifier).toFixed(2)} ,
     Durability : ${((this.baseDurability + this.durabilityModifier) * 100).toFixed(2)}%
    `
  }

  use(): string {
    const effectiveDamage = this.baseDamage + this.damageModifier;
    const effectiveDurability = this.baseDurability + this.durabilityModifier - this.MODIFIER_CHANGE_RATE;

    const message = `You use the ${this.name}, dealing ${effectiveDamage.toFixed(2)} points of damage.`;

    if (effectiveDurability === 0) {
      this.durabilityModifier -= this.MODIFIER_CHANGE_RATE;
      return message + `The ${this.name} breaks`;
    } else if (effectiveDurability < 0) {
      return `You can't use the ${this.name}, it is broken`;
    }

    this.durabilityModifier -= this.MODIFIER_CHANGE_RATE;
    return message;
  }
}