#!/bin/env sh
#

mkdir -p i18n/zh-Hans/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/en/docusaurus-plugin-content-docs/current

mkdir -p i18n/en/docusaurus-plugin-content-blog
cp -r blog/** i18n/en/docusaurus-plugin-content-blog

mkdir -p i18n/en/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/en/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/en/docusaurus-plugin-content-pages
