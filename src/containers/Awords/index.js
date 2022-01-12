import React, { useState, useEffect } from 'react';
import {
  Header,
  SaticParagraph,
  DownloadLink,
  PartnerCard,
  PartnerCardWrapper,
  AwoardCard
} from 'components/StaticPages/StaticPagesComponents';
import { Download24 } from '@carbon/icons-react';
import Link from 'next/link';
import axios from 'axios';

export default function awards() {
  const [awards, setAwards] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [isError, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setLoadingStatus(true);
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/awards`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      params: {
        limit: parseInt(limit),
        page: parseInt(page),
      },
    })
      .then(res => {
        setAwards(res.data.data.awards);
        setLoadingStatus(false);
        setReload(false);
      })
      .catch(err => {
        setError(err);
        setLoadingStatus(false);
      });
  }, [, limit, page]);

  return (
    <div className="container">
      <Header>AWARDS AND RECOGNITIONS</Header>

      <PartnerCardWrapper>
        {awards.map(({ thumbnail, ID }) => (
          <AwoardCard>
            <img src={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${thumbnail}`} key={ID} />
          </AwoardCard>
        ))}
      </PartnerCardWrapper>
    </div>
  );
}
