
# Commandes Angular CLI

Ce document récapitule les commandes principales de l'Angular CLI avec une courte description, un exemple d'utilisation et des remarques utiles.

| Commande | Description | Exemple | Remarques |
|---|---|---|---|
| `ng new <name>` | Crée une nouvelle application Angular avec la structure de base. | `ng new my-app` | Demande des options (routing, style, etc.). |
| `ng serve` | Lance l'application en mode développement avec live-reload. | `ng serve -o` | Par défaut sur `http://localhost:4200`. |
| `ng build` | Compile l'application en sortie prête pour production (ou dev). | `ng build --prod` | Génère `dist/` ; utiliser `--configuration production`. |
| `ng test` | Lance les tests unitaires (Karma/Jest selon config). | `ng test` | Exécute en watch par défaut. |
| `ng e2e` | Lance les tests end-to-end (Protractor / Cypress selon config). | `ng e2e` | Peut nécessiter un serveur de test séparé. |
| `ng lint` | Analyse statique du code (ESLint/TSlint selon config). | `ng lint` | Retourne les erreurs de style et qualité. |
| `ng generate <schematic>` (`ng g`) | Génère des éléments (component, service, module...). | `ng g component header` | Utilise les schematics du workspace. |
| `ng add <package>` | Ajoute et configure un package Angular compatible (schematic). | `ng add @angular/material` | Exécute le schematic d'installation. |
| `ng update` | Met à jour Angular et les dépendances liées. | `ng update @angular/cli @angular/core` | Vérifier le changelog et les migrations. |
| `ng deploy` | Déploie l'application via un builder de déploiement (providers). | `ng deploy --base-href=/my-app/` | Nécessite un builder de déploiement installé. |
| `ng doc` | Ouvre la documentation d'Angular pour un symbole donné. | `ng doc Component` | Ouvre la doc locale ou en ligne. |
| `ng help` | Affiche l'aide et la liste des commandes. | `ng help` | Très utile pour options et flags. |
| `ng version` | Affiche les versions d'Angular et du CLI. | `ng version` | Utile pour diagnostiquer des problèmes. |
| `ng xi18n` | Extraction des messages i18n pour traduction. | `ng xi18n --output-path src/locale` | Extrait les messages utilisables par traducteurs. |
| `ng analytics` | Gère la collecte d'analytics (opt-in/out). | `ng analytics enable` | Configure le tracking du CLI. |
| `ng config` | Lit ou modifie la configuration du workspace. | `ng config cli.warnings.versionMismatch false` | Modifie `angular.json`/settings CLI. |
| `ng cache` | Gère le cache de l'Angular CLI. | `ng cache clean` | Permet de résoudre problèmes de cache. |
| `ng completion` | Active l'auto-complétion shell (bash/zsh). | `ng completion --bash` | Installe un script d'auto-complétion. |

---

Si tu veux, j'ajoute une section avec des flags courants (`--prod`, `--configuration`, `--output-path`, etc.) ou j'exporte ce tableau en HTML.

## Exemples de templates et bindings Angular

| Syntaxe | Description |
|---|---|
| `<p>Hello {{ponyName}}</p>` | Affiche `Hello poney1` si `ponyName` vaut "poney1". |
| `<p>Fournisseur: {{provider?.companyName}}</p>` | Utilise l'opérateur safe navigation `?.` : pas d'exception si `provider` est `undefined`, l'affichage est simplement ignoré. |
| `name: {{name \| upperCase}}` | Utilise un `pipe` (`upperCase`) pour transformer la valeur avant affichage. Les pipes peuvent être chaînés. |
| `<input [value]="firstName">` | Liaison unidirectionnelle : affecte la valeur de l'expression `firstName` à la propriété DOM `value`. |
| `<div title="Hello {{ponyName}}">` | Interpolation dans un attribut ; équivalent à `[title]="'Hello ' + ponyName"`. |
| `<div [style.width.px]="mySize">` | Liaison de style : affecte `mySize` à la largeur en pixels (`width`). |
| `<button (click)="onEventXy($event)">` | Gestionnaire d'événement : appelle `onEventXy()` et transmet l'objet `$event` (par ex. `MouseEvent`). |
| `<input [(ngModel)]="userName">` | Liaison bidirectionnelle (`Two-way binding`) : met à jour `userName` à chaque saisie et met la valeur dans l'input. |


---

## Directives Angular courantes

| Directive | Type | Exemple | Description / Remarques |
|---|---|---|---|
| `*ngIf="expr"` | Structurelle | `<div *ngIf="user.isAdmin">Admin</div>` | Insère/retire l'élément du DOM selon `expr`. Supporte une syntaxe `else` : `*ngIf="expr; else elseTpl"` et `<ng-template #elseTpl>...` |
| `*ngFor="let item of items; index as i; trackBy: trackByFn"` | Structurelle | `<li *ngFor="let p of produits; index as i">{{i}} - {{p.name}}</li>` | Itère sur une collection. Utiliser `trackBy` pour optimiser le rendu et éviter les recréations DOM inutiles. |
| `[ngSwitch]` / `*ngSwitchCase` / `*ngSwitchDefault` | Structurelle | `<div [ngSwitch]="mode"><p *ngSwitchCase="'list'">Liste</p><p *ngSwitchDefault>Autre</p></div>` | Choix entre plusieurs blocs selon la valeur évaluée. |
| `[ngClass]` | Attributaire | `<div [ngClass]="{active: selected, error: hasError}">` | Ajoute ou retire des classes CSS dynamiquement (chaîne, tableau ou objet). |
| `[ngStyle]` | Attributaire | `<p [ngStyle]="{color: isError ? 'red' : 'black'}">` | Applique des styles en ligne dynamiquement via un objet. |
| `[(ngModel)]` | Directive (Forms) | `<input [(ngModel)]="name">` | Liaison bidirectionnelle pour formulaires. Nécessite `FormsModule` (ou `ReactiveFormsModule` pour Reactive Forms). |
| `<ng-container *ngIf="...">` | Conteneur invisible | `<ng-container *ngIf="items.length">...</ng-container>` | Conteneur logique qui n'ajoute pas d'élément DOM supplémentaire (utile pour grouper plusieurs éléments). |
| `<ng-template>` / `*ngTemplateOutlet` | Template / structure | `<ng-template #row let-item>...</ng-template>
<ng-container *ngTemplateOutlet="row; context: { $implicit: produit }"></ng-container>` | Permet de définir des templates réutilisables et de les instancier dynamiquement avec un contexte. |

**Remarques rapides**

- Les directives structurelles utilisent le préfixe `*` (ex. `*ngIf`, `*ngFor`) et modifient la structure du DOM.
- Les directives attributaires modifient l'apparence ou le comportement d'un élément existant (`[ngClass]`, `[ngStyle]`, etc.).
- Pour `[(ngModel)]`, importe `FormsModule` dans le module (ou déclare le composant `standalone: true` et ajoute `FormsModule` dans `imports`).
- Utilise `trackBy` dans `*ngFor` pour améliorer les performances sur de grandes listes.



