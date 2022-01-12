import React from 'react';
import {
  Panel,
  PanelHeading,
  HeaderLable,
  SectionContentWrapper,
  TableContentBB,
} from 'components/Planner/PlannerComponents';

const MyQuotations = () => {
  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Recent Quotations</HeaderLable>
      </PanelHeading>
      <SectionContentWrapper>
        <TableContentBB>#No</TableContentBB>
        <TableContentBB>Product Name</TableContentBB>
        <TableContentBB>Quantity</TableContentBB>
        <TableContentBB>Supplier Reply</TableContentBB>
        <TableContentBB>Requested Date</TableContentBB>
        <TableContentBB>Status</TableContentBB>
      </SectionContentWrapper>
    </Panel>
  );
};

MyQuotations.layout = 'planner';
export default MyQuotations;
