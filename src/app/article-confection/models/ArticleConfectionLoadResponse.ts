import {ArticleConfectionResponse} from "./article-confection";
import {UniteResponse} from "./UniteResponse";
import {CategoryResponse} from "./CategoryResponse";
import {FournisseurResponse} from "./FournisseurResponse";

export class ArticleConfectionLoadResponse{

     unites: UniteResponse[];
     categories: CategoryResponse[];
    fournisseurs:FournisseurResponse[];
   articleConfections:ArticleConfectionResponse[];

}
