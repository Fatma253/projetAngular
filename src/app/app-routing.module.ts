import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficherCatalogueComponent } from './afficher-catalogue/afficher-catalogue.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { EffacerArticleComponent } from './effacer-article/effacer-article.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {path:"Afficher",component:AfficherCatalogueComponent},
  {path:"Ajouter",component:AjouterArticleComponent},
  {path:"Modifier",component:ModifierArticleComponent},
  {path:"Effacer",component:EffacerArticleComponent},
  {path:"Article",component:ArticleComponent},

  {path:"**",component:ErreurComponent},
  {path:'', redirectTo:'Afficher', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
