import React from 'react';
import { Panel, PanelHeading, HeaderLable, BtnsWrapper } from 'components/Planner/PlannerComponents';
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

const RecivedQuotations = () => {
  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Awards & Certifications</HeaderLable>

        <BtnsWrapper>
          <DefaultButton auto>Add Award</DefaultButton>
        </BtnsWrapper>
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
          <HeaderLable>Image</HeaderLable>
        </TableData>
        <TableData>
          <HeaderLable>Title</HeaderLable>
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

RecivedQuotations.layout = 'sell';
export default RecivedQuotations;
