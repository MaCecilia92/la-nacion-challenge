import type { Articles } from "./interfaces";

interface Tags {
    slug: string,
    text: string,
    count: number
}

const sortedTags = (items: Tags[]) => items.sort((a, b) => b.count - a.count).slice(0, 10);

export const getDataBreadcrumbs = (data: Articles[]) => {
    const tagCounts: Record<string, Tags> = {};
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