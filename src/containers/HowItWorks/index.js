import React from 'react';
import {
  Header,
  SaticParagraph,
  DownloadLink,
  SectionWrapper,
  SectionHeader,
  SectionBody,
} from 'components/StaticPages/StaticPagesComponents';
import { Download24 } from '@carbon/icons-react';
import Link from 'next/link';

export default function TermsOfUse() {
  return (
    <div className="container">
      <Header>TERM OF USE</Header>

      <SectionWrapper>
        <SectionHeader>How to buy genuine quality affordable farm inputs on Famunera</SectionHeader>
        <SectionBody>
          <img src="https://famunera.com/static/img/how-it-works.png" alt="how it works" />
        </SectionBody>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader>How to Join/Login at Famunera</SectionHeader>
        <SectionBody>
          <SaticParagraph>
            Welcome to Famunera.com | Sell & Buy Foodstuffs and AgriProduct From Uganda and Across Africa. Famunera is
            web based and also mobile based agribusiness marketplace which is specially designed to sell and buy agri
            product across africa.If you want to sell or buy any agriproduct or any other products you can do it easily
            by following simple steps.
          </SaticParagraph>
          <SaticParagraph>Here are the steps for :</SaticParagraph>
          <h4>Signup/ Join/ Register :</h4>
          <ol>
            <li>
              To Join Famunera.com Simply Register Yourself by Clicking{' '}
              <Link href={`/`} passHref>
                Here
              </Link>
              .
            </li>
            <li>After Click Enter your valid Email-ID (Active Email Address) in given text-box.</li>
            <li>
              Then you will get one email on your given email-address for verification.Click on link in email or just
              click on "Complete" button to verify your email address.
            </li>
            <li>
              After Successfully verification of your email, you will automatically redirect to the second step of
              registration where you have to enter account detaila and choose your role (Seller/Buyer) and click on
              "Complete" button.
            </li>
            <li>
              In next and last step of registration you have to add your personal details (like fullname,phone
              number,country,address, etc.) and then click on submit.
            </li>
            <li>After submit you will automatically redirect "Dashboard" page.</li>
          </ol>
          <h4>Login :</h4>
          <ol>
            <li>
              If you are already registered member of Famunera, you can login to your account from{' '}
              <Link href={`/login`} passHref>
                here
              </Link>
              .
            </li>
            <li>
              On login page, you can login to your account with "Username/Email/Phone number" and "Password" that you
              have entered while creating(registering) your account with Famunera.
            </li>
            <li>
              If you still not registered with Famunera then you can also login yourself with your social account(like
              facebook/google/twitter etc.).
            </li>
          </ol>
        </SectionBody>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader>Register As a "Seller"</SectionHeader>
        <SectionBody>
          <SaticParagraph>
            If you are registered as "Seller" in Famunera.com then you can become following service provider while
            registering :
          </SaticParagraph>
          <ul>
            <li>Individual Farmer</li>
            <li>Farmer Group</li>
            <li>Agro-input Supplier</li>
            <li>Equipment (Machinery) Supplier</li>
            <li>Agro Financier</li>
            <li>Agronomist (Extensionist)</li>
            <li>Manufacturer/Processor</li>
            <li>Transporter or Freight Company</li>
            <li>Dealer or Stockist</li>
          </ul>

          <SaticParagraph>As a Seller you can do following things after loging to your profile.</SaticParagraph>

          <ol>
            <li>
              <strong>Add/Edit Products/Services : </strong>As a seller you can add/edit product/service.To add new
              product Click here. / To add new service Click
              <Link href={`/my-products`} passHref>
                here
              </Link>
              .
            </li>
            <li>
              <strong>Make a reply for product quotation :</strong> As a seller you can reply for a particular product
              quotation from here.
            </li>
            <li>
              <strong>Manage Orders :</strong> As a seller you can manage your product orders from{' '}
              <Link href={`/my-orders`} passHref>
                here
              </Link>
              .
            </li>
            <li>
              <strong>Edit Profile :</strong> You can edit/update your profile information and also set your cover photo
              and profile photo from{' '}
              <Link href={`/profile/edit_profile`} passHref>
                here
              </Link>
              .
            </li>
            <li>
              <strong>Upgrade membership :</strong> You can also upgrade your membership if you want to more benefits
              from Famunera.com. To upgrade membership click here.
            </li>
          </ol>
        </SectionBody>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader>Register As a "Buyer"</SectionHeader>
        <SectionBody>
          <SaticParagraph>
            If you are registered as "Buyer" in Famunera.com then you can become following type of buyer while
            registering :
          </SaticParagraph>
          <ul>
            <li>Individual Buyer</li>
            <li>Company (Enterprise)</li>
          </ul>

          <SaticParagraph>As a Buyer you can do following things after loging to your profile.</SaticParagraph>

          <ol>
            <li>
              <strong>Manage Notifications :</strong> As a buyer you can manage notifications for products/services
              inquiries,quotations,call inquiries that you have made for different products from{' '}
              <Link href={`/notifications`} passHref>
                here
              </Link>
              . You can get notifications for all inquiries,quotations,new orders,favourites,call inquiries etc that you
              have made for different products/services. .
            </li>
            <li>
              <strong>Make an Order :</strong> As a buyer you can make an order or buy different products/services.
            </li>
            <li>
              <strong>Manage Orders :</strong> As a seller you can manage your product orders from here.
            </li>
            <li>
              <strong>Edit Profile :</strong> You can edit/update your profile information and also set your cover photo
              and profile photo from{' '}
              <Link href={`/profile/edit_profile`} passHref>
                here
              </Link>
              .
            </li>
          </ol>
        </SectionBody>
      </SectionWrapper>
    </div>
  );
}
