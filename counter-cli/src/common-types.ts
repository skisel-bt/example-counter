import { type Contract, type Witnesses } from '../../contract/src/managed/counter/contract/index.cjs';
import type { CounterPrivateState } from '../../contract/src/witnesses';
import { type MidnightProviders } from '@midnight-ntwrk/midnight-js-types';
import { type FoundContract } from '@midnight-ntwrk/midnight-js-contracts';

export type PrivateStates = {
  counterPrivateState: CounterPrivateState;
};

export type CounterProviders = MidnightProviders<'increment', PrivateStates>;

export type CounterContract = Contract<CounterPrivateState, Witnesses<CounterPrivateState>>;

export type DeployedCounterContract = FoundContract<CounterPrivateState, CounterContract>;
