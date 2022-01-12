import React, { useState, useEffect } from 'react';
import {
  Header,
  SaticParagraph,
  DownloadLink,
  PartnerCard,
  PartnerCardWrapper,
} from 'components/StaticPages/StaticPagesComponents';
import { Download24 } from '@carbon/icons-react';
import Link from 'next/link';
import axios from 'axios';

export default function Partners() {
  const [partners, setPartners] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [isError, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setLoadingStatus(true);
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/partners`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      params: {
        limit: parseInt(limit),
        page: parseInt(page),
      },
    })
      .then(res => {
        setPartners(res.data.data.partners);
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
      <Header>OUR PARTNERS</Header>

      <PartnerCardWrapper>
        {partners.map(({ logoUrl, partnername, ID }) => (
          <PartnerCard>
            <img src={logoUrl} key={ID} />
            <p>{partnername}</p>
          </PartnerCard>
        ))}
      </PartnerCardWrapper>
    </div>
  );
}
