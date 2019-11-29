import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherCatalogueComponent } from './afficher-catalogue/afficher-catalogue.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './modifier-article/modifier-article.component';
import { EffacerArticleComponent } from './effacer-article/effacer-article.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherCatalogueComponent,
    AjouterArticleComponent,
    ModifierArticleComponent,
    EffacerArticleComponent,
    ErreurComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
