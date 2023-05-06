import { Plugin } from 'unified';

export interface IDialectikPlugin {
  withMain: boolean;
  withComponents: boolean;
  isRequired: (markdown: string) => boolean
  scripts ?: Array<string>;
  stylesheets?: Array<string>;
  remarkPlugins?: Array<Plugin<any, any>>;
  rehypePlugins?: Array<Plugin<any, any>>;
  requires: Array<string>
}

export interface IPluginProvider {
  getPlugin: { (arg ?: any) : IDialectikPlugin };
}