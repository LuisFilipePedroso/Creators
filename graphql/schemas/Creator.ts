import Asset from "./Asset";
import Link from "./Link";

type Creator = {
  id: string;
  name: string;
  nickname: string;
  bio: string;
  photo: Asset;
  links: Link[];
};

export default Creator;
