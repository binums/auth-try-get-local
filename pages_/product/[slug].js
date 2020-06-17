import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from '../../lib/apollo';

const GET_PRODUCT_URL = gql`
  query getNewUrl($url: String) {
    redirect(where: { request_url: { _eq: $url } }) {
      page {
        url
      }
    }
  }
`;

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { loading, error, data } = useQuery(GET_PRODUCT_URL, {
    variables: {
      url: slug,
    },
  });
  if (
    data &&
    data.redirect &&
    data.redirect.length &&
    data.redirect[0].page.url !== slug
  ) {
    router.push(`/product/${data.redirect[0].page.url}`);
  }
  return <div>Product Id: {slug}</div>;
};

export default withApollo({ ssr: false })(Product);
