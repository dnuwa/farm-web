import React from 'react';
import { Header, SaticParagraph, DownloadLink } from 'components/StaticPages/StaticPagesComponents';
import { Download24 } from '@carbon/icons-react';
import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <div className="container">
      <Header>TERM OF USE</Header>
      <SaticParagraph>
        Welcome to FAMUNERA! The following document describes the Terms and Conditions of Use, applicable to your access
        and use of the website at www.famunera.com (each a "Site"). This document is a legally binding agreement between
        you as the user(s) of the Site (referred to as "you", "your" or "User" hereinafter)and the Famunera entity
        listed in clause 2.1 in the document (referred to as "we", "our" or "Famunera" hereinafter).
      </SaticParagraph>
      <Link href={`https://famunera.com/static/files/Terms_and_Conditions_of_Use.docx`} passHref>
        <DownloadLink>
          <Download24 />
          &nbsp; Terms & Conditions of Use
        </DownloadLink>
      </Link>
    </div>
  );
}
