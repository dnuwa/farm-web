import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
// import CookieConsent from 'react-cookie-consent';
import Router from 'next/router';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import Banner from './BannerSection';
import Featured from './Featured';
import Latest from './Latest';
import MostViewed from './MostViewed';
import BestRated from './BestRated';
import MostLiked from './MostLiked';
import BestSelling from './BestSelling';
import RecentlyViewed from './RecentlyViewed';

const HomePage = (props) => {

  // console.log(props)
  return (
    <HomeContentWrapper>
      <Banner {...props} />
      <Featured {...props} />
      <Latest {...props}/>
      <MostViewed {...props}/>
      <BestRated {...props}/>
      <MostLiked {...props}/>
      <BestSelling {...props}/>
      <RecentlyViewed {...props} />
    </HomeContentWrapper>
  );
};

export default HomePage;

export const config = {
  amp: true,
};
