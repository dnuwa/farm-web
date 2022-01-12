import React, { useEffect, useState } from 'react';
import { HomeContentWrapper, BlogWrapper, BlogsRow, BlogDiv } from 'components/Home/HomeComponents';
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

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/blogs`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
      params: {
        page: 1,
        limit: 20,
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
      <HeaderLable size="14px" mb="5px">
        Blogs
      </HeaderLable>
      <BlogsRow>
        {loading && !error ? (
          <SpinnerCircular enabled={loading} />
        ) : blogs && get(blogs, 'data.blogs', []).length !== 0 ? (
          get(blogs, 'data.blogs', []).map(blog => (
            <Link href={`/blogs/${blog.ID}`} passHref>
              <BlogWrapper key={blog.ID}>
                
                <img src={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${blog.banner}`} alt="image" />
                {/* <p>{blog.description}</p> */}

                {/* blog img has a display none for this div */}
                {/* <BlogDiv dangerouslySetInnerHTML={{ __html: blog.description }} /> */}
                <h3>{blog.title}</h3>
                <BlogDiv>{blog.description ? `${blog.description.slice(1300)}...` : ''}</BlogDiv>
              </BlogWrapper>
            </Link>
          ))
        ) : (
          <EmptyState>No blogs found!</EmptyState>
        )}
      </BlogsRow>
    </HomeContentWrapper>
  );
};

export default withCookies(Blogs);
