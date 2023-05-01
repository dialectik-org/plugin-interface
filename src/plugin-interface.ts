import React, { ComponentType } from 'react';
import { Plugin } from 'unified';

export interface IDialectikPlugin {
  name: string;
  stylesheets?: Array<string>;
  emstylesheets?: Array<string>;
  remarkPlugins?: Array<Plugin<any, any>>;
  rehypePlugins?: Array<Plugin<any, any>>;
  react?: { tagname: string, componentname: string};
  isRequired: (markdown: string) => boolean
}

export interface IPluginProvider {
  getPlugin: { () : IDialectikPlugin };
}