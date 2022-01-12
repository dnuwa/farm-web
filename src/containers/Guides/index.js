import React from 'react';
import Link from 'next/link';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import { Header, GuidesTable, NameTitle, SizeTitle } from 'components/Guide/GudesComponents';

const Guides = () => {
  return (
    <HomeContentWrapper>
      <Header>AGRIBUSINESS GUIDES</Header>
      <GuidesTable>
        <NameTitle>File Name</NameTitle>
        <SizeTitle>File size</SizeTitle>
      </GuidesTable>
      <GuidesTable>
        <NameTitle>
          <Link href={`https://famunera.com/uploads/Crop_Farming_Guide_2021_2.pdf`} passHref>
            Crop_Farming_Guide_2021_2.pdf
          </Link>
        </NameTitle>
        <SizeTitle>1.209 MBs</SizeTitle>
      </GuidesTable>
    </HomeContentWrapper>
  );
};

export default Guides;
