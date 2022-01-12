import React, { useState, useEffect } from 'react';
import 'image-upload-react/dist/index.css';
import {
  Panel,
  Label,
  TimeLineImg,
  ProfileContentWrapper,
  ProfileImgWrapper,
  ProfileImg,
  UserContent,
  ProfileTxt,
  UserInfo,
} from 'components/Planner/PlannerComponents';
import { get } from 'lodash';
import { withCookies } from 'react-cookie';

const Profile = ({ cookies }) => {
  let loggedIn = cookies.get('auth_token');

  return (
    <Panel>
      <ProfileContentWrapper>
        <TimeLineImg
          src={`https://famunera-uploads.s3.us-east-2.amazonaws.com/${get(loggedIn, 'data.user.cover_picture', 'N/A')}`}
        />
        <ProfileImgWrapper>
          <ProfileImg
            src={
              get(loggedIn, 'data.user.profile_picture')
                ? `https://famunera-uploads.s3.us-east-2.amazonaws.com/${get(loggedIn, 'data.user.profile_picture')}`
                : `https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png`
            }
          />
          <UserContent>
            <Label>{get(loggedIn, 'data.user.fullname', 'N/A')}</Label>
            <ProfileTxt>Farmer - Independent</ProfileTxt>
            <ProfileTxt> Farmer {get(loggedIn, 'data.user.account_status', 'N/A')}</ProfileTxt>
          </UserContent>
        </ProfileImgWrapper>
        <UserInfo label="Email:" value={get(loggedIn, 'data.user.email', 'N/A')} />
        <UserInfo label="Phone:" value={get(loggedIn, 'data.user.phone', 'N/A')} />
        <UserInfo label="Address:" value={get(loggedIn, 'data.user.address', 'N/A')} />
        <UserInfo label="Date of Birth:" value={get(loggedIn, 'data.user.dob', 'N/A')} />
        <UserInfo label="ID No. :" value={get(loggedIn, 'data.user.id_no', 'N/A')} />
        <UserInfo
          label="Looking for:"
          value={get(loggedIn, 'data.user.looking_for', 'N/A').toString().replace(/['"]+/g, '')}
        />
        <UserInfo label="Other Contact Details:" value="" />
      </ProfileContentWrapper>
    </Panel>
  );
};

Profile.layout = 'planner';
export default withCookies(Profile);
