import React from 'react';
import { Header, SaticParagraph, DownloadLink } from 'components/StaticPages/StaticPagesComponents';
import { Download24 } from '@carbon/icons-react';
import Link from 'next/link';

export default function AboutUS() {
  return (
    <div className="container">
      <Header>About us</Header>

      <SaticParagraph>
        Famunera is a digital (USSD, Web App and Call Center) marketplace that sources for genuine quality affordable
        farm inputs and alsoprovide convenient last-mile delivery within 24 hours to farmers across Uganda
      </SaticParagraph>
      <SaticParagraph>
        The World Bank Report 2013; Estimates that Africa’s farmers and agribusinesses could create a trillion dollar
        food market by 2030, if they are able to access more capital, electricity and better technology. Thus, Famunera
        is here to provide an ultimate destination for farm inputs sourcing and market linkages across the entire
        agriculture value-chain.
      </SaticParagraph>

      <Header>OUR IMPACT:</Header>

      <SaticParagraph>
        Since our official launch in 2016, we have served over 110,000 farmers, 150 agribusinesses and created over
        5,000 indirect jobs across the entire agriculture value-chain in Uganda.
      </SaticParagraph>

      <Header>OUR STRATEGIC PARTNERS:</Header>
      <SaticParagraph>
        We work hand-in-hand with several strategic partners who include; Uganda National Young Farmers’ Association
        (UNYFA), Uganda National Farmers’ Federation (UNFFE), Uganda Forum for Agricultural Advisory Services (UFAAS),
        The 97Fund and others.
      </SaticParagraph>

      <Header>OUR GROWTH PLAN:</Header>
      <SaticParagraph>
        Famunera is currently raising an investment of USD 1.5M in order to reach and serve over 1.6M farmers across the
        different regions of Uganda by 2023. We also call upon more strategic partners to come and join hands with us in
        order to achieve this goal which will impact millions of households across Uganda.
      </SaticParagraph>
      <Link href={`https://famunera.com/static/files/Famunera_Profile.pdf`} passHref>
        <DownloadLink>
          <Download24 />
          &nbsp; Download Famunera Profile
        </DownloadLink>
      </Link>
    </div>
  );
}
