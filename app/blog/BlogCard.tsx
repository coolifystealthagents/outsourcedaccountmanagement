import { richArticles } from '../rich-articles';
import { site } from '../data';

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  publishedAt?: string;
  published?: string;
  image?: string;
};

const readerDate = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export function BlogCard({ post }: { post: BlogPost }) {
  const article = richArticles[post.slug];
  const published = article?.published || post.publishedAt || post.published;
  const thumbnail = article?.heroImage || post.image || site.heroImage;

  return <a className="card blog-card" href={`/blog/${post.slug}`}>
    <span className="blog-card-media">
      <img src={thumbnail} alt="" width={720} height={405} loading="lazy" />
    </span>
    <span className="blog-card-body">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <span className="blog-card-meta">
        {published && <>Published <time dateTime={published}>{readerDate.format(new Date(`${published}T00:00:00Z`))}</time> · </>}
        {post.minutes} min read
      </span>
    </span>
  </a>;
}
