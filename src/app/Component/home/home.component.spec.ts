import { ComponentFixture, async, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuModule } from '@angular/material/menu';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatMenuModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render name in a span tag', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Bookstore');
  });

  it('should render class in a cart class', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.cart').textContent).toContain('cart');
  });

  it('should', async(() => {
    spyOn(component, 'home');
  
    let button = fixture.debugElement.nativeElement.querySelector('.text');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.home).toHaveBeenCalled();
    });
  }));

  it('should', fakeAsync(() => {
    spyOn(component, 'home');
  
    let button = fixture.debugElement.nativeElement.querySelector('.text');
    button.click();
    tick();
    expect(component.home).toHaveBeenCalled();
  
  }));

});
