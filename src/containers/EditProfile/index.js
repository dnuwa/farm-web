import React, { useState, useEffect } from 'react';
import {
  PageContentWrapper,
  PageNavWrapper,
  PageTab,
  TabBtn,
  FormWrapper,
  FormHeader,
  InputsWrapper,
  ContactsButtonsWrapper,
  ContactsBtnWrapper,
} from 'components/EditProfile/ProfileUpdatecomponents';
import { useRouter } from 'next/router';
import { withCookies } from 'react-cookie';
import { HeaderLable, InputWrapper, CheckBox, BtnWrapper } from 'components/Planner/PlannerComponents';
import { TextInput, TextArea, Dropdown, ImageInput } from 'components/Inputs/TextInput';
import { DefaultButton } from 'components/Buttons';
import axios from 'axios';
import { get } from 'lodash';

const EditProfile = ({ cookies }) => {
  const [randerState, setRanderState] = useState('edit_profile');

  const [categories, setCategorie] = useState([]);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_PARTNER_API}/categories`, {})
      .then(res => setCategorie(res.data.data.categories));
  }, []);

  let loggedIn = cookies.get('auth_token');

  let initialState = {
    name: '',
    phone: '',
    address: '',
    category: '',
    dob: '',
    id_no: '',
    looking_for: '',
    agro_info: '',
    prdts: '',
    size: '',
  };

  let [formValues, onChangeValue] = useState(initialState);

  useEffect(() => {
    onChangeValue({
      name: get(loggedIn, 'data.user.fullname', ''),
      phone: get(loggedIn, 'data.user.phone', ''),
      address: get(loggedIn, 'data.user.address', ''),
      category: '',
      dob: get(loggedIn, 'data.user.dob', ''),
      id_no: get(loggedIn, 'data.user.id_no', ''),
      looking_for: get(loggedIn, 'data.user.looking_for', '') ,
      agro_info: '',
      prdts: get(loggedIn, 'data.user.pro_dealin', ''),
      size: get(loggedIn, 'data.user.size_scale', ''),
    });
  }, []);

  return (
    <PageContentWrapper>
      <PageNavWrapper>
        <PageTab className={randerState === `edit_profile` && 'active'}>
          <TabBtn onClick={() => setRanderState(`edit_profile`)}>Edit Profile</TabBtn>
        </PageTab>
        <PageTab className={randerState === `edit_profile_photo` && 'active'}>
          <TabBtn onClick={() => setRanderState(`edit_profile_photo`)}>Edit Profile Photo</TabBtn>
        </PageTab>
        <PageTab>
          <TabBtn onClick={() => router.push('/my-documents')}>Documents</TabBtn>
        </PageTab>
        <PageTab className={randerState === `contacts` && 'active'}>
          <TabBtn onClick={() => setRanderState(`contacts`)}>Contacts</TabBtn>
        </PageTab>
        {/* change-password */}
        <PageTab>
          <TabBtn onClick={() => router.push('/change-password')}>Edit Password</TabBtn>
        </PageTab>
      </PageNavWrapper>
      {randerState === `edit_profile` && (
        <FormWrapper>
          <FormHeader>Update Account Details</FormHeader>
          <InputsWrapper>
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Name
              </HeaderLable>
              <TextInput value={formValues.name} onChangeValue={d => onChangeValue({ ...formValues, name: d })} />
            </InputWrapper>
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Phone
              </HeaderLable>
              <TextInput value={formValues.phone} onChangeValue={d => onChangeValue({ ...formValues, phone: d })} />
            </InputWrapper>
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Address
              </HeaderLable>
              <TextArea value={formValues.address} onChangeValue={d => onChangeValue({ ...formValues, address: d })} />
            </InputWrapper>

            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Category
              </HeaderLable>
              <Dropdown value={formValues.category} onChangeValue={d => onChangeValue({ ...formValues, category: d })}>
                <option>Select</option>
                {categories.map(cat => (
                  <option key={cat.ID} value={cat.ID}>
                    {cat.name}
                  </option>
                ))}
              </Dropdown>
            </InputWrapper>

            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Date of Birth
              </HeaderLable>
              <TextArea value={formValues.dob} onChangeValue={d => onChangeValue({ ...formValues, dob: d })} />
            </InputWrapper>

            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                ID Number
              </HeaderLable>
              <TextInput value={formValues.id_no} onChangeValue={d => onChangeValue({ ...formValues, id_no: d })} />
            </InputWrapper>

            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                What are you looking for?
              </HeaderLable>
              <CheckBox
                label="Buyers"
                checked={formValues.looking_for === 'buyers'}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `buyers` })}
              />
              <CheckBox
                label="Agro Inputs Suppliers"
                checked={formValues.looking_for === 'agro'}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `agro` })}
              />
              <CheckBox
                label="Equipment or Machinery Suppliers"
                checked={formValues.looking_for === 'equipement'}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `equipement` })}
              />
              <CheckBox
                label="Financing"
                checked={formValues.looking_for === 'financing'}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `financing` })}
              />
              <CheckBox
                label="Agronomy or Extension Services"
                checked={formValues.looking_for === `agronomy`}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `agronomy` })}
              />
              <CheckBox
                label="Delivery or Freight"
                checked={formValues.looking_for === `delivery`}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `delivery` })}
              />
            </InputWrapper>
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Agro information
              </HeaderLable>
              <CheckBox
                label="Agro Commodity Prices"
                checked={formValues.looking_for === `price`}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `price` })}
              />
              <CheckBox
                label="Forex Rates"
                checked={formValues.looking_for === `rates`}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `rates` })}
              />
              <CheckBox
                label="Guides"
                checked={formValues.looking_for === `guides`}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `guides` })}
              />
              <CheckBox
                label="Weather Forecast"
                checked={formValues.looking_for === `weather`}
                onChangeValue={() => onChangeValue({ ...formValues, looking_for: `weather` })}
              />
            </InputWrapper>
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Products or Services you deal in
              </HeaderLable>
              <TextArea value={formValues.prdts} onChangeValue={d => onChangeValue({ ...formValues, prdts: d })} />
            </InputWrapper>
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Size or scale of operation
              </HeaderLable>
              <TextArea value={formValues.size} onChangeValue={d => onChangeValue({ ...formValues, size: d })} />
            </InputWrapper>
            <BtnWrapper>
              <DefaultButton>Submit</DefaultButton>
            </BtnWrapper>
          </InputsWrapper>
        </FormWrapper>
      )}

      {randerState === `edit_profile_photo` && (
        <FormWrapper>
          <FormHeader>Update Profile / Cover Photo</FormHeader>
          <InputsWrapper>
            {/* add a preview */}
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Profile Photo
              </HeaderLable>
              <ImageInput
                type="file"
                value={formValues.featured_image}
                onChangeValue={d => onChangeValue({ ...formValues, featured_image: d })}
              />
            </InputWrapper>

            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Cover Picture
              </HeaderLable>
              <ImageInput
                type="file"
                value={formValues.featured_image}
                onChangeValue={d => onChangeValue({ ...formValues, featured_image: d })}
              />
            </InputWrapper>
            <BtnWrapper>
              <DefaultButton>Save Changes </DefaultButton>
            </BtnWrapper>
          </InputsWrapper>
        </FormWrapper>
      )}

      {/* contacts */}

      {randerState === `contacts` && (
        <FormWrapper>
          <FormHeader>Other Contacts</FormHeader>
          <InputsWrapper>
            <ContactsButtonsWrapper>
              <BtnWrapper>
                <DefaultButton bgColor="#337ab7" color="white">
                  Add More Fields
                </DefaultButton>
              </BtnWrapper>
              <ContactsBtnWrapper>
                <DefaultButton>Update Contact Details </DefaultButton>
              </ContactsBtnWrapper>
            </ContactsButtonsWrapper>
          </InputsWrapper>
        </FormWrapper>
      )}
    </PageContentWrapper>
  );
};

export default withCookies(EditProfile);
