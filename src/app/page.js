import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <div>
      <DefaultLink href="/" variant="secondary" text="test" Icon={CiSearch} />
    </div>
  );
}
