export const dynamic = 'force-dynamic';

import { RegionalContactPage } from "@/components/regional-contact-page";
import { getRegionalContact } from "@/lib/backend";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!id) {
    notFound();
  }

  const regionalContact = await getRegionalContact(id)

  if (!regionalContact) {
    notFound();
  }

  return <RegionalContactPage data={regionalContact} />;
}
