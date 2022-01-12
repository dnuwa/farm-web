import styled, { css } from 'styled-components';

export const Panel = styled.div.attrs({
  className: `d-flex flex-column col-sm-12 col-md-9 col-lg-9 p-0`,
})`
  border: solid 1px #ddd;
  background-color: white;
  border-radius: 3px;
  font-family: ${`'Roboto'`};
`;

export const PanelHeading = styled.div.attrs({
  className: `d-flex`,
})`
  padding: 10px 15px;
  color: #333;
  background-color: #f5f5f5;
  border-bottom: solid 1px #ddd;
  border-radius: 3px 3px 0 0;
  font-family: ${`'Roboto'`};
`;

export const HeadingSections = styled.div.attrs({
  className: `col-sm d-flex`,
})``;

export const Label = styled.div.attrs({
  className: `d-flex`,
})`
  font-weight: 700;
  font-family: ${`'Roboto'`};
`;

export const HeadingButton = styled.div.attrs({
  className: `pr-2`,
})`
  font-family: ${`'Roboto'`};
`;

export const PanelBody = styled.div.attrs({
  className: `d-flex`,
})`
  font-family: ${`'Roboto'`};
`;

export const PanelContentWrapper = styled.div.attrs({
  className: `d-flex p-3`,
})``;

export const TabLeft = styled.div.attrs({
  className: `col-4 p-3`,
})``;

export const PlannerSection = styled.div.attrs({
  className: `col-8 p-3`,
})``;

export const EmptyState = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  font-family: ${`'Roboto'`};
  color: #8a6d;
  background-color: #fcf8e3;
  border: 1px solid #faebcc;
  border-radius: 3px;
  padding: 16px;
  width: 100%;
  height: 55px;
`;

export const InnerBodySection = styled.div.attrs({
  className: `d-flex flex-column p-3 w-100`,
})``;

export const InputWrapper = styled.div.attrs({
  className: `d-flex flex-column w-100 mb-3`,
})``;

export const HeaderLable = styled.div.attrs({
  classname: `d-flex`,
})`
  ${() => css`
    font-size: ${({ size = '16px' }) => size};
    color: #333;
    font-weight: 700;
    margin-bottom: ${({ mb = '0' }) => mb};
  `}
`;

export const BtnWrapper = styled.div.attrs({
  className: `col-2 p-0 m-0`,
})``;

export const EmptySateTxt = styled.p.attrs({
  className: `d-flex m-0 pb-1`,
})``;

export const SectionContentWrapper = styled.div.attrs({
  className: `d-flex`,
})``;

export const DocsTable = styled.div.attrs({
  className: `col-8 m-0`,
})`
  padding: 16px 0;
`;

export const TableContent = styled.div.attrs({ className: `col-sm` })`
  border: 1px solid #ddd;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
`;

export const DocsUplooadForm = styled.form.attrs({
  className: `col-4 mt-3`,
})``;

export const DocsInput = styled.div.attrs({
  className: `d-flex flex-column w-100 mt-3`,
})``;

export const FileUploadBtn = styled.div.attrs({
  className: `d-flex flex-column mt-3`,
})`
  width: 50%;
`;

export const TableContentBB = styled.div.attrs({
  className: `col-sm`,
})`
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
`;

export const DataContent = styled.div.attrs({
  className: `col-sm`,
})`
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  padding: 8px;
`;

export const ProfileContentWrapper = styled.div.attrs({
  className: `d-flex flex-column m-3`,
})``;

export const TimeLineImg = styled.img.attrs({
  className: `d-flex`,
})`
  height: 200px;
`;

export const ProfileImgWrapper = styled.div.attrs({
  className: `d-flex mb-5`,
})`
  width: 50%;
`;

export const ProfileImg = styled.img.attrs({
  className: `d-flex p-2`,
})`
  background-image: url(${({ url }) => url});
  border: solid 1px #ddd;
  height: 150px;
  margin: -20% 12px;
  width: 40%;
