import { Button } from "@/shared/ui/Button/Button";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";
import { FiPhone } from "react-icons/fi";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiParkingBoxLine } from "react-icons/ri";

export const ContactActions = ({ contacts, isDesktop }) => {
  const { phone, email } = contacts;

  return (
    <div className="grid grid-cols-2 gap-2">
      {!isDesktop && (
        <address className="col-span-2">
          <DefaultLink
            variant="secondary"
            text="Anbieter Kontaktieren"
            Icon={<FiPhone size={16} />}
            href={`tel:${phone}`}
          />
        </address>
      )}

      <div className="lg:col-span-2">
        <DefaultLink
          variant="secondary"
          text={`E-mail ${isDesktop ? "schreiben" : ""}`}
          Icon={<MdOutlineEmail size={16} />}
          href={`mailto:${email}`}
        />
      </div>

      <Button
        variant="secondary"
        text="Parken"
        Icon={<RiParkingBoxLine size={16} />}
      />

      {isDesktop && (
        <Button
          variant="secondary"
          text="Teilen"
          Icon={<IoShareSocial size={16} />}
        />
      )}
    </div>
  );
};
