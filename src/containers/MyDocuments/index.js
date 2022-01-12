import React from 'react';
import {
  Panel,
  PanelHeading,
  HeaderLable,
  InnerBodySection,
  DocsHelperText,
  EmptySateTxt,
  SectionContentWrapper,
  DocsTable,
  TableContent,
  DocsUplooadForm,
  DocsInput,
  FileUploadBtn,
} from 'components/Planner/PlannerComponents';
import { TextInput } from 'components/Inputs/TextInput';
import { DefaultButton } from 'components/Buttons';

const MyDocumments = () => {
  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Account Verification Documents</HeaderLable>
      </PanelHeading>
      <InnerBodySection>
        <DocsHelperText>
          Please provide identification documents
          <EmptySateTxt>For individuals; provide back and front images or documents of your national ID </EmptySateTxt>
          <EmptySateTxt>
            For companies; provide an image or document of your certificate of incorporation or Tax Identification
            Number (TIN)
          </EmptySateTxt>
          <EmptySateTxt>
            For NGOs; provide an image or document of your NGO permit or Tax Identification Number (TIN)
          </EmptySateTxt>
        </DocsHelperText>
        <SectionContentWrapper>
          <DocsTable>
            <SectionContentWrapper>
              <TableContent>Title</TableContent>
              <TableContent>Download</TableContent>
              <TableContent>Delete</TableContent>
            </SectionContentWrapper>
          </DocsTable>
          <DocsUplooadForm>
            <DocsHelperText>
              <EmptySateTxt>. You may upload different faces of the same document one face at a time </EmptySateTxt>
              <EmptySateTxt>. You may also upload more than one type of identification document</EmptySateTxt>
              <EmptySateTxt>. The uploaded file can either be a pdf of an image</EmptySateTxt>
            </DocsHelperText>
            <DocsInput>
              <HeaderLable size="14px" mb="5px">
                Title
              </HeaderLable>
              <TextInput placeholder={`National ID / Passport`} />
            </DocsInput>
            <DocsInput>
              <HeaderLable size="14px" mb="5px">
                User File
              </HeaderLable>
              <TextInput type="file" />
            </DocsInput>
            <FileUploadBtn>
              <DefaultButton>Submit</DefaultButton>
            </FileUploadBtn>
          </DocsUplooadForm>
        </SectionContentWrapper>
      </InnerBodySection>
    </Panel>
  );
};

MyDocumments.layout = 'planner';
export default MyDocumments;
