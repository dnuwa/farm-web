import styled from 'styled-components';
import { Media } from 'utils/theme';

export const ContentWrapper = styled.div.attrs({
  className: `col-sm-12 col-md-4 col-lg-6`,
})`
  margin: 0 auto 24px auto;
  font-family: ${`'Roboto'`};
`;

export const RowWrapper = styled.div.attrs({
  className: `d-flex mt-3 mb-3`,
})`
  font-family: ${`'Roboto'`};
  flex-wrap: wrap;
`;

export const InputContainer = styled.div.attrs({
  className: `col-sm`,
})`
  font-family: ${`'Roboto'`};
`;

export const BtnWrapper = styled.div.attrs({
  className: `d-flex`,
})`
  width: 30%;
  margin: 16px auto;
  font-family: ${`'Roboto'`};
`;

export const ProgressBarWrapper = styled.div.attrs({
  className: `d-flex`,
})`
  margin: 15px;
  border-bottom: 3px solid #f79640;
  font-family: ${`'Roboto'`};
`;

const StageNumber = styled.div.attrs({
  className: 'd-flex',
})`
  border-radius: 50%;
  padding: 6px 10px;
  color: white;
  font-family: ${`'Roboto'`};
  background-color: ${({ active = false }) => (active ? `#8ac240` : `#f79640`)};
  ${Media.phone`
      padding: 3px 5px;
    `}

  ${Media.tablet`
      padding: 3px 5px;
    `}

  ${Media.giant`
    padding: 3px 5px;
  `}
`;

const TheLabel = styled.p`
  padding: 0 0 0 6px;
  margin: auto 0;
  color: #333;
  font-weight: bold;
  font-family: ${`'Roboto'`};
  ${Media.phone`
      padding: 0 0 0 4px;
    `}

  ${Media.tablet`
      padding: 0 0 0 4px;
    `}

  ${Media.giant`
    padding: 0 0 0 4px;
  `}
`;

const StageWrapper = styled.div.attrs({
  className: `d-flex col-sm`,
})`
  padding: 12px;
  margin-bottom: -3px;
  font-family: ${`'Roboto'`};

  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 3px;
    background-color: ${({ active = false }) => (active ? `#8ac240` : `#f79640`)};
    bottom: 0;
    left: 0;
  }
`;

export const StageMark = ({ lable, number, active }) => (
  <StageWrapper active={active}>
    <StageNumber active={active}>{number}</StageNumber>
    <TheLabel>{lable}</TheLabel>
  </StageWrapper>
);
