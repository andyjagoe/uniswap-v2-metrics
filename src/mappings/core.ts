import { BigDecimal } from '@graphprotocol/graph-ts'
import { Swap } from '../../generated/templates/Pair/Pair'
import {
  Buyer,
} from "../../generated/schema"
import {
  convertTokenToDecimal,
  ONE_BI,
} from './helpers'

export function handleSwap(event: Swap): void {
  /*
  let pair = Pair.load(event.address.toHexString())
  let token0 = Token.load(pair.token0)
  let token1 = Token.load(pair.token1)

  let amount0In = convertTokenToDecimal(event.params.amount0In, token0.decimals)
  let amount1In = convertTokenToDecimal(event.params.amount1In, token1.decimals)
  let amount0Out = convertTokenToDecimal(event.params.amount0Out, token0.decimals)
  let amount1Out = convertTokenToDecimal(event.params.amount1Out, token1.decimals)

  // totals for volume updates
  let amount0Total = amount0Out.plus(amount0In)
  let amount1Total = amount1Out.plus(amount1In)

  // ETH/USD prices
  let bundle = Bundle.load('1')

  // get total amounts of derived USD and ETH for tracking
  let derivedAmountETH = token1.derivedETH
    .times(amount1Total)
    .plus(token0.derivedETH.times(amount0Total))
    .div(BigDecimal.fromString('2'))
  let derivedAmountUSD = derivedAmountETH.times(bundle.ethPrice)

  */

  let buyer = Buyer.load(event.params.to.toHexString())
  if (buyer === null) {
    buyer = new Buyer(event.params.to.toHexString())
    buyer.createdAtBlockNumber = event.block.number
    buyer.createdAtTimestamp = event.block.timestamp
    //buyer.totalVolumeUSD = derivedAmountUSD
    //buyer.totalVolumeETH = derivedAmountETH
    buyer.txCount = ONE_BI
    buyer.save()
  } else {
    //buyer.totalVolumeUSD = buyer.totalVolumeUSD.plus(derivedAmountUSD)
    //buyer.totalVolumeETH = buyer.totalVolumeETH.plus(derivedAmountETH)
    buyer.txCount = buyer.txCount.plus(ONE_BI)
  } 
}
