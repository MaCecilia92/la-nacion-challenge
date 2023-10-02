import type { Articles, TagsArray } from "./interfaces";

const sortedTags = (items: TagsArray[]) => items.sort((a, b) => b.count - a.count).slice(0, 10);

export const getDataBreadcrumbs = (data: Articles[]) => {
    const tagCounts: Record<string, TagsArray> = {};
    data.forEach(article => {
        article.taxonomy.tags.forEach(tag => {
            if (!tagCounts[tag.slug]) {
                tagCounts[tag.slug] = {
                    slug: tag.slug,
                    text: tag.text,
                    count: 0,
                };
            }

            tagCounts[tag.slug].count++;
        });
    });

    const sortedTagsResult = sortedTags(Object.values(tagCounts));
    
    return sortedTagsResult ;
}