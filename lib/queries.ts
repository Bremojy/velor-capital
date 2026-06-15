export const ARTICLES_QUERY = `
  *[_type == "article"] | order(publishedAt desc){
    _id,
    title,
    category,
    excerpt,
    publishedAt,
    "slug": slug.current
  }
`;

export const PORTFOLIO_QUERY = `
  *[_type == "portfolio"]{
    _id,
    title,
    sector,
    description
  }
`;