import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { withCookies } from 'react-cookie';
import {
  Panel,
  PanelHeading,
  HeaderLable,
  PanelContentWrapper,
  InputWrapper,
  TextInputsSection,
  RowWrapper,
  InRowInput,
  InRowLeft,
  RadioButton,
  CheckBox,
  PanelBody,
  BtnWrapper,
  ImageInputWrapper,
  DisplaFlex,
  DisplaFlexColumn,
} from 'components/Planner/PlannerComponents';
import { DefaultButton } from 'components/Buttons';
import { TextInput, Dropdown, TextArea, ImageInput } from 'components/Inputs/TextInput';
import axios from 'axios';
import { get } from 'lodash';
import { Prices } from 'components/Home/Banner';

const ProductSell = ({ cookies }) => {
  let isAuthoriszed = cookies.get('access_token');
  let loggedIn = cookies.get('auth_token');
  const router = useRouter();

  const [categories, setCategorie] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_PARTNER_API}/categories`, {})
      .then(res => setCategorie(res.data.data.categories));
  }, []);

  const [isSuccess, setIsSuccess] = useState({});
  const [isError, setIsError] = useState({});

  let initialState = {
    update_status: '',
    ussd_enabled: '',
    ussd_bonus: '',
    product_type: 'product',
    product_name: '',
    slug: '',
    featured_image: '',
    product_images: '',
    demo_video: '',
    total_product_size: '',
    description: '',
    local_price: '',
    last_price: '',
    vendor_price: '',
    vendor_price_last: '',
    local_currency: '',
    us_currency: '',
    measurement_unit: '',
    quality_measures: '',
    quality: '',
    category: '',
    colors: '',
    product_owner: '',
    account_type: '',
    sub_category: '',
    delivery: '',
    returns_data: '',
    guarantee: '',
  };

  let [formValues, onChangeValue] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    // setLoadingStatus(true);

    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_PARTNER_API}/items`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${isAuthoriszed}`,
      },
      data: {
        update_status: parseInt(formValues.update_status),
        ussd_enabled: parseInt(formValues.ussd_enabled),
        ussd_bonus: parseInt(formValues.ussd_bonus || 500),
        product_type: formValues.product_type,
        product_name: formValues.product_name,
        slug: formValues.slug,
        featured_image: formValues.featured_image,
        product_images: formValues.product_images,
        demo_video: formValues.demo_video,
        total_product_size: formValues.total_product_size,
        description: formValues.description,
        local_price: formValues.local_price,
        last_price: formValues.vendor_price || "0",
        vendor_price: parseInt(formValues.vendor_price || 0),
        vendor_price_last: parseInt(formValues.vendor_price_last || 0),
        local_currency: formValues.local_currency || 'UGX',
        us_currency: formValues.us_currency,
        measurement_unit: formValues.measurement_unit,
        quality_measures: formValues.quality_measures,
        quality: formValues.quality,
        category: formValues.category,
        colors: formValues.colors,
        product_owner: loggedIn.data.user.ID.toString(),
        account_type: formValues.account_type,
        sub_category: parseInt(formValues.sub_category) || 0,
        delivery: formValues.delivery,
        returns_data: formValues.returns_data,
        guarantee: formValues.guarantee,
      },
    })
      .then(res => {
        setIsSuccess(res);
        onChangeValue(initialState);
        router.push('/my-products');
      })
      .catch(err => {
        // setLoadingStatus(false);
        setIsError(err.response);
      });
  };

  const [price, setPrice] = useState('Actual');
  const [percantagetxt, setPercantagetxt] = useState(null);

  let [subcat, setSubCat] = useState(false);
  useEffect(() => {
    if (formValues.category !== '') {
      setSubCat(categories.filter(cat => cat.ID === parseInt(formValues.category)));
    }
  }, [formValues.category]);

  return (
    <Panel>
      <PanelHeading>
        <HeaderLable>Create Product</HeaderLable>
      </PanelHeading>
      <PanelContentWrapper>
        <TextInputsSection>
          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Product Name
            </HeaderLable>
            <TextInput
              value={formValues.product_name}
              onChangeValue={d => onChangeValue({ ...formValues, product_name: d })}
            />
          </InputWrapper>
          <RowWrapper>
            <InRowLeft>
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
            </InRowLeft>
            <InRowInput>
              <HeaderLable size="14px" mb="5px">
                Sub Category
              </HeaderLable>
              {formValues.category !== '' && subcat ? (
                <Dropdown
                  value={formValues.sub_category}
                  onChangeValue={d => onChangeValue({ ...formValues, sub_category: d })}>
                  <option>Select</option>
                  {subcat[0].sub_categories.map(sub => (
                    <option key={sub.ID} value={sub.ID}>
                      {sub.name}
                    </option>
                  ))}
                </Dropdown>
              ) : (
                <Dropdown>
                  <option>Select</option>
                </Dropdown>
              )}
            </InRowInput>
          </RowWrapper>
          <RowWrapper>
            <InRowLeft>
              <RadioButton label="Actual Price" checked={price === 'Actual'} onChangeValue={() => setPrice('Actual')} />
            </InRowLeft>
            <InRowInput>
              <RadioButton label="Price Range" checked={price === 'Range'} onChangeValue={() => setPrice('Range')} />
            </InRowInput>
          </RowWrapper>
          {price === 'Actual' && (
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Price in UGX
              </HeaderLable>
              <TextInput
                value={formValues.vendor_price}
                onChangeValue={d => onChangeValue({ ...formValues, vendor_price: d })}
              />
            </InputWrapper>
          )}

          {price === 'Range' && (
            <InputWrapper>
              <DisplaFlex>
                <DisplaFlexColumn>
                  <HeaderLable size="14px" mb="5px">
                    Minimum price in UGX
                  </HeaderLable>
                  <TextInput
                    value={formValues.vendor_price}
                    onChangeValue={d => onChangeValue({ ...formValues, vendor_price: d })}
                  />
                </DisplaFlexColumn>
                <DisplaFlexColumn>
                  <HeaderLable size="14px" mb="5px">
                    Maximum Price in UGX
                  </HeaderLable>
                  <TextInput
                    value={formValues.vendor_price_last}
                    onChangeValue={d => onChangeValue({ ...formValues, vendor_price_last: d })}
                  />
                </DisplaFlexColumn>
              </DisplaFlex>
            </InputWrapper>
          )}

          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Quality Measures
            </HeaderLable>
          </InputWrapper>
          <InputWrapper>
            <CheckBox
              label="Germination Percentage"
              checked={percantagetxt === 'Germination Percentage'}
              onChangeValue={() => setPercantagetxt('Germination Percentage')}
            />
          </InputWrapper>
          {percantagetxt === 'Germination Percentage' && (
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Specify the percentage
              </HeaderLable>
              <TextInput
                value={formValues.quality_measures}
                onChangeValue={d => onChangeValue({ ...formValues, quality_measures: d })}
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <CheckBox
              label="Moisture Percentage"
              checked={percantagetxt === 'Moisture Percentage'}
              onChangeValue={() => setPercantagetxt('Moisture Percentage')}
            />
          </InputWrapper>
          {percantagetxt === 'Moisture Percentage' && (
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Specify the percentage
              </HeaderLable>
              <TextInput
                value={formValues.quality_measures}
                onChangeValue={d => onChangeValue({ ...formValues, quality_measures: d })}
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <CheckBox
              label="Affloxitin Percentage"
              checked={percantagetxt === 'Affloxitin Percentage'}
              onChangeValue={() => setPercantagetxt('Affloxitin Percentage')}
            />
          </InputWrapper>
          {percantagetxt === 'Affloxitin Percentage' && (
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Specify the percentage
              </HeaderLable>
              <TextInput
                value={formValues.quality_measures}
                onChangeValue={d => onChangeValue({ ...formValues, quality_measures: d })}
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <CheckBox
              label="Impurity Percentage"
              checked={percantagetxt === 'Impurity Percentage'}
              onChangeValue={() => setPercantagetxt('Impurity Percentage')}
            />
          </InputWrapper>
          {percantagetxt === 'Impurity Percentage' && (
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Specify the percentage
              </HeaderLable>
              <TextInput
                value={formValues.quality_measures}
                onChangeValue={d => onChangeValue({ ...formValues, quality_measures: d })}
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <CheckBox
              label="Broken percentage"
              checked={percantagetxt === 'Broken percentage'}
              onChangeValue={() => setPercantagetxt('Broken percentage')}
            />
          </InputWrapper>
          {percantagetxt === 'Broken percentage' && (
            <InputWrapper>
              <HeaderLable size="14px" mb="5px">
                Specify the percentage
              </HeaderLable>
              <TextInput
                value={formValues.quality_measures}
                onChangeValue={d => onChangeValue({ ...formValues, quality_measures: d })}
              />
            </InputWrapper>
          )}
          <RowWrapper>
            <InRowLeft>
              <HeaderLable size="14px" mb="5px">
                Packaging Quantity
              </HeaderLable>
              <TextInput
                value={formValues.total_product_size}
                onChangeValue={d => onChangeValue({ ...formValues, total_product_size: d })}
              />
            </InRowLeft>
            <InRowInput>
              <HeaderLable size="14px" mb="5px">
                Unit of Measurement
              </HeaderLable>
              <Dropdown
                value={formValues.measurement_unit}
                onChangeValue={d => onChangeValue({ ...formValues, measurement_unit: d })}>
                <option>--- Select unit of measurement ---</option>
                <option value="g">GRam (g)</option>
                <option value="kg">killogram (kg)</option>
                <option value="mt">Metric Tonnes (mt)</option>
                <option value="litres">Ltters (lts)</option>
                <option value="sq. cm">Square Centimeter (sq. cm)</option>
                <option value="sq. ft">Square Foot (sq. ft)</option>
                <option value="acre">Acre</option>
                <option value="cm">Centimeter (cm)</option>
                <option value="m">Meter (m)</option>
                <option value="pcs">Pieces (pcs)</option>
                <option value="millilitres">Millilitres</option>
              </Dropdown>
            </InRowInput>
          </RowWrapper>

          <InRowInput className="alignleft">
            <HeaderLable size="14px" mb="5px">
              Colors
            </HeaderLable>
            <RowWrapper>
              <CheckBox
                label="Black"
                value={formValues.colors}
                checked={formValues.colors === `Black`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Black' })}
              />
              <CheckBox
                label="Blue"
                value={formValues.colors}
                checked={formValues.colors === `Blue`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Blue' })}
              />
              <CheckBox
                label="Brown"
                value={formValues.colors}
                checked={formValues.colors === `Brown`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Brown' })}
              />
              <CheckBox
                label="Cyan"
                value={formValues.colors}
                checked={formValues.colors === `Cyan`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Cyan' })}
              />
              <CheckBox
                label="Green"
                value={formValues.colors}
                checked={formValues.colors === `Green`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Green' })}
              />
              <CheckBox
                label="Gray"
                value={formValues.colors}
                checked={formValues.colors === `Gray`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Gray' })}
              />
            </RowWrapper>
            <RowWrapper>
              <CheckBox
                label="Orange"
                value={formValues.colors}
                checked={formValues.colors === `Orange`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Orange' })}
              />
              <CheckBox
                label="Pink"
                value={formValues.colors}
                checked={formValues.colors === `Pink`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Pink' })}
              />
              <CheckBox
                label="Purple"
                value={formValues.colors}
                checked={formValues.colors === `Purple`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Purple' })}
              />
              <CheckBox
                label="Red"
                value={formValues.colors}
                checked={formValues.colors === `Red`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Red' })}
              />
              <CheckBox
                label="White"
                value={formValues.colors}
                checked={formValues.colors === `White`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'White' })}
              />
              <CheckBox
                label="Yellow"
                value={formValues.colors}
                checked={formValues.colors === `Yellow`}
                onChangeValue={d => onChangeValue({ ...formValues, colors: 'Yellow' })}
              />
            </RowWrapper>
          </InRowInput>
          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Description
            </HeaderLable>
            <TextArea
              value={formValues.description}
              onChangeValue={d => onChangeValue({ ...formValues, description: d })}
            />
          </InputWrapper>

          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Delivery
            </HeaderLable>
            <TextArea value={formValues.delivery} onChangeValue={d => onChangeValue({ ...formValues, delivery: d })} />
          </InputWrapper>

          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Return Policy
            </HeaderLable>
            <TextArea
              value={formValues.returns_data}
              onChangeValue={d => onChangeValue({ ...formValues, returns_data: d })}
            />
          </InputWrapper>

          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Warranty
            </HeaderLable>
            <TextArea
              value={formValues.guarantee}
              onChangeValue={d => onChangeValue({ ...formValues, guarantee: d })}
            />
          </InputWrapper>
          <RowWrapper>
            <InRowLeft>
              <HeaderLable size="14px" mb="5px">
                CONDITION
              </HeaderLable>
              <PanelBody>
                <RadioButton
                  label="NEW"
                  value={formValues.slug}
                  checked={formValues.slug === `NEW`}
                  onChangeValue={d => onChangeValue({ ...formValues, slug: 'NEW' })}
                />
                <RadioButton
                  label="OLD"
                  value={formValues.slug}
                  checked={formValues.slug === `OLD`}
                  onChangeValue={d => onChangeValue({ ...formValues, slug: 'OLD' })}
                />
              </PanelBody>
            </InRowLeft>
          </RowWrapper>
          <BtnWrapper>
            <DefaultButton onClick={handleSubmit}>Submit</DefaultButton>
          </BtnWrapper>
        </TextInputsSection>
        <ImageInputWrapper>
          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Featured Image (maximum of 8MBs)
            </HeaderLable>
            <ImageInput
              type="file"
              value={formValues.featured_image}
              onChangeValue={d => onChangeValue({ ...formValues, featured_image: d })}
            />
          </InputWrapper>
          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Other Images (maximum of 8MBs)
            </HeaderLable>
            <ImageInput
              type="file"
              value={formValues.product_images}
              onChangeValue={d => onChangeValue({ ...formValues, product_images: d })}
            />
          </InputWrapper>
          <InputWrapper>
            <HeaderLable size="14px" mb="5px">
              Demo Video Link
            </HeaderLable>
            <TextInput
              placeholder="https://youtu.be/XSGBVzeBUbk"
              value={formValues.demo_video}
              onChangeValue={d => onChangeValue({ ...formValues, demo_video: d })}
            />
          </InputWrapper>
        </ImageInputWrapper>
      </PanelContentWrapper>
    </Panel>
  );
};

ProductSell.layout = 'sell';
export default withCookies(ProductSell);
