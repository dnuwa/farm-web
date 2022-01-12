import React from 'react';
import { Header, SaticParagraph, DownloadLink } from 'components/StaticPages/StaticPagesComponents';
import { Download24 } from '@carbon/icons-react';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="container">
      <Header>USER PRIVACY NOTICE</Header>
      <SaticParagraph>
        Welcome to the Famunera website (the "Site") We respect your privacy and want to protect your personal
        information. To learn more, please read this Security & Privacy Policy.
      </SaticParagraph>
      <Link href={`https://famunera.com/static/files/Security_and_Privacy_Policy.docx`} passHref>
        <DownloadLink>
          <Download24 />
          &nbsp; Security and Privacy Policy
        </DownloadLink>
      </Link>
    </div>
  );
}
