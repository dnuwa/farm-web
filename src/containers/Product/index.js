import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import { get } from 'lodash';
import StarsRating from 'stars-rating';
import { EmailIcon, FacebookIcon, LinkedinIcon, PinterestIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import { AddAlt16, SubtractAlt16 } from '@carbon/icons-react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import {
  ContentWrapper,
  QuantityInputWrapper,
  ProductDesdcription,
  ProductDetails,
  ProductImg,
  DetailsWrapper,
  ItemTitle,
  ItemPrice,
  ItemDesc,
  ActionBtnsWrapper,
  QuantityWrapper,
  DropButton,
  RelatedHeading,
  MoreInfo,
  Spacer,
  Stats,
  DropdownWrapper,
  DropContent,
  TelNo,
  PhonLinkWrapper,
  SocialsWrapper,
  QtyContentWrapper,
} from 'components/Product/ProductComponents';
import { ExtraButton } from 'components/Buttons';
import { ViewFilled16, Forum16, ThumbsUp16, PhoneVoiceFilled16 } from '@carbon/icons-react';
import {
  ReviewsWrapper,
  ReviewsHeader,
  ReviewSummeryWrapper,
  SummeryHeader,
  ReviewBox,
  SignReviewButton,
  InputWrapper,
} from 'components/Product/ReviewsComponents';
import { BuyButton, PlanButton, BtnContainer } from 'components/Buttons';
import { ProductsContainer, ProductCard } from 'components/ProductCard/ProductCard';
import PlannerUnsignedIn from 'containers/Modals/PlannerUnsignedIn';
import PlannerSignedIn from 'containers/Modals/PlannerSignedIn';
import BuyModal from '../Home/TheBuyModal';
import { Label } from 'components/Login/LoginComponents';
import { TextArea } from 'components/Inputs/TextInput';
import { QTInput, AddBtn, SubBtn } from 'components/PrdQuantity/ProductQuantity';
import Link from 'next/link';

