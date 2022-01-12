import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
import axios from 'axios';
// import { DefaultButton } from 'components/Buttons';
// import { Calendar16, ViewFilled16, Download16 } from '@carbon/icons-react';
import PromoModal from 'containers/Modals/PromoModal';
import { get } from 'lodash';

const Promotions = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items/${id}`,
      // headers: {
      //   Authorization: `Bearer ${isAuthoriszed}`,
      // },
    })
      .then(res => setProduct(res.data))
      .catch(err => setError(err.response));
  }, []);

  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Product Promotions</HeaderLable>
        <BtnsWrapper>
          <PromoModal />
        </BtnsWrapper>
      </PanelHeading>

      <DashboardBody>
        <LeftSection>
          <HeaderLable>Current Promotion</HeaderLable>
          <EmptyState>This product has no current promotion</EmptyState>
        </LeftSection>

        <RightSection>
          <HeaderLable>Product Details</HeaderLable>
          <SectionContentWrapper>
            <TableContentBB>Product ID</TableContentBB>
            <TableContentBB>{id}</TableContentBB>
          </SectionContentWrapper>
          <SectionContentWrapper>
            <TableContentBB>Product Name</TableContentBB>
            <TableContentBB>{get(product, 'data.item.product_name', '')}</TableContentBB>
          </SectionContentWrapper>
          <SectionContentWrapper>
            <TableContentBB>Price</TableContentBB>
            <TableContentBB>{get(product, 'data.item.last_price', '')}</TableContentBB>
          </SectionContentWrapper>
          <SectionContentWrapper>
            <TableContentBB>Featured Image</TableContentBB>
            <TableContentBB></TableContentBB>
          </SectionContentWrapper>
        </RightSection>
      </DashboardBody>

      <DashboardBody>
        <LeftSection>
          <HeaderLable>Current Promotion</HeaderLable>
          <EmptyState>This product has no other promotions</EmptyState>
        </LeftSection>

        {/* <RightSection></RightSection> */}
      </DashboardBody>
    </Panel>
  );
};

Promotions.layout = 'sell';
export default Promotions;
