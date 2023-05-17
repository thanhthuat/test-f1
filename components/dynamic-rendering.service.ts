import React from 'react';
import { IComponent } from './dynamic-rendering.interfaces';
import {Components} from './index'

export function createPage(data?: IComponent): React.ReactNode {
    if (!data) return null;
    function createComponent(item: IComponent): React.ReactNode {
        // console.log("🚀 ~ file: dynamic-rendering.service.ts:8 ~ createComponent ~ item:", item)
        const { data, type } = item;
        const { items, embeddedView, id, children, ...rest   } = data;
        return React.createElement(
            Components[type] as any,
            { ...rest,id,key: id ,item:items} as any,
            Array.isArray(children)
                ? children.map(renderer)
                : renderer(embeddedView ?? null),
        );
    }
    function renderer(
        config: IComponent | null,
    ): React.ReactNode {
        if (!config) return null;
        return createComponent(config);
    }
    return renderer(data);
}
