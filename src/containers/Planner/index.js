import React, { useState, useEffect } from 'react';
import {
  Panel,
  PanelHeading,
  HeadingSections,
  Label,
  HeadingButton,
  PanelBody,
  TabLeft,
  PlannerSection,
  EmptyState,
  TitlesWrapper,
  RowData,
  TableWrap,
  ItemsWrapper,
  BottomMargin,
} from 'components/Planner/PlannerComponents';
import { DefaultButton } from 'components/Buttons';
import { withCookies } from 'react-cookie';
import PlannerEditItem from 'containers/Modals/PlannerEditItem';
import PlannerDeleteItem from 'containers/Modals/PlannerDeleteItems';
import { AddFilled16 } from '@carbon/icons-react';
import axios from 'axios';
import CreatePlanner from 'containers/Modals/CreatePlanner';

const Planner = ({ cookies }) => {
  const [planners, setPlanners] = useState(false);
  const [planner, setPlanner] = useState(false);
  const [isError, setError] = useState(false);

  let loggedIn = cookies.get('auth_token');

  const [plannerId, setPlannnerId] = useState('');

  const [relaod, setRelaod] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_AUTH_API}/client/planners/${loggedIn.data.user.ID}`,
      // headers: {
      //   Authorization: `Bearer ${isAuthoriszed}`,
      // },
    })
      .then(res => setPlanners(res.data.data.planners))
      .catch(err => setError(err.response));
  }, [, relaod]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_AUTH_API}/client/planners/single/${plannerId}`,
      // headers: {
      //   Authorization: `Bearer ${isAuthoriszed}`,
      // },
    })
      .then(res => setPlanner(res.data.data.planner))
      .catch(err => setError(err.response));
  }, [plannerId]);

  return (
    <Panel>
      <PanelHeading>
        <HeadingSections>
          <HeadingSections>
            <Label>Total: </Label> UGX{' '}
            {planner &&
              planner.items.length !== 0 ?
              planner.items
                .reduce((accumulator, { product, quantity }) => {
                  return Number(accumulator + quantity * product.local_price);
                }, 0)
                .toLocaleString() : 0}{' '}
          </HeadingSections>
          <HeadingSections>
            <Label>Savings: </Label> UGX 0
          </HeadingSections>
        </HeadingSections>
        <HeadingButton>
          <DefaultButton auto>
            <AddFilled16 />
            Topup Wallet
          </DefaultButton>
        </HeadingButton>
        <CreatePlanner setRelaod={setRelaod} />
      </PanelHeading>
      <PanelBody>
        <TabLeft>
        <DefaultButton bgColor="#fff" color="#555" border onClick={() => setPlannnerId('')} >
            General Planner
          </DefaultButton>
          <BottomMargin />
          {planners &&
            planners.length !== 0 &&
            planners.map(({ title, ID }) => (
              <div key={ID}>
                <DefaultButton bgColor="#fff" color="#555" border onClick={() => setPlannnerId(ID)}>
                  {title}
                </DefaultButton>
                <BottomMargin />
              </div>
            ))}
        </TabLeft>
        <PlannerSection>
          {planner && planner.items.length !== 0 ? (
            <>
              <TableWrap>
                <TitlesWrapper>
                  <RowData>
                    <Label>Planner Total</Label>
                  </RowData>
                  <RowData>
                    <Label>Wallet Savings</Label>
                  </RowData>
                  <RowData>
                    <Label>Balance to Goal</Label>
                  </RowData>
                </TitlesWrapper>
                <TitlesWrapper>
                  <RowData>
                    UGX{' '}
                    {planner.items
                      .reduce((accumulator, { product, quantity }) => {
                        return Number(accumulator + quantity * product.local_price);
                      }, 0)
                      .toLocaleString()}{' '}
                  </RowData>
                  <RowData>{planner.balance}</RowData>
                  <RowData>
                    UGX{' '}
                    {planner.balance -
                      planner.items.reduce((accumulator, { product, quantity }) => {
                        return Number(accumulator + quantity * product.local_price);
                      }, 0)}
                  </RowData>
                </TitlesWrapper>
              </TableWrap>
              <ItemsWrapper>
                {planner.items.map(({ itemId, product, quantity }) => (
                  <TitlesWrapper key={itemId}>
                    <RowData>{`N/A`}</RowData>
                    <RowData>
                      <>
                        <Label>{product.product_name}</Label>
                        <Label>Quantity: </Label>
                        {quantity}
                        <Label>Price: </Label>UGX {product.local_price} <Label>Total: </Label> UGX{' '}
                        {parseInt(product.local_price) * quantity}{' '}
                      </>
                    </RowData>
                    <RowData>
                      <PlannerEditItem itemId={itemId} />
                      <PlannerDeleteItem itemId={itemId} />
                    </RowData>
                  </TitlesWrapper>
                ))}
              </ItemsWrapper>
            </>
          ) : (
            <EmptyState>You have no items in this planner.</EmptyState>
          )}
        </PlannerSection>
      </PanelBody>
    </Panel>
  );
};

Planner.layout = 'planner';
export default withCookies(Planner);
