import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Panel, PanelHeading, HeaderLable, HeadingButton, HeadingSections } from 'components/Planner/PlannerComponents';
import {
  TableData,
  TableWrapper,
  DataTableHeader,
  EntriesSection,
  ColSpan,
  SearchWrapper,
  SearchLable,
  TableEmptySate,
  TableFooter,
  Pagination,
  EditBtn,
  DeleteBtn,
} from 'components/Table/TableComponent';
import { useRouter } from 'next/router';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { TextInput, Dropdown } from 'components/Inputs/TextInput';
import { DefaultButton } from 'components/Buttons';
import { AddFilled16 } from '@carbon/icons-react';
import Delete from './Delete';
import { Edit16 } from '@carbon/icons-react';

import { get } from 'lodash';

const MyProductsList = ({ cookies }) => {
  let isAuthoriszed = cookies.get('access_token');
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  let loggedIn = cookies.get('auth_token');

  // todo: get items by owner_id
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
      params: {
        limit: 1000000,
        page: 1,
        type: `service`,
        owner: get(loggedIn, 'data.user.ID'),
      },
    })
      .then(res => setItems(res.data.data.items))
      .catch(err => setError(err.response));
  }, [, loading]);

  return (
    <Panel>
      {/* <PanelHeading>
        <HeaderLable>Products</HeaderLable>
        <HeadingButton>
          <DefaultButton auto>
            <AddFilled16 />
            Topup Wallet
          </DefaultButton>
        </HeadingButton>
      </PanelHeading> */}

      <PanelHeading>
        <HeadingSections>
          <HeaderLable>Products</HeaderLable>
        </HeadingSections>
        <HeadingButton>
          <Link href={`/my-services/new`}>
            <DefaultButton auto>
              <AddFilled16 />
              Add Service
            </DefaultButton>
          </Link>
        </HeadingButton>
      </PanelHeading>

      <DataTableHeader>
        <EntriesSection>
          <ColSpan>Show</ColSpan>
          <ColSpan>
            <Dropdown>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </Dropdown>
          </ColSpan>
          <ColSpan>Entries</ColSpan>
        </EntriesSection>

        <SearchWrapper>
          <SearchLable>Search:</SearchLable>
          <TextInput />
        </SearchWrapper>
      </DataTableHeader>

      <TableWrapper>
        <TableData>
          <HeaderLable>Product</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Price</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Category</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Promotions</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Approval</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Actions</HeaderLable>
        </TableData>
      </TableWrapper>
      {items !== null && items.length !== 0 ? (
        items.map(product => (
          <TableWrapper>
            <TableData>
              <HeaderLable>{product.product_name}</HeaderLable>
            </TableData>
            <TableData>
              <HeaderLable>{product.local_price}</HeaderLable>
            </TableData>
            <TableData>
              <HeaderLable>{product.category}</HeaderLable>
            </TableData>
            <TableData>
              <HeaderLable>{product.promotions || 'N/A'}</HeaderLable>
            </TableData>
            <TableData>
              <HeaderLable>{product.update_status === 0 ? `Pending` : `Approved`}</HeaderLable>
            </TableData>
            <TableData>
              <HeaderLable>
                <Link href={`/my-services/${product.ID}`}>
                  <EditBtn><Edit16 />Edit</EditBtn>
                </Link>
                <Delete id={product.ID} setLoading={setLoading} />
              </HeaderLable>
            </TableData>
          </TableWrapper>
        ))
      ) : (
        <TableEmptySate>No data available in table</TableEmptySate>
      )}

      {items !== null && items.length !== 0 && (
        <TableFooter>
          {/* <ColSpan>
            Showing {items.filter(item => parseInt(item.product_owner) === parseInt(loggedIn.data.user.ID)).length} of{' '}
            {items.filter(item => parseInt(item.product_owner) === parseInt(loggedIn.data.user.ID)).length} entries
          </ColSpan> */}
          {/* <Pagination>
            <DefaultButton bgColor="#fff" auto border color="#333">
              First
            </DefaultButton>
            <DefaultButton bgColor="#fff" auto border color="#333">
              Previous
            </DefaultButton>
            <DefaultButton bgColor="#fff" auto border color="#333">
              Next
            </DefaultButton>
            <DefaultButton bgColor="#fff" auto border color="#333">
              Last
            </DefaultButton>
          </Pagination> */}
        </TableFooter>
      )}
    </Panel>
  );
};

MyProductsList.layout = 'sell';
export default withCookies(MyProductsList);
