import * as React from 'react';
import {useParams} from 'react-router-dom';

import {PageHeader} from '../ui/PageHeader';
import {Heading} from '../ui/Text';

import {AssetsCatalogTable} from './AssetsCatalogTable';

export const AssetsCatalogRoot = () => {
  const params = useParams();
  const prefixPath = (params['0'] || '')
    .split('/')
    .filter((x: string) => x)
    .map(decodeURIComponent);

  return (
    <div>
      <PageHeader title={<Heading>Assets</Heading>} />
      <AssetsCatalogTable prefixPath={prefixPath} />
    </div>
  );
};
