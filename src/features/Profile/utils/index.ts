import { ProfileInformation } from "./../types/index";
export function findOneBySlug(
  list: ProfileInformation[],
  slug: string
): ProfileInformation | undefined {
  return list.find((item) => item.slug === slug);
}

export function findAllBySlugs(
  list: ProfileInformation[],
  slugs: string[]
): ProfileInformation[] {
  return list.filter((item) => slugs.includes(item.slug));
}

export function findValueBySlug(
  list: ProfileInformation[],
  slug: string
): string {
  const item = findOneBySlug(list, slug);
  return item ? item.value : "";
}
