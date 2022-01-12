import React from 'react';
import {
  Header,
  SaticParagraph,
  DownloadLink,
  ImpactCard,
  ImpactWrapper,
  IHeader,
  IParagragrph
} from 'components/StaticPages/StaticPagesComponents';
import { Events32, Education32 } from '@carbon/icons-react';
import Link from 'next/link';

export default function Impact() {
  return (
    <div className="container">
      <Header>IMPACT</Header>

      <ImpactWrapper>
        <div className="d-flex">
          <div class="col-md-3">
            <ImpactCard>
              <IHeader>Over 1,000</IHeader>

              <IParagragrph>Registered farmer groups, Co-operatives & independent farmers</IParagragrph>
            </ImpactCard>
          </div>

          <div class="col-md-3">
            <ImpactCard>
              <IHeader>Over 200</IHeader>

              <IParagragrph>Registered agro inputs manufacturers/producers</IParagragrph>
            </ImpactCard>
          </div>

          <div class="col-md-3">
            <ImpactCard>
              <IHeader>Over 1,100</IHeader>

              <IParagragrph>Registered agro outputs buyers</IParagragrph>
            </ImpactCard>
          </div>

          <div class="col-md-3">
            <ImpactCard>
              <IHeader>Over 5,000</IHeader>

              <IParagragrph>Indirect jobs created</IParagragrph>
            </ImpactCard>
          </div>
        </div>
      </ImpactWrapper>
    </div>
  );
}
