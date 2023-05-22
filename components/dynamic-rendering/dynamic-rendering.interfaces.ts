
type ComponentList =
    'Button'|
    'Card'|
    "Divider"|
    "Input"|
    'Container' ;
   

export interface IComponent {
    type: ComponentList;
    data: {
        id: string;
        embeddedView?: IComponent;
        items?: Array<IComponent>;
        [key: string]: unknown;
        arrChildren?:  Array<IComponent>;
    };
}
