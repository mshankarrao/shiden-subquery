// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, Enum, Struct, u32 } from '@polkadot/types';
import type { AccountId, Balance, H160 } from '@polkadot/types/interfaces/runtime';

/** @name EraIndex */
export interface EraIndex extends u32 {}

/** @name EraRewardAndStake */
export interface EraRewardAndStake extends Struct {
  readonly rewards: Balance;
  readonly staked: Balance;
}

/** @name EraStakingPoints */
export interface EraStakingPoints extends Struct {
  readonly total: Balance;
  readonly stakers: BTreeMap<AccountId, Balance>;
  readonly formerStakedEra: EraIndex;
  readonly claimedRewards: Balance;
}

/** @name Keys */
export interface Keys extends AccountId {}

/** @name SmartContract */
export interface SmartContract extends Enum {
  readonly isEvm: boolean;
  readonly asEvm: H160;
  readonly isWasm: boolean;
  readonly asWasm: AccountId;
}

export type PHANTOM_SHIDEN = 'shiden';
