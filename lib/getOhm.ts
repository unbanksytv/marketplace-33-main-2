import { Provider } from '@ethersproject/abstract-provider'
import { BigNumber, Signer } from 'ethers'
import { Common } from '@reservoir0x/sdk'

/**
 * Get a ohm contract instance and the signers ohm balance
 * @param chainId The Ethereum chain ID (eg: 1 - Ethereum Mainnet,
 *  4 - Rinkeby Testnet, etc)
 * @param provider An abstraction to access the blockchain data
 * @param signer An Ethereum signer object
 * @returns A ohm contract instance and the signers ohm balance
 */
export default async function getWeth(
  chainId: ChainId,
  provider: Provider,
  signer: Signer
) {
  const ohm = new Common.Helpers.sOhm(provider, chainId)
  const signerAddress = await signer.getAddress()

  try {
    const balance = BigNumber.from(await ohm.getBalance(signerAddress))
    return { ohm, balance }
  } catch (err) {
    console.error(err)
  }

  return null
}
