import { useCallback } from 'react'

// hooks
import useSushi from './useSushi'
import { useActiveWeb3React } from '.'

import { harvest, getFerreroMasterContract } from '../sushi/utils'

const useReward = (lpTokenAddress: number) => {
  const { account } = useActiveWeb3React()
  const sushi = useSushi()
  const masterChefContract = getFerreroMasterContract(sushi)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, lpTokenAddress, account)

    return txHash
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, lpTokenAddress, sushi])

  return { onReward: handleReward }
}

export default useReward
