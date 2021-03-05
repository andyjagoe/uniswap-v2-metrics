/* eslint-disable prefer-const */
import { PairCreated } from '../../generated/Factory/Factory'
import { Pair as PairTemplate } from '../../generated/templates'

export function handleNewPair(event: PairCreated): void {
  PairTemplate.create(event.params.pair)
}
