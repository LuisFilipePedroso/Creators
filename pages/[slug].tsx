import { chakra, Flex, Text } from '@chakra-ui/react';

import { GetStaticPropsResult, GetStaticProps } from 'next';
import Image from 'next/image';

import graphcms from '../services/graphcms';
import CreatorQuery from '../graphql/queries/creator';
import Creator from '../graphql/schemas/Creator';
import RenderLink from '../components/RenderLink';

type Params = {
  slug: string;
}

type Props = {
  creator: Creator;
}

type GetStaticPropsResponse = {
  creator: Creator;
}

const ChakraImg = chakra(Image, {
  shouldForwardProp: (prop) => ["src", "alt", "width", "height", "borderRadius"].includes(prop)
});

const Home = ({ creator }: Props) => {

  return (
    <Flex
      direction="column"
      alignItems="center"
      marginTop="40px">
      <ChakraImg
        src={creator.photo.url}
        alt="Creator Avatar"
        width="96px"
        height="96px"
        borderRadius="full"
        objectFit="cover" />
      <Text marginTop="16px" fontWeight="bold" fontSize="24px">{creator.name}</Text>
      <Text fontWeight="500" fontSize="16px" textColor="#646464">{creator.bio}</Text>

      <RenderLink links={creator.links} />
    </Flex>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps<{}, Params> = async ({ params }): Promise<GetStaticPropsResult<GetStaticPropsResponse>> => {
  const { creator } = await graphcms.request<Promise<GetStaticPropsResponse>>(CreatorQuery,
    {
      nickname: params?.slug
    }
  );

  return {
    props: {
      creator
    }
  }
}

export default Home;
