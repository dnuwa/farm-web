import React, { useState, useEffect } from 'react';
import { Header, SaticParagraph, DownloadLink,PartnerCardWrapper, TestimonialCard } from 'components/StaticPages/StaticPagesComponents';
import { Download24 } from '@carbon/icons-react';
import Link from 'next/link';
import axios from 'axios';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [isError, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const styleObj = {
    fontStyle: `italic`,
  };

  useEffect(() => {
    setLoadingStatus(true);
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/testimonials`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      params: {
        limit: parseInt(limit),
        page: parseInt(page),
      },
    })
      .then(res => {
        setTestimonials(res.data.data.testimonials);
        setLoadingStatus(false);
        setReload(false);
      })
      .catch(err => {
        setError(err);
        setLoadingStatus(false);
      });
  }, [, limit, page]);

  console.log('tes--', testimonials)

  return (
    <div className="container">
      <Header>TESTIMONIALS</Header>
      <PartnerCardWrapper>
        {testimonials.map(({ thumbnail, description, ID }) => (
          <TestimonialCard key={ID}>
            <img src={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${thumbnail}`} alt="member" />
            <div dangerouslySetInnerHTML={{ __html: description }} style={styleObj}/>
          </TestimonialCard>
        ))}
      </PartnerCardWrapper>
    </div>
  );
}
