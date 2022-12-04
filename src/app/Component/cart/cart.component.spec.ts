import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule, RouterTestingModule, FormsModule, ReactiveFormsModule], 
      declarations: [ CartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should', fakeAsync(() => {
    spyOn(component, 'stepUp');
  
    let button = fixture.debugElement.nativeElement.querySelector('.stepUp');
    button.click();
    tick();
    expect(component.stepUp).toHaveBeenCalled();
  
  }));

  it('should render class in a address class', () => {
    const fixture = TestBed.createComponent(CartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.address').textContent).toContain('Address Details');
  });
});