import React from 'react';
import {
  Panel,
  PanelHeading,
  EmptyState,
  HeaderLable,
  BtnsWrapper,
  HeadingButton,
  PanelContentWrapper,
  DashboardBody,
  LeftSection,
  RightSection,
  TableContentBB,
  SectionContentWrapper,
} from 'components/Planner/PlannerComponents';
import { DefaultButton } from 'components/Buttons';
import { Calendar16, ViewFilled16, Download16 } from '@carbon/icons-react';

const Dashboard = () => {
  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Dashboard</HeaderLable>
        <BtnsWrapper>
          <HeadingButton>
            <DefaultButton bgColor="#ec971f" auto>
              <Calendar16 />
              Today
            </DefaultButton>
          </HeadingButton>
          <HeadingButton>
            <DefaultButton bgColor="#ec971f" auto>
              <Calendar16 />
              This Week
            </DefaultButton>
          </HeadingButton>
          <HeadingButton>
            <DefaultButton bgColor="#ec971f" auto>
              <Calendar16 />
              This Month
            </DefaultButton>
          </HeadingButton>
          <HeadingButton>
            <DefaultButton bgColor="#ec971f" auto>
              <Calendar16 />
              Custom
            </DefaultButton>
          </HeadingButton>
          <DefaultButton bgColor="#ec971f" auto>
            <Calendar16 />
            All Time
          </DefaultButton>
        </BtnsWrapper>
      </PanelHeading>

      <PanelContentWrapper>
        <EmptyState>
          Please edit your profile information by providing relevant identification documents here
        </EmptyState>
      </PanelContentWrapper>

      <DashboardBody>
        <LeftSection>
          <HeaderLable>MOST VIEWED ITEMS</HeaderLable>
          <EmptyState>No products found</EmptyState>
        </LeftSection>

        <RightSection>
          <HeaderLable>BEST RATED ITEMS</HeaderLable>
          <SectionContentWrapper>
            <TableContentBB>Name</TableContentBB>
            <TableContentBB>Average Rating</TableContentBB>
          </SectionContentWrapper>
        </RightSection>
      </DashboardBody>

      <DashboardBody>
        <LeftSection>
          <HeaderLable>BEST SELLING ITEMS</HeaderLable>
          <SectionContentWrapper>
            <TableContentBB>Name</TableContentBB>
            <TableContentBB>No. of Orders</TableContentBB>
          </SectionContentWrapper>
        </LeftSection>

        <RightSection>
          <HeaderLable>MOST LIKED ITEMS</HeaderLable>
          <SectionContentWrapper>
            <TableContentBB>Name</TableContentBB>
            <TableContentBB>No. of Likes</TableContentBB>
          </SectionContentWrapper>
        </RightSection>
      </DashboardBody>

      <PanelContentWrapper>
        <DefaultButton bgColor="#337ab7" auto>
          <ViewFilled16 />
          Detailed Report
        </DefaultButton>
        <DefaultButton auto>
          <Download16 />
          Download Report
        </DefaultButton>
      </PanelContentWrapper>
    </Panel>
  );
};

Dashboard.layout = 'sell';
export default Dashboard;
