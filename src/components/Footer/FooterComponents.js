import styled, { css } from 'styled-components';
import { Media } from 'utils/theme';

export const FooterContainer = styled.div.attrs({
  className: `d-flex flex-column mt-auto`,
})`
  background-color: #5e8e1f;
`;

export const FooterWrapper = styled.div.attrs({
  className: `container d-flex flex-wrap`,
})`
  padding: 4px 0 24px 0;
  /* background-color: #5e8e1f; */
  font-family: ${`'Roboto'`};

  ${Media.phone`
      padding: 20px;
    `}

  ${Media.tablet`
      padding: 20px;
    `}

  ${Media.giant`
    padding: 20px;
  `}
`;

export const ContentSection = styled.div.attrs({
  className: `col-sm p-0`,
})``;

export const SectionTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
`;

export const LinksList = styled.div``;

export const ListItem = styled.p`
  color: #fafafa;
  font-weight: 300;
  font-size: 13px;
  margin: 0;
  padding: 0 0 2px 0;

  &:hover {
    cursor: pointer;
    color: #8dc641;
  }
`;

const ContactValue = styled.span`
  color: #fafafa;
  font-weight: 300;
  font-size: 13px;
  margin: 0;
  padding: 0 0 2px 0;
`;

const ContactKey = styled.div`
  color: #fafafa;
  font-weight: 300;
  font-size: 13px;
  margin: 0;
  padding: 0 0 2px 0;
  font-weight: bold;
`;

export const ContactInfo = ({ title, value }) => (
  <ContactKey>
    {title}: <ContactValue>{value}</ContactValue>
  </ContactKey>
);

export const BottomZero = styled.div`
  width: 100%;
  background-color: #558418;
`;

export const CopyWrapper = styled.div.attrs({
  className: `container d-flex justify-content-between flex-wrap`,
})`
  /* background-color: #558418; */
  color: #fafafa;
  padding: 24px 0 8px 0;

  ${Media.phone`
      padding: 20px;
    `}

  ${Media.tablet`
      padding: 20px;
    `}

  ${Media.giant`
    padding: 20px;
  `}
`;

export const CopyRightText = styled.div.attrs({
  className: `d-flex mt-auto`,
})``;

export const TermsWrapper = styled.div.attrs({
  className: `d-flex mt-auto`,
})``;

export const TermsText = styled.div`
  font-weight: bold;
  padding: 0 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const SocialLinksWrapper = styled.div.attrs({
  className: `d-flex flex-wrap`,
})`
  padding: 16px 0;
`;

export const SubScription = styled.div.attrs({
  className: `d-flex`,
})``;

export const SubScriptionInput = styled.div.attrs({
  className: `d-flex mr-1`,
})`
  width: 75%;
`;

export const SubScriptionBtn = styled.div.attrs({
  className: `d-flex`,
})`
  width: 25%;
`;

export const SubHeader = styled.div.attrs({
  className: `d-flex`,
})`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;

const SocialIcon = styled.div.attrs({
  className: `d-flex`,
})`
  border: 2px solid white;
  margin: 0 3px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  text-align: center;
  margin: 0 12px 0 0;

  > svg {
    color: white;
    margin: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SocailLink = ({ icon }) => <SocialIcon>{icon}</SocialIcon>;

export const SubscriptionsButton = styled.button`
  background-color: #8ac240;
  text-align: center;
  justify-content: center;
  color: white;
  border-radius: 4px;
  border: solid 1px #ddd;
  font-family: ${`'Roboto'`};

  &:hover {
    cursor: pointer;
  }
`;
