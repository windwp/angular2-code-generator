import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2CodeGeneratorAppComponent } from '../app/angular2-code-generator.component';

beforeEachProviders(() => [Angular2CodeGeneratorAppComponent]);

describe('App: Angular2CodeGenerator', () => {
  it('should create the app',
      inject([Angular2CodeGeneratorAppComponent], (app: Angular2CodeGeneratorAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-code-generator works!\'',
      inject([Angular2CodeGeneratorAppComponent], (app: Angular2CodeGeneratorAppComponent) => {
    expect(app.title).toEqual('angular2-code-generator works!');
  }));
});
