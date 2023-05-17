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
    'ItemView';
type ComponentList1 =
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
    'ItemView';
export interface IComponent {
    type: ComponentList;
    data: {
        id: string;
        embeddedView?: IComponent;
        items?: Array<IComponent>;
        [key: string]: unknown;
        children?:  Array<IComponent>;
    };
}
export interface IComponent1 {
    type: ComponentList1;
    data: {
        id: string;
        embeddedView?: IComponent;
        items?: Array<IComponent>;
        [key: string]: unknown;
        children?:  Array<IComponent>;
    };
}