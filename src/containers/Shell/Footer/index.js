import React from 'react';
import {
  FooterContainer,
  FooterWrapper,
  BottomZero,
  ContentSection,
  SectionTitle,
  LinksList,
  ListItem,
  ContactInfo,
  CopyWrapper,
  TermsWrapper,
  CopyRightText,
  TermsText,
  SocailLink,
  SocialLinksWrapper,
  SubScription,
  SubScriptionInput,
  SubScriptionBtn,
  SubHeader,
  SubscriptionsButton
} from 'components/Footer/FooterComponents';
import Link from 'next/link';
import { LogoFacebook24, LogoTwitter24, LogoLinkedin24, LogoYoutube24, LogoInstagram24 } from '@carbon/icons-react';
import { TextInput } from 'components/Inputs/TextInput';
// import { DefaultBtn } from 'components/Buttons';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <ContentSection>
          <SectionTitle>MY ACCOUNT</SectionTitle>
          <LinksList>
            <Link href={`/signup`} passHref>
              <ListItem>Register</ListItem>
            </Link>
            <Link href={`/login`} passHref>
              <ListItem>Login</ListItem>
            </Link>
            <Link href={`#`} passHref>
              <ListItem>Forgot your password?</ListItem>
            </Link>
            {/* <Link href={`#`} passHref>
              <ListItem>Upgrade my membership</ListItem>
            </Link> */}
          </LinksList>
        </ContentSection>
        <ContentSection>
          <SectionTitle>SELLING & BUYING</SectionTitle>
          <LinksList>
            <Link href={`/my-products`} passHref>
              <ListItem>Sell Product</ListItem>
            </Link>
            <Link href={`/my-services`} passHref>
              <ListItem>Sell Service</ListItem>
            </Link>
            <Link href={`/`} passHref>
              <ListItem>Buy Product / Service</ListItem>
            </Link>
            {/* <Link href={`#`} passHref>
              <ListItem>Get Mobile App</ListItem>
            </Link> */}
          </LinksList>
        </ContentSection>
        <ContentSection>
          <SectionTitle>GENERAL INFO</SectionTitle>
          <LinksList>
            <Link href={`/about-us`} passHref>
              <ListItem>About Us</ListItem>
            </Link>
            <Link href={`/our-team`} passHref>
              <ListItem>Our Team</ListItem>
            </Link>
            <Link href={`/guides`} passHref>
              <ListItem>Download Guides or Manuals</ListItem>
            </Link>
            <Link href={`/terms-of-use`} passHref>
              <ListItem>Terms & Conditions of Use</ListItem>
            </Link>
            <Link href={`/how-it-works`} passHref>
              <ListItem>How it works</ListItem>
            </Link>
            <Link href={`/partners`} passHref>
              <ListItem>Our Partners</ListItem>
            </Link>
            <Link href={`/awards`} passHref>
              <ListItem>Awards and Recognitions</ListItem>
            </Link>
            <Link href={`/impact`} passHref>
              <ListItem>Our Impact</ListItem>
            </Link>
            <Link href={`/testimonials`} passHref>
              <ListItem>Success Stories</ListItem>
            </Link>
          </LinksList>
        </ContentSection>
        <ContentSection>
          <SectionTitle>GET IN TOUCH</SectionTitle>
          <LinksList>
            <ContactInfo title="Call" value="+256 786 224601 / +256 758 956755" />
            <ContactInfo title="Email" value="trade@famunera.com / famuneratrade@gmail.com" />
            <ContactInfo title="Location" value="The Innovation Village, Block D Ntinda Complex, Kampala" />
          </LinksList>

          <SocialLinksWrapper>
            <Link href={`https://www.facebook.com/FamuneraOnline`} passHref>
              <SocailLink icon={<LogoFacebook24 />} />
            </Link>
            <Link href={`https://twitter.com/FamuneraOnline`} passHref>
              <SocailLink icon={<LogoTwitter24 />} />
            </Link>
            <Link href={`https://www.linkedin.com/in/famuneraonline`} passHref>
              <SocailLink icon={<LogoLinkedin24 />} />
            </Link>
            <Link href={`https://www.youtube.com/channel/UCGU6nXbZjdji75RA7wyJWsQ`} passHref>
              <SocailLink icon={<LogoYoutube24 />} />
            </Link>
            <Link href={`https://instagram.com/famunera`} passHref>
              <SocailLink icon={<LogoInstagram24 />} />
            </Link>
          </SocialLinksWrapper>
          <SubHeader>Subscribe to our newsletter</SubHeader>
          <SubScription>
            <SubScriptionInput>
              <TextInput placeholder="Enter your email address" />
            </SubScriptionInput>
            <SubScriptionBtn>
              <SubscriptionsButton>Submit</SubscriptionsButton>
              {/* <DefaultButton>Submit</DefaultButton> */}
            </SubScriptionBtn>
          </SubScription>
        </ContentSection>
      </FooterWrapper>
      <BottomZero>
        <CopyWrapper>
          <CopyRightText>© 2016-2021 FAMUNERA LTD | All rights reserved.</CopyRightText>
          <TermsWrapper>
            <Link href={`/terms-of-use`} passHref>
              <TermsText>Terms of Use</TermsText>
            </Link>
            |
            <Link href={`/privacy`} passHref>
              <TermsText>Privacy</TermsText>
            </Link>
            |
            <Link href={`#`} passHref>
              <TermsText>Cookies</TermsText>
            </Link>
          </TermsWrapper>
        </CopyWrapper>
      </BottomZero>
    </FooterContainer>
  );
};

export default Footer;
