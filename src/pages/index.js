import Home from 'containers/Home';
import axios from 'axios';
// import Featured from 'containers/Home/Featured';
// import { ViewFilled16 } from '@carbon/icons-react';

export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/auth/token`, {
    headers: {
      clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_CLIENT_SECRETE}`,
    },
  });

  let categ, bann, promos, latest, featured, viewed, rated, liked, selling;

  //  let token = JSON.stringify(data.token).slice(1, -1);

  if (data.status === 200) {
    categ = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/categories`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: {
        approved: 1,
      },
    });

    bann = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/banners`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: {
        approved: 1,
      },
    });

    promos = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/promotions`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: {
        approved: 1,
      },
    });

    latest = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/items`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: { orderBy: `date_added`, limit: 6, approved: 1 },
    });

    featured = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/items`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: { featured: true, limit: 6, approved: 1 },
    });

    viewed = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/items`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: { orderBy: `views`, limit: 6, approved: 1 },
    });

    rated = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/items`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: { orderBy: `ratings_average`, limit: 6, approved: 1 },
    });

    liked = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/items`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: { orderBy: `likes_sum`, limit: 6, approved: 1 },
    });

    selling = await axios.get(`${process.env.NEXT_PUBLIC_PARTNER_API}/items`, {
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      params: { orderBy: `orders_sum`, limit: 6, approved: 1 },
    });
  }

  return {
    props: {
      // data,
      categories: categ.data,
      banners: bann.data,
      promotions: promos.data,
      latest_items: latest.data,
      features_items: featured.data,
      most_viewed: viewed.data,
      best_rated: rated.data,
      most_liked: liked.data,
      best_selling: selling.data,
      namespacesRequired: ['webHome'],
    },
    revalidate: 1,
  };
}

export default Home;
