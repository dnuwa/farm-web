import React from 'react';
import { Panel, PanelHeading, HeaderLable } from 'components/Planner/PlannerComponents';
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
} from 'components/Table/TableComponent';
import { TextInput, Dropdown } from 'components/Inputs/TextInput';
import { DefaultButton } from 'components/Buttons';

const RecivedOrders = () => {
  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Orders</HeaderLable>
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
          <HeaderLable>Order</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Delivery</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Total(UGX)</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Date</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Actions</HeaderLable>
        </TableData>
      </TableWrapper>
      <TableEmptySate>No data available in table</TableEmptySate>
      <TableFooter>
        <ColSpan>Showing 0 to 0 of 0 entries</ColSpan>
        <Pagination>
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
        </Pagination>
      </TableFooter>
    </Panel>
  );
};

RecivedOrders.layout = 'sell';
export default RecivedOrders;
