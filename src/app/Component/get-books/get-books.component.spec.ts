import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { GetBooksComponent } from './get-books.component';

describe('GetBooksComponent', () => {
  let component: GetBooksComponent;
  let fixture: ComponentFixture<GetBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule, RouterTestingModule, NgxPaginationModule], 
      declarations: [ GetBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should', async(() => {
    spyOn(component, 'PriceLowToHigh');
  
    let button = fixture.debugElement.nativeElement.querySelector('mat-option');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.PriceLowToHigh).toHaveBeenCalled();
    });

  }));

  it('should render class in a name class', () => {
    const fixture = TestBed.createComponent(GetBooksComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.name').textContent).toContain('Books');
  });
  
});