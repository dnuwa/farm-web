import React, { useState, useEffect } from 'react';
import { Header, SaticParagraph, DownloadLink, MemeberCard } from 'components/StaticPages/StaticPagesComponents';
import { Download24 } from '@carbon/icons-react';
import Link from 'next/link';
import axios from 'axios';

export default function OurTeam() {
  const [members, setUsers] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [isError, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setLoadingStatus(true);
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/teamMembers`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
      params: {
        limit: parseInt(limit),
        page: parseInt(page),
      },
    })
      .then(res => {
        setUsers(res.data.data.teamMembers);
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
      <Header>OUR TEAM</Header>
      {members.map(({ thumbnail, bio, title }) => (
        <MemeberCard>
          <img src={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${thumbnail}`} alt="member" />
          <div dangerouslySetInnerHTML={{ __html: bio }} />
        </MemeberCard>
      ))}
    </div>
  );
}
