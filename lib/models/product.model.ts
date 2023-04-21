// import { ProductCategory } from './product-category.model';
// import { FilterCondition, PageOptionsDto, SortDirection } from './http.model';
// import { GeneralUtil } from '@remedywell-web/shared/utils';
// import { BaseEntity, BooleanNumber } from './base.entity';
// import { RxSystem } from './rx.model';

// //----------------------------------------------------------------------
// export enum ProductType {
//   Unknown = 'Unknown',
//   OTC = 'OTC',
//   Rx = 'Rx',
//   Supplement = 'Supplement',
//   Consultation = 'Consultation',
//   CarePlan = 'CarePlan',
// }

// export enum ProductStatus {
//   Inactive = 'Inactive',
//   Active = 'Active',
//   Deleted = 'Deleted',
// }

// export const ProductTypeOptions = GeneralUtil.enumToList(ProductType);
// export const ProductStatusOptions = GeneralUtil.enumToList(ProductStatus);

// export enum ProductDrugForm {
//   Cream = 'Cream',
//   Solution = 'Solution',
//   Capsule = 'Capsule',
// }

// //----------------------------------------------------------------------
// export class ProductSortQueryDto {
//   id?: SortDirection;
//   status?: SortDirection;
//   name?: SortDirection;
//   num?: SortDirection;
//   categoryName?: SortDirection;
//   categoryNum?: SortDirection;
//   createdAt?: SortDirection;
// }

// export class ProductFilterQueryDto {
//   id?: FilterCondition;
//   status?: FilterCondition;
//   name?: FilterCondition;
//   num?: FilterCondition;
//   type?: FilterCondition;
//   categoryId?: FilterCondition;
//   createdAt?: FilterCondition;
// }

// export class ProductQueryOptionsDto extends PageOptionsDto {
//   sorts?: ProductSortQueryDto;
//   filters?: ProductFilterQueryDto;
// }

// //----------------------------------------------------------------------
// export class ProductTab {
//   title = '';
//   content = '';
// }

// export class Product extends BaseEntity {
//   productCategory: ProductCategory = new ProductCategory();
//   type: ProductType = ProductType.Unknown;
//   num = '';
//   sku = '';
//   name = '';
//   duration = 0;
//   isService = false;
//   isCarePlan = false;
//   isConsultation = false;
//   imageFileId = 0;
//   imageFileUsagesId = 0;
//   imageFileAdditionalId = 0;
//   imageUrl = '';
//   imageUsagesUrl = '';
//   imageAdditionalUrl = '';
//   canHaveSubscriptions = false;
//   price = 0;
//   isVisibleInShop = false;
//   description = '';
//   usages = '';
//   targetPatients = '';
//   ingredients = '';
//   sideEffects = '';
//   safetyInfo = '';
//   benefits = '';
//   additionalInfoTitle = '';
//   additionalInfoDescription = '';
//   rxName = '';
//   rxStrength = '';
//   rxSystem = '';
//   hasSubscriptions = BooleanNumber.Yes;
//   hasOneTimePrice = BooleanNumber.Yes;
//   tabList: ProductTab[] = [];
//   status: ProductStatus = ProductStatus.Active;
// }

// export class SimpleProduct {
//   id = 0;
//   name = '';
//   num = '';
//   duration = 0;
// }

// //----------------------------------------------------------------------
// export class ProductFeaturedModel extends BaseEntity {
//   category: ProductCategory = new ProductCategory();
//   products: Product[] = [];
// }

// export class ProductFeaturedQueryOptionsDto {
//   category?: PageOptionsDto;
//   product?: PageOptionsDto;
// }

// //----------------------------------------------------------------------
// export interface CreateProductDto {
//   productCategoryId: number;
//   type: ProductType;
//   name: string;
//   price: number;
//   num?: string;
//   sku?: string;
//   isVisibleInShop?: boolean;
//   description?: string;
//   usages?: string;
//   targetPatients?: string;
//   ingredients?: string;
//   sideEffects?: string;
//   safetyInfo?: string;
//   benefits?: string;
//   additionalInfoTitle?: string;
//   additionalInfoDescription?: string;
//   rxName?: string;
//   rxStrength?: string;
//   duration?: number;
//   rxSystem?: RxSystem;
//   status?: ProductStatus;
//   tabList?: ProductTab[];
//   hasSubscriptions?: BooleanNumber;
//   hasOneTimePrice?: BooleanNumber;
// }

// export interface UpdateProductDto {
//   productCategoryId?: number;
//   type?: ProductType;
//   name?: string;
//   price?: number;
//   num?: string;
//   sku?: string;
//   isVisibleInShop?: boolean;
//   description?: string;
//   usages?: string;
//   targetPatients?: string;
//   ingredients?: string;
//   sideEffects?: string;
//   safetyInfo?: string;
//   benefits?: string;
//   additionalInfoTitle?: string;
//   additionalInfoDescription?: string;
//   status?: ProductStatus;
//   loadSubscriptions?: 0 | 1;
//   deleteImage?: 0 | 1;
//   deleteImageUsages?: 0 | 1;
//   deleteImageAdditional?: 0 | 1;
//   rxName?: string;
//   rxStrength?: string;
//   duration?: number;
//   rxSystem?: string;
//   tabList?: ProductTab[];
//   hasSubscriptions?: BooleanNumber;
//   hasOneTimePrice?: BooleanNumber;
// }
