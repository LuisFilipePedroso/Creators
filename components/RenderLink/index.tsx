import { Flex } from "@chakra-ui/react";
import Link from "../../graphql/schemas/Link";
import NormalLink from "../NormalLink";
import YoutubeLink from "../YoutubeLink";

type Props = {
  links: Link[];
}

function RenderLink({ links }: Props) {

  const renderByTypename: Record<string, (link: Link) => JSX.Element> = {
    "NormalLink": ({ name, url }: Link) => <NormalLink name={name} url={url} />,
    "YoutubeLink": ({ url }: Link) => <YoutubeLink url={url} />
  }

  return (
    <Flex direction="column" alignItems="center" marginTop="32px">
      {links.map(link => renderByTypename[link.__typename](link))}
    </Flex>
  );
}

export default RenderLink;