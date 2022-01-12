import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { HomeContentWrapper, BlogWrapper, BlogsRow, BlogDiv, BlogFullpage } from 'components/Home/HomeComponents';
import { EmptyState } from 'components/Planner/PlannerComponents';
import { SpinnerCircular } from 'spinners-react';
import { HeaderLable } from 'components/Planner/PlannerComponents';
import { withCookies } from 'react-cookie';
import { get } from 'lodash';
import axios from 'axios';
import Link from 'next/link';

// .filter((person)=>(person.post_type === "post"))

const Blogs = ({ cookies }) => {
  let isAuthoriszed = cookies.get('access_token');
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    query: { id },
  } = router;

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/blogs/${id}`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
    })
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response);
        setLoading(false);
      });
  }, []);


  return (
    <HomeContentWrapper>
    
      <BlogsRow>
        {loading && !error ? (
          <SpinnerCircular enabled={loading} />
        ) : blogs ? (
          <BlogFullpage>
            <img
              src={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${get(blogs, 'data.blog.banner', '')}`}
              alt="image"
            />
            <h3>{get(blogs, 'data.blog.title', '')}</h3>
            <BlogDiv>{get(blogs, 'data.blog.description', '')}</BlogDiv>
          </BlogFullpage>
        ) : (
          <EmptyState>No blogs found!</EmptyState>
        )}
      </BlogsRow>
    </HomeContentWrapper>
  );
};

export default withCookies(Blogs);
