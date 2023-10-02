export interface Articles {
    _id: string
    display_date: string
    headlines: Headlines
    promo_items?: PromoItems
    subtype: string
    taxonomy: Taxonomy
    website_url: string
  }
  
  export interface Headlines {
    basic: string
  }
  
  export interface PromoItems {
    basic: Basic
  }
  
  export interface Basic {
    resized_urls?: ResizedUrl[]
    subtitle?: string
    type: string
    url?: string
  }
  
  export interface ResizedUrl {
    option: Option
    resizedUrl: string
  }
  
  export interface Option {
    media: string
  }
  
  export interface Taxonomy {
    tags: Tag[]
  }
  
  export interface Tag {
    slug: string
    text: string
  }

  export interface TagsArray {
    slug: string,
    text: string,
    count: number
}