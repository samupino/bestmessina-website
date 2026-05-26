import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {usePluralForm} from '@docusaurus/theme-common';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';

function useReadingTimeText() {
  const {selectMessage} = usePluralForm();

  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);

    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        {readingTime},
      ),
    );
  };
}

function BlogPostListMetadata(): ReactNode {
  const {
    metadata: {authors, date, readingTime},
    assets,
  } = useBlogPost();
  const firstAuthor = authors[0];
  const authorImageUrl = assets.authorsImageUrls[0] ?? firstAuthor?.imageURL;
  const authorLink =
    firstAuthor?.page?.permalink ||
    firstAuthor?.url ||
    (firstAuthor?.email && `mailto:${firstAuthor.email}`) ||
    undefined;
  const authorName = firstAuthor?.name;
  const readingTimeText = useReadingTimeText();
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formattedDate = dateTimeFormat.format(new Date(date));

  return (
    <div className="blog-card-meta">
      {authorImageUrl && (
        <img
          className="blog-card-meta__avatar"
          src={authorImageUrl}
          alt={authorName ?? ''}
        />
      )}
      <span className="blog-card-meta__text">
        {authorName && (
          <>
            {authorLink ? <Link href={authorLink}>{authorName}</Link> : authorName}
            {' · '}
          </>
        )}
        <time dateTime={date}>{formattedDate}</time>
        {typeof readingTime !== 'undefined' && (
          <>{` · ${readingTimeText(readingTime)}`}</>
        )}
      </span>
    </div>
  );
}

export default function BlogPostItemHeader(): ReactNode {
  const {isBlogPostPage} = useBlogPost();

  return (
    <header>
      <BlogPostItemHeaderTitle />
      {isBlogPostPage ? (
        <>
          <BlogPostItemHeaderInfo />
          <BlogPostItemHeaderAuthors />
        </>
      ) : (
        <BlogPostListMetadata />
      )}
    </header>
  );
}
