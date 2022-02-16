import { Link, Text } from "@chakra-ui/react";

type Props = {
  name: string;
  url: string;
}

function NormalLink({ name, url }: Props) {

  return (
    <Link
      href={url}
      target="_blank"
      width="400px"
      height="48px"
      backgroundColor="#EDF1FF"
      marginBottom="16px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="4px"
      borderWidth={1}
      borderColor="#AEC0FF"
      _focus={{ boxShadow: "none" }}
      _hover={{ textDecoration: 'none', backgroundColor: '#E1E8FF' }}>
      <Text textColor="#1F48DA" fontSize="18px" fontWeight="bold">{name}</Text>
    </Link>
  )
}

export default NormalLink;