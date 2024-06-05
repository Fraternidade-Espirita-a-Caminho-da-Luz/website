import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/website/blog',
    component: ComponentCreator('/website/blog', '187'),
    exact: true
  },
  {
    path: '/website/blog/archive',
    component: ComponentCreator('/website/blog/archive', '9e4'),
    exact: true
  },
  {
    path: '/website/blog/first-blog-post',
    component: ComponentCreator('/website/blog/first-blog-post', '961'),
    exact: true
  },
  {
    path: '/website/blog/long-blog-post',
    component: ComponentCreator('/website/blog/long-blog-post', '696'),
    exact: true
  },
  {
    path: '/website/blog/mdx-blog-post',
    component: ComponentCreator('/website/blog/mdx-blog-post', 'b65'),
    exact: true
  },
  {
    path: '/website/blog/tags',
    component: ComponentCreator('/website/blog/tags', 'a4f'),
    exact: true
  },
  {
    path: '/website/blog/tags/docusaurus',
    component: ComponentCreator('/website/blog/tags/docusaurus', '54d'),
    exact: true
  },
  {
    path: '/website/blog/tags/facebook',
    component: ComponentCreator('/website/blog/tags/facebook', 'f3a'),
    exact: true
  },
  {
    path: '/website/blog/tags/hello',
    component: ComponentCreator('/website/blog/tags/hello', '916'),
    exact: true
  },
  {
    path: '/website/blog/tags/hola',
    component: ComponentCreator('/website/blog/tags/hola', 'c82'),
    exact: true
  },
  {
    path: '/website/blog/welcome',
    component: ComponentCreator('/website/blog/welcome', '7ac'),
    exact: true
  },
  {
    path: '/website/markdown-page',
    component: ComponentCreator('/website/markdown-page', 'de0'),
    exact: true
  },
  {
    path: '/website/docs',
    component: ComponentCreator('/website/docs', '686'),
    routes: [
      {
        path: '/website/docs',
        component: ComponentCreator('/website/docs', '92e'),
        routes: [
          {
            path: '/website/docs',
            component: ComponentCreator('/website/docs', '5c5'),
            routes: [
              {
                path: '/website/docs/category/tutorial---basics',
                component: ComponentCreator('/website/docs/category/tutorial---basics', '1d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/category/tutorial---extras',
                component: ComponentCreator('/website/docs/category/tutorial---extras', 'a62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/intro',
                component: ComponentCreator('/website/docs/intro', '7b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/website/docs/tutorial-basics/congratulations', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/website/docs/tutorial-basics/create-a-blog-post', 'cbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/website/docs/tutorial-basics/create-a-document', 'f29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/website/docs/tutorial-basics/create-a-page', '291'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/website/docs/tutorial-basics/deploy-your-site', 'a1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/website/docs/tutorial-basics/markdown-features', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/website/docs/tutorial-extras/manage-docs-versions', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/website/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/website/docs/tutorial-extras/translate-your-site', 'af5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/website/',
    component: ComponentCreator('/website/', '7d9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
