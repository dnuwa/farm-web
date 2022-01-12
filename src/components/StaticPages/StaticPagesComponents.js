import styled from 'styled-components';
import { Media } from 'utils/theme';

export const Header = styled.h2.attrs({
  className: `d-flex justify-content-center`,
})`
  /* font-size: 2.3rem; */
  font-weight: 500;
  padding-bottom: 10px;
  /* padding-top: 15px; */
  margin-bottom: 0;
  border-bottom: solid 1px #8ac240b8;
  color: #333;
`;

export const SaticParagraph = styled.p.attrs({
  className: `d-flex`,
})`
  font-size: 16px;
  /* font-weight: 700; */
  color: #333;
`;

export const DownloadLink = styled.button`
  width: 100%;
  text-align: center;
  background-color: #ccccff;
  padding: 10px;
  border-radius: 2px;
  line-height: 27px;
  color: #333333;
  margin-top: 5px;
  border: transparent;
  margin: 0 0 45px 0;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

export const MemeberCard = styled.div`
  box-shadow: 0px 0px 10px 3px #ddd;
  padding: 2rem 0.5rem;
  margin-bottom: 2rem;
  display: flex;

  img {
    width: 25%;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const PartnerCardWrapper = styled.div.attrs({
  className: `d-flex flex-wrap`,
})``;

export const PartnerCard = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  width: 25%;
  img {
    width: 100%;
    position: relative;
    min-height: 1px;
    padding: 15px;
  }
`;

export const AwoardCard = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  width: 30%;
  img {
    width: 100%;
    position: relative;
    min-height: 1px;
    padding: 15px;
  }
`;

export const TestimonialCard = styled.div.attrs({
  className: `d-flex flex-column`,
})`
  width: 32.5%;
  text-align: center;
  padding: 12px;
  background-color: #fff;
  margin: 4px;
  img {
    width: 100%;
    position: relative;
    min-height: 1px;
    padding: 4px;
  }
`;

export const ImpactWrapper = styled.div.attrs({
  className: `d-flex`,
})`
  background-image: url('/images/background.png');
  margin: 20px 0 100px;
`;

export const ImpactCard = styled.div.attrs({
  className: `d-flex flex-column justify-content-center`,
})`
  text-align: center;
  align-items: center;
`;

export const IHeader = styled.p`
  font-size: 30px;
  color: #000;
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 50px;
`;

export const IParagragrph = styled.p`
  font-size: 20px;
  color: #000;
  font-weight: 600;
  margin-top: 0px;
`;

export const SectionWrapper = styled.div`
  border: solid 1px #ddd;
  margin-top: 40px;
  margin-bottom: 40px;
  background: white;

  img {
    /* width: 100%; */
  }
`;

export const SectionBody = styled.div`
  padding: 15px;
`;

export const SectionHeader = styled.div`
  color: #333;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 10px 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
