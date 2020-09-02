import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { Contract } from 'web3-eth-contract'

import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import { AddIcon, RemoveIcon } from '../../../components/icons'
import IconButton from '../../../components/IconButton'
import Label from '../../../components/Label'
import Value from '../../../components/Value'

import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useStake from '../../../hooks/useStake'
import useStakedBalance from '../../../hooks/useStakedBalance'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useUnstake from '../../../hooks/useUnstake'

import { getDisplayBalance } from '../../../utils/formatBalance'

import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'

interface StakeProps {
  poolContract: Contract,
  tokenContract: Contract,
  tokenName: string
}

const Stake: React.FC<StakeProps> = ({
  poolContract,
  tokenContract,
  tokenName,
}) => {

  const [requestedApproval, setRequestedApproval] = useState(false)

  const allowance = useAllowance(tokenContract, poolContract)
  const { onApprove } = useApprove(tokenContract, poolContract)

  const tokenBalance = useTokenBalance(tokenContract.options.address)
  const stakedBalance = useStakedBalance(poolContract)

  const { onStake } = useStake(poolContract, tokenName);
  const { onUnstake } = useUnstake(poolContract)

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>🕺</CardIcon>
            <StyledCardHeaderContent>
              <Value value="Yupster" />
              <Label text={`@yupster`} />
            </StyledCardHeaderContent>
          </StyledCardHeader>
          <StyledCardActions>
            {!allowance.toNumber() ? (
              <Button
                disabled={requestedApproval}
                onClick={handleApprove}
                text={`Connect Twitter`}
              />
            ) : (
              <>
                <Button text="Unstake" onClick={onPresentWithdraw} />
                <StyledActionSpacer />
                {false && (
                  <IconButton onClick={onPresentDeposit}>
                    <AddIcon />
                  </IconButton>
                )}
              </>
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`
const StyledCardHeaderContent = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  margin: 0 auto ${props => props.theme.spacing[3]}px;
  text-shadow: 3px 3px 12px ${props => props.theme.color.grey[100]}, -3px -3px 6px ${props => props.theme.color.grey[300]}cc;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.theme.spacing[1]}px;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${props => props.theme.spacing[4]}px;
  width: ${props => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Stake
