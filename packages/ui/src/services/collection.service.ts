/**
 * Generic collection service factory for portfolio data.
 * Each project creates services from their own data using this factory.
 *
 * @example
 * import { createCollectionService } from "@eportfolio/ui/services";
 * import { projects } from "./data";
 * export const projectService = createCollectionService(() => projects);
 */
export function createCollectionService<
  T extends { slug?: string; id?: string; featured?: boolean; order?: number },
>(getData: () => T[], options?: { identifierKey?: keyof T }) {
  const key = options?.identifierKey ?? "slug";

  return {
    getAll: () => getData(),

    getById: (id: string) =>
      getData().find((item) => String(item[key as keyof T]) === id),

    getFeatured: () =>
      getData()
        .filter((item) => item.featured)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),

    getAdjacent: (id: string) => {
      const items = getData();
      const index = items.findIndex(
        (item) => String(item[key as keyof T]) === id
      );
      return {
        prev: index > 0 ? items[index - 1] : null,
        next: index < items.length - 1 ? items[index + 1] : null,
      };
    },
  };
}
