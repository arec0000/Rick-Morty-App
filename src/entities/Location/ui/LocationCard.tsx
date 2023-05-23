import { ContentCard } from '@/shared/ui';

interface Props {
  href: string;
  name: string;
  type: string;
}

export function LocationCard({ href, name, type }: Props) {
  return (
    <ContentCard
      href={href}
      title={name}
      description={type}
    />
  );
}
