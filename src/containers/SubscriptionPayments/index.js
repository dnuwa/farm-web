import React from 'react';
import {
  Panel,
  PanelHeading,
  HeaderLable,
  TableContentBB,
  SectionContentWrapper,
} from 'components/Planner/PlannerComponents';

const SubscriptionPayments = () => {
  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Previous Payments</HeaderLable>
      </PanelHeading>

      <SectionContentWrapper>
        <TableContentBB>#Reference No.</TableContentBB>
        <TableContentBB>Package Name</TableContentBB>
        <TableContentBB>Amount Paid (UGX)</TableContentBB>
        <TableContentBB>Payment Method</TableContentBB>
        <TableContentBB>Created</TableContentBB>
        <TableContentBB>Period</TableContentBB>
        <TableContentBB>Duration</TableContentBB>
        <TableContentBB>Status</TableContentBB>
      </SectionContentWrapper>
    </Panel>
  );
};

SubscriptionPayments.layout = 'sell';
export default SubscriptionPayments;
