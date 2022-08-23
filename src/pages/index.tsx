import type { NextPage } from 'next';
import styled from 'styled-components';

import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </Layout>
  );
};

const Block = styled.div`
  height: 200px;
  background-color: #f00;
  margin: 10px 0;
`;

export default Home;
