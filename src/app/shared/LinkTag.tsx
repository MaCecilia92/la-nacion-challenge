import Link from "next/link";

interface LinkTagProps {
  tagSlug: string;
  tagText: string;
  tagCount: number;
}

export const LinkTag = ({ tagSlug, tagText, tagCount }: LinkTagProps) => {
  return (
    <Link href={`/tema/${tagSlug}`}>
      {tagText} ({tagCount})
    </Link>
  );
};
