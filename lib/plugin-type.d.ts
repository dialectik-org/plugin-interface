import { Component } from 'react';
import { Plugin } from 'unified';
export interface DialectikPlugin {
    name: string;
    stylesheet?: string;
    remarkPlugins?: Array<Plugin>;
    rehypePlugins?: Array<Plugin>;
    component?: Component;
    isRequired: (markdown: string) => boolean;
}
