import React from 'react';
import {
  Panel,
  PanelHeading,
  HeadingSections,
  Label,  
  InnerBodySection,
  EmptyState,
} from 'components/Planner/PlannerComponents';
import { DefaultButton } from 'components/Buttons';
import { AddFilled16 } from '@carbon/icons-react';

const Wallet = () => {
  return (
    <Panel>
      <PanelHeading>
        <HeadingSections>
          <Label>A/C Balance:</Label> UGX0
        </HeadingSections>
        <DefaultButton auto>
          <AddFilled16 />
          Topup Wallet
        </DefaultButton>
      </PanelHeading>
      <InnerBodySection>
        <EmptyState>You have no transactions yet.</EmptyState>
      </InnerBodySection>
    </Panel>
  );
};

Wallet.layout = 'planner';
export default Wallet;
