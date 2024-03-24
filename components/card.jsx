import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Image } from "@nextui-org/react";

import Crm from "../public/crm.jpg";

export function CardWithForm({ data }) {
  return (
    <Card className="bg-white xs:w-10/12 sm:w-8/12 md:w-[360px]  ">
      <CardHeader>
        <div className="flex items-center justify-center flex-col gap-6">
          <CardTitle className="text-center">{data.title}</CardTitle>
          <CardDescription>
            <Image src={data.src.src} alt="image" width={200} height={200} />
          </CardDescription>
        </div>
        <CardDescription className="text-center">
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">{data.content}</CardContent>
    </Card>
  );
}
// Practically:

// 1. The header
// 2. The Hero Section
// 3. Services we offer
// 4. Meet the team
// 5. Pricing
// 6. Frequently Asked Questions
// 7. Footer
