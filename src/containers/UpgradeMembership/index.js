import React from 'react';
import { HomeContentWrapper } from 'components/Home/HomeComponents';
import { Header, PackagesTable, PackageColumn } from 'components/UpgradeMembership/UpgradeComponents';
import { DefaultButton } from 'components/Buttons';
import { HeaderLable } from 'components/Planner/PlannerComponents';

const UpgradeMembership = () => {
  return (
    <HomeContentWrapper>
      <Header>MEMBERSHIPS</Header>
      <PackagesTable>
        <PackageColumn></PackageColumn>
        <PackageColumn solid>
          <HeaderLable>Paid Packages</HeaderLable>
        </PackageColumn>
        <PackageColumn>
          <HeaderLable>Free Trial</HeaderLable>
        </PackageColumn>
      </PackagesTable>
      <PackagesTable>
        <PackageColumn></PackageColumn>
        <PackageColumn solid>Gold Package</PackageColumn>
        <PackageColumn>
          For only Sellers/Suppliers still thinking about upgrading to continue selling on FAMUNERA (Free For 30 Days)
        </PackageColumn>
      </PackagesTable>
      <PackagesTable>
        <PackageColumn>Benefits</PackageColumn>
        <PackageColumn solid>
          <DefaultButton bgColor="#fff" auto border color="#333">
            Choose Package
          </DefaultButton>
        </PackageColumn>
        <PackageColumn>
          <DefaultButton bgColor="#fff" auto border color="#333">
            Choose Package
          </DefaultButton>
        </PackageColumn>
      </PackagesTable>
      <PackagesTable>
        <PackageColumn>Product/Service listing</PackageColumn>
        <PackageColumn solid>yes</PackageColumn>
        <PackageColumn>30 Days</PackageColumn>
      </PackagesTable>
      <PackagesTable>
        <PackageColumn>Buying</PackageColumn>
        <PackageColumn solid>yes</PackageColumn>
        <PackageColumn>yes</PackageColumn>
      </PackagesTable>
      <PackagesTable>
        <PackageColumn>Ability to reply Inquiries, Quotations and Orders</PackageColumn>
        <PackageColumn solid>yes</PackageColumn>
        <PackageColumn>yes</PackageColumn>
      </PackagesTable>
      <PackagesTable>
        <PackageColumn>Performance reports</PackageColumn>
        <PackageColumn solid>yes</PackageColumn>
        <PackageColumn>yes</PackageColumn>
      </PackagesTable>
      <PackagesTable>
        <PackageColumn></PackageColumn>
        <PackageColumn solid>
          <DefaultButton bgColor="#fff" auto border color="#333">
            Choose Package
          </DefaultButton>
        </PackageColumn>
        <PackageColumn>
          <DefaultButton bgColor="#fff" auto border color="#333">
            Choose Package
          </DefaultButton>
        </PackageColumn>
      </PackagesTable>
    </HomeContentWrapper>
  );
};

export default UpgradeMembership;
