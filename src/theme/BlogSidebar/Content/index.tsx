import React, {memo, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {groupBlogSidebarItemsByYear} from '@docusaurus/plugin-content-blog/client';
import type {BlogSidebarItem} from '@docusaurus/plugin-content-blog';
import type {Props} from '@theme/BlogSidebar/Content';

import styles from './styles.module.css';

function archiveLink(items: BlogSidebarItem[], year: string) {
  const firstPermalink = items[0]?.permalink.replace(/\/$/, '') ?? '/blog';
  const pathParts = firstPermalink.split('/').filter(Boolean);
  const dateSegmentIndex = pathParts.findIndex((part) => /^\d{4}$/.test(part));
  if (dateSegmentIndex > 0) {
    return `/${pathParts.slice(0, dateSegmentIndex).join('/')}/archive#${year}`;
  }

  const lastSlashIndex = firstPermalink.lastIndexOf('/');
  const blogBasePath =
    lastSlashIndex > 0 ? firstPermalink.slice(0, lastSlashIndex) : '';

  return `${blogBasePath}/archive#${year}`;
}

function BlogYearLink({
  year,
  items,
}: {
  year: string;
  items: BlogSidebarItem[];
}) {
  return (
    <li className={styles.sidebarYearItem}>
      <Link className={styles.sidebarYearLink} to={archiveLink(items, year)}>
        <span>{year}</span>
        <span className={styles.sidebarYearCount}>{items.length}</span>
      </Link>
    </li>
  );
}

function BlogSidebarContent({items}: Props): ReactNode {
  const itemsByYear = groupBlogSidebarItemsByYear(items);

  return (
    <ul className={styles.sidebarYearList}>
      {itemsByYear.map(([year, yearItems]) => (
        <BlogYearLink key={year} year={year} items={yearItems} />
      ))}
    </ul>
  );
}

export default memo(BlogSidebarContent);
