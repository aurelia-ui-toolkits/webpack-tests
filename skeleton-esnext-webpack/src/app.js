export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
       { route: ['', 'k-autocomplete'],  name: 'k-button',     moduleId: 'kendoui/autocomplete/k-autocomplete',  nav: true, title: 'KendoUI autocomplete' }
    ]);

    this.router = router;
  }
}