const ProductView = ({ cookies }) => {
  const router = useRouter();
  let isAuthoriszed = cookies.get('access_token');
  let loggedIn = cookies.get('auth_token');

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const [related, setRelatedItems] = useState([]);

  const { id } = router.query;

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items/${id}`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
    })
      .then(res => setProduct(res.data))
      .catch(err => setError(err.response));
  }, []);

  const [quantity, setQuantity] = useState(1);

  const ratingChanged = newRating => {
    console.log(newRating);
  };

  let initialState = {
    review: '',
  };

  let [formValues, onChangeValue] = useState(initialState);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items`,
      headers: {
        Authorization: `Bearer ${isAuthoriszed}`,
      },
      params: { category: parseInt(get(product, 'data.item.category')), limit: 6, approved: 1 },
    })
      .then(res => setRelatedItems(res.data))
      .catch(err => setError(err.response));
  }, [product]);

  const preparedItems = {};

  const [items, setItems] = useState({});

  useEffect(() => {
    if (related.length !== 0) {
      const modified = get(related, 'data.items', []).map(obj => ({ ...obj, quantity: 1 }));

      modified.forEach(item => {
        preparedItems[item.ID] = item;
      });

      setItems(preparedItems);
    }
  }, [related]);

  const handleQtyChange = (id, qty) => {
    // you probably want to create a new object
    // instead of mutating it in place
    setItems({ ...items, [id]: { ...items[id], quantity: parseInt(qty) } });
  };

  return (
    <HomeContentWrapper>
      {product && (
        <ContentWrapper>
          <ProductDesdcription>
            <ProductImg
              src={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${get(
                product,
                'data.item.featured_image',
                ''
              )}`}
            />

            <DetailsWrapper>
              <ItemTitle>{get(product, 'data.item.product_name', '')}</ItemTitle>
              <ItemPrice>UGX {get(product, 'data.item.local_price', '')} </ItemPrice>
              {/* required from the api */}
              {/* <ItemDesc>Seed rate: 70gm per acre</ItemDesc>
              <ItemDesc>Spacing: 60cm x 60cm</ItemDesc> */}
              <ItemDesc>
                <div dangerouslySetInnerHTML={{ __html: get(product, 'data.item.description', '') }} />
              </ItemDesc>
              {/* <ItemDesc>Yield potential: 30-35 metric tonnes per acre</ItemDesc> */}
              <Stats>
                <ExtraButton label={`Like`} intval={0} icon={<ThumbsUp16 />} />
                <ExtraButton label={`Comments`} intval={0} icon={<Forum16 />} />
                <ExtraButton label={`views`} intval={0} icon={<ViewFilled16 />} />
              </Stats>

              <QtyContentWrapper>
                <AddBtn onClick={() => setQuantity(quantity + 1)}>
                  <AddAlt16 />
                </AddBtn>
                <QTInput type="number" value={quantity} onChange={e => setQuantity(e.currentTarget.value)} />
                <SubBtn onClick={() => setQuantity(quantity - 1)}>
                  <SubtractAlt16 />
                </SubBtn>
              </QtyContentWrapper>

              <QuantityWrapper>
                <ActionBtnsWrapper>
                  <BuyModal
                    ID={product.ID}
                    quantity={quantity}
                    featured_image={get(product, 'data.item.featured_image')}
                    product_name={get(product, 'data.item.product_name')}
                    local_price={get(product, 'data.item.local_price')}
                    local_currency={`UGX`}
                    productPage
                  />
                  <Spacer />
                  {loggedIn ? (
                    <PlannerSignedIn
                      ID={product.ID}
                      quantity={quantity}
                      featured_image={get(product, 'data.item.featured_image', '')}
                      product_name={get(product, 'data.item.product_name', '')}
                      local_price={get(product, 'data.item.local_price', '')}
                      local_currency={`UGX`}
                      productPage
                    />
                  ) : (
                    <PlannerUnsignedIn productPage />
                  )}
                  <Spacer />
                  <DropdownWrapper>
                    <DropButton>
                      <PhoneVoiceFilled16 />
                      Call Famunera
                    </DropButton>
                    <DropContent className="drop-item">
                      <PhonLinkWrapper>
                        <TelNo href={`tel:+256-786-224601`}>+256 786 224601</TelNo>
                      </PhonLinkWrapper>
                      <PhonLinkWrapper>
                        <TelNo href={`tel:+256-758-956755`}>+256 758 956755</TelNo>
                      </PhonLinkWrapper>
                    </DropContent>
                  </DropdownWrapper>
                </ActionBtnsWrapper>
              </QuantityWrapper>
              <SocialsWrapper>
                <FacebookShareButton url={`https:\\www.skjskdjf.com`}>
                  <FacebookIcon size={32} />
                </FacebookShareButton>
                <TwitterShareButton url={`https:\\www.skjskdjf.com`}>
                  <TwitterIcon size={32} />
                </TwitterShareButton>
                <EmailShareButton url={`https:\\www.skjskdjf.com`}>
                  <EmailIcon size={32} />
                </EmailShareButton>
                <PinterestShareButton url={`https:\\www.skjskdjf.com`}>
                  <PinterestIcon size={32} />
                </PinterestShareButton>
                <LinkedinShareButton url={`https:\\www.skjskdjf.com`}>
                  <LinkedinIcon size={32} />
                </LinkedinShareButton>
                <WhatsappShareButton url={`https:\\www.skjskdjf.com`}>
                  <WhatsappIcon size={32} />
                </WhatsappShareButton>
              </SocialsWrapper>
            </DetailsWrapper>
          </ProductDesdcription>
          <ProductDetails>
            <MoreInfo label={`Packaging Quantity`} value={`5g`} even />
            <MoreInfo label={`Quality`} value={`1`} />
            <MoreInfo label={`Condition`} value={`NEW`} even />
            <MoreInfo label={`Delivery`} value={`1 day`} />
            <MoreInfo label={`Returns`} value={`Not applicable`} even />
            <MoreInfo label={`Guarantee`} value={`Not applicable`} />
          </ProductDetails>
        </ContentWrapper>
      )}
      <ReviewsWrapper>
        <ReviewsHeader>Reviews</ReviewsHeader>
        <ReviewSummeryWrapper>
          <SummeryHeader>REVIEWS SUMMARY</SummeryHeader>
        </ReviewSummeryWrapper>
        <ReviewBox>
          {loggedIn ? (
            <>
              <InputWrapper>
                <Label>Your rating</Label>
                <StarsRating count={5} onChange={ratingChanged} size={24} color2={'#ffd700'} />
              </InputWrapper>
              <InputWrapper>
                <Label>Your review</Label>
                <TextArea value={formValues.review} onChangeValue={d => onChangeValue({ ...formValues, review: d })} />
              </InputWrapper>
              <SignReviewButton>Submit</SignReviewButton>
            </>
          ) : (
            <Link href={`/login`}>
              <SignReviewButton>Sign in to write a review</SignReviewButton>
            </Link>
          )}
        </ReviewBox>
      </ReviewsWrapper>
      <RelatedHeading>RELATED PRODUCTS</RelatedHeading>
      <ProductsContainer>
        {Object.values(items).map(product => (
          <ProductCard
            key={product.ID}
            productImg={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${product.featured_image}`}
            description={product.product_name}
            price={Number(product.local_price).toLocaleString()}
            currency={product.local_currency ? product.local_currency : `UGX`}
            id={product.ID}>
            <QuantityInputWrapper>
              <AddBtn onClick={() => handleQtyChange(product.ID, product.quantity + 1)}>
                <AddAlt16 />
              </AddBtn>
              <QTInput
                type="number"
                value={product.quantity}
                onChange={e => handleQtyChange(product.ID, e.currentTarget.value)}
              />
              <SubBtn onClick={() => handleQtyChange(product.ID, product.quantity - 1)}>
                <SubtractAlt16 />
              </SubBtn>
            </QuantityInputWrapper>
            <BtnContainer>
              <BuyModal
                ID={product.ID}
                quantity={product.quantity}
                featured_image={product.featured_image}
                product_name={product.product_name}
                local_price={product.local_price}
                local_currency={`UGX`}
              />
              {loggedIn ? <PlannerSignedIn product={product} /> : <PlannerUnsignedIn />}
            </BtnContainer>
          </ProductCard>
        ))}
      </ProductsContainer>
    </HomeContentWrapper>
  );
};

export default withCookies(ProductView);