`;

export const UserContent = styled.div.attrs({
  className: `d-flex flex-column p-2`,
})`
  color: #333;
`;

export const ProfileTxt = styled.div.attrs({
  className: `d-flex p-0 m-0`,
})``;

const UsrInfo = styled.div.attrs({
  className: `d-flex`,
})`
  border-top: 1px solid #ddd;
  color: #333;

  .lable {
    font-weight: 700;
  }
`;

const UsrVal = styled.div.attrs({
  className: `col-sm p-2`,
})``;

export const UserInfo = ({ label, value }) => (
  <UsrInfo>
    <UsrVal className="lable">{label}</UsrVal>
    <UsrVal>{value}</UsrVal>
  </UsrInfo>
);

export const TextInputsSection = styled.div.attrs({
  className: `col-8 m-0 p-0`,
})``;

export const RowWrapper = styled.div.attrs({
  className: `d-flex mb-4 justify-content-between`,
})``;

export const InRowInput = styled.div.attrs({
  className: `col-sm p-0`,
})`
  /* .alignleft{
    padding: 0 !important;
  } */
`;

export const InRowLeft = styled.div.attrs({
  className: `col-sm pl-0`,
})``;

const RadioBtnWrapper = styled.div.attrs({
  className: `d-flex`,
})``;

const RadioLabel = styled.label`
  margin: auto 6px;
`;

const TheInput = styled.input`
  margin: auto 0;
`;

export const RadioButton = ({ label, value, checked, onChangeValue = false }) => (
  <RadioBtnWrapper>
    <TheInput type="radio" value={value} checked={checked} onChange={e => onChangeValue(e.target.value)} />
    <RadioLabel>{label}</RadioLabel>
  </RadioBtnWrapper>
);

const CheckBtnWrapper = styled.div.attrs({
  className: `d-flex`,
})``;

export const CheckBox = ({ label, value, checked, onChangeValue = false }) => (
  <CheckBtnWrapper>
    <TheInput type="checkbox" value={value} checked={checked} onChange={e => onChangeValue(e.target.value)} />
    <RadioLabel>{label}</RadioLabel>
  </CheckBtnWrapper>
);

export const ImageInputWrapper = styled.div.attrs({
  className: `col-sm`,
})``;

export const BtnsWrapper = styled.div.attrs({
  className: `d-flex ml-auto`,
})``;

export const DashboardBody = styled.div.attrs({
  className: `d-flex justify-content-between p-3`,
})``;

export const RightSection = styled.div.attrs({
  className: `col-sm ml-4`,
})`
  border: solid 1px #ddd;
  color: #555;
  padding: 12px;
`;

export const LeftSection = styled.div.attrs({
  className: `col-sm`,
})`
  border: solid 1px #ddd;
  color: #555;
  padding: 12px;
`;

export const DisplaFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DisplaFlexColumn = styled.div`
  display: flex;
  flex-direction: column; ;
`;

export const DocsHelperText = styled.div`
  color: #8a6d3b;
  background-color: #fcf8e3;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #faebcc;
  border-radius: 4px;
`;

export const TitlesWrapper = styled.div`
  display: flex;
  border-bottom: solid 1px #ddd;
  /* border-radius: 3px; */
`;

export const TableWrap = styled.div`
  display: flex;
  flex-direction column;
  border: solid 1px #ddd;
  border-radius: 3px;
`;

export const RowData = styled.div.attrs({
  className: `col-sm`,
})`
  /* border-bottom: solid 1px #ddd; */
  color: #555;
  padding: 12px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #ddd;
  margin-top: 10px;
`;

export const RemveBtn = styled.button.attrs({
  className: `d-flex`,
})`
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 6px;
`;

export const BtnText = styled.p`
  margin: 0;
  padding-left: 4px;
`;

export const BottomMargin = styled.div`
  margin-bottom: 8px;
`
