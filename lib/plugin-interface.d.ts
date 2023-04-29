import { Component } from 'react';
import { Plugin } from 'unified';
export interface IDialectikPlugin {
    name: string;
    stylesheets?: Array<string>;
    emstylesheets?: Array<string>;
    remarkPlugins?: Array<Plugin<any, any>>;
    rehypePlugins?: Array<Plugin<any, any>>;
    component?: Component;
    isRequired: (markdown: string) => boolean;
}
export interface IPluginProvider {
    getPlugin: {
        (): IDialectikPlugin;
    };
}
