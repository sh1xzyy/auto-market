import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { ContentCard } from "@/shared/ui/ContentCard/ContentCard";
import { Logo } from "@/shared/ui/Logo/Logo";
import { routes } from "@/shared/constants/routes";
import { DefaultLink } from "@/shared/ui/Link/DefaultLink";

export const AIHelperIntro = () => {
  return (
    <div className="container">
      <ContentCard variant="primary">
        <div className="grid gap-4 md:grid-cols-[1fr_231px] md:items-center">
          <div>
            <div className="inline-flex items-center gap-[9px] mb-[9px]">
              <Logo />
              <div className="p-1 rounded-md text-sm font-bold gap-[9px] bg-black">
                Beta
              </div>
            </div>
            <p className="text-md font-medium">
              Ich bin dein persönlicher KI-Guide! Mit meinen Antworten findest
              du schnell & sicher durch den Dschungel der Angebote.
            </p>
          </div>
          <DefaultLink
            variant="primary"
            text="Wie kann ich dir helfen?"
            Icon={<BiMessageDetail size={20} />}
            href={routes.mobee}
          />
        </div>
      </ContentCard>
    </div>
  );
};
