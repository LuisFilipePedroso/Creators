import { Box } from "@chakra-ui/react";
import { useMemo } from "react";

type Props = {
  url: string;
}

function YoutubeLink({ url }: Props) {

  const src = useMemo(() => {
    const id = url.split('?v=')[1];
    const src = `http://www.youtube.com/embed/${id}`;

    return src;
  }, [url])

  return (
    <Box width={["100%", "400px"]} height={["245px", "235px"]}>
      <iframe width="100%" height="100%" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Box>
  )
}

export default YoutubeLink;