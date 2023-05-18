type ComponentList =
    'BannerAdvertise'|
    'BorderLine'|
    'BoxCard'|
    'BoxCategoryfrom'|
    'BoxCategoryThreeColumn'|
    'BoxCategoryColumn'|
    'BoxPopular'|
    'BoxService'|
    'BreadCrumb'|
    'CardRowMain'|
    'CarSlide'|
    'CardWithAuthor'|
    'CardWithAuthorRow'|
    'CardColumn'|
    'CardItemCarousel'|
    'CardRow'|
    'CardText'|
    'CardTextTitle'|
    'CardTitleTop'|
    'CarouselStory'|
    'CarouselTwo'|
    'CarouselWeather'|
    'DetailArticle'|
    'ImgItem'|
    'Container'|
    'BlockContent'|
    'MainLayout'|
    'TabContainer'|
    'BlockMainWithTab'|
    'BoxCaterogryColumn'|
    'MainTwoColumn'|
    'TabColumn'|
    'CategoryHeader'|
    "BoxCategory"|
    'ItemView';

    interface ITypeItem {
        title : string ,
        urlImg: string ,
        description :string ,
        author: string ,
        createDay: Date,
        publishDay: Date ,   
        className: string , // enum list 
        id : string , // call api detail 
        slug:string ,
        overview:string // change params url 
    }
export interface IComponent {
    type: ComponentList; // enum  one of list type [ComponentList]  (scale) 
    data: {
        id: string; // string   unique 
        embeddedView?: IComponent;  // take all attribute object [IComponent] to type
        items?:ITypeItem; // Array  all attribute object [ITypeItem] to type
        [key: string]: unknown; //  attribute custom component  key string 
        children?:  Array<IComponent>;
        
    };
}
// export interface IComponent1 {
//     type: ComponentList1;
//     data: {
//         id: string;
//         embeddedView?: IComponent;
//         items?: Array<IComponent>;
//         [key: string]: unknown;
//         children?:  Array<IComponent>;
//     };
// }