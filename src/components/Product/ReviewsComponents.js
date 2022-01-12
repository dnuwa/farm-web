import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

export const ReviewsWrapper = styled.div.attrs({
  className: `d-flex flex-wrap`,
})`
  margin-bottom: 20px;
  background-color: #fff;
  /* border: 1px solid transparent; */
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
`;

export const ReviewsHeader = styled.div.attrs({
  className: `d-flex`,
})`
  font-size: 16px;
  color: #333;
  background-color: #f5f5f5;
  width: 100%;
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
`;

export const ReviewSummeryWrapper = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  width: 30%;
  padding: 15px;
`;

export const SummeryHeader = styled.div.attrs({
  className: `d-flex`,
})`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: #6d6c6c;
  font-style: normal;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
`;

export const ReviewBox = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  border: solid 1px #ddd;
  padding: 15px;
  margin-top: 15px;
  background-color: #fafafa;
  width: 68%;
  align-items: flex-start;
  margin: 8px;
`;

export const SignReviewButton = styled.button.attrs({
  className: ``,
})`
  width: auto;
  background-color: #8ac240;
  text-align: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: white;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  /* margin: 0 auto; */
  border: transparent;
  font-family: 'Roboto';
`;

export const InputWrapper = styled.div`
  padding-bottom: 16px;
  width: 100%;
`;

// export const ProductDesdcription = styled.div.attrs({
//   className: `d-flex flex-wrap`,
// })`
//   width: 70%;
//   background: #ffffff;
//   margin-bottom: 30px;
//   margin-top: 30px;
//   padding: 15px;
//   border: solid 1px #ddd;
//   border-radius: 4px;

//   ${Media.phone`
//     width:  100%;
//   `}

//   ${Media.tablet`
//     width:  100%;
//   `}

//   ${Media.giant`
//     width:  100%;
//   `}
// `;
