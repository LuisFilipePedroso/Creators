type NormalLink = {
  __typename: string;
  id: string;
  name: string;
  url: string;
};

type YoutubeLink = {
  __typename: string;
  id: string;
  url: string;
};

interface Link extends NormalLink, YoutubeLink {
  __typename: string;
}

export default Link;
