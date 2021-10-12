// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeMap, BTreeSet, Bytes, Enum, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, H160, H256, Hash, Weight } from '@polkadot/types/interfaces/runtime';
import type { SessionKeys3 } from '@polkadot/types/interfaces/session';
import type { AccountInfoWithProviders } from '@polkadot/types/interfaces/system';

/** @name AccountInfo */
export interface AccountInfo extends AccountInfoWithProviders {}

/** @name AuthorityId */
export interface AuthorityId extends AccountId {}

/** @name AuthorityVote */
export interface AuthorityVote extends u32 {}

/** @name ChallengeGameOf */
export interface ChallengeGameOf extends Struct {
  readonly challenges: Vec<Hash>;
  readonly createdBlock: BlockNumber;
  readonly decision: Decision;
  readonly propertyHash: Hash;
}

/** @name Claim */
export interface Claim extends Struct {
  readonly amount: u128;
  readonly approve: BTreeSet<AuthorityId>;
  readonly complete: bool;
  readonly decline: BTreeSet<AuthorityId>;
  readonly params: Lockdrop;
}

/** @name ClaimId */
export interface ClaimId extends H256 {}

/** @name ClaimVote */
export interface ClaimVote extends Struct {
  readonly approve: bool;
  readonly authority: u16;
  readonly claim_id: ClaimId;
}

/** @name Decision */
export interface Decision extends Enum {
  readonly isUndecided: boolean;
  readonly isTrue: boolean;
  readonly isFalse: boolean;
}

/** @name DollarRate */
export interface DollarRate extends u128 {}

/** @name EraIndex */
export interface EraIndex extends u32 {}

/** @name EraStakingPoints */
export interface EraStakingPoints extends Struct {
  readonly individual: BTreeMap<AccountId, Balance>;
  readonly total: Balance;
}

/** @name Keys */
export interface Keys extends SessionKeys3 {}

/** @name Lockdrop */
export interface Lockdrop extends Struct {
  readonly duration: u64;
  readonly public_key: U8aFixed;
  readonly transaction_hash: H256;
  readonly type: u8;
  readonly value: u128;
}

/** @name Parameters */
export interface Parameters extends Struct {
  readonly canBeNominated: bool;
  readonly optionExpired: u128;
  readonly optionP: u32;
}

/** @name PredicateContractOf */
export interface PredicateContractOf extends Struct {
  readonly inputs: Bytes;
  readonly predicateHash: Hash;
}

/** @name PredicateHash */
export interface PredicateHash extends Hash {}

/** @name PrefabOvmModule */
export interface PrefabOvmModule extends Struct {
  readonly code: Bytes;
  readonly scheduleVersion: u32;
}

/** @name Property */
export interface Property extends Struct {
  readonly inputs: Vec<Bytes>;
  readonly predicateAddress: AccountId;
}

/** @name PropertyOf */
export interface PropertyOf extends Struct {
  readonly inputs: Vec<Bytes>;
  readonly predicateAddress: AccountId;
}

/** @name Schedule */
export interface Schedule extends Struct {
  readonly putCodePerByteCost: Weight;
  readonly version: u32;
}

/** @name SmartContract */
export interface SmartContract extends Enum {
  readonly isWasm: boolean;
  readonly asWasm: AccountId;
  readonly isEvm: boolean;
  readonly asEvm: H160;
}

/** @name StakingParameters */
export interface StakingParameters extends Struct {
  readonly canBeNominated: bool;
  readonly optionExpired: u128;
  readonly optionP: u32;
}

/** @name TickerRate */
export interface TickerRate extends Struct {
  readonly authority: u16;
  readonly btc: u128;
  readonly eth: u128;
}

/** @name VoteCounts */
export interface VoteCounts extends Struct {
  readonly bad: u32;
  readonly good: u32;
}

export type PHANTOM_SHIDEN = 'shiden';
