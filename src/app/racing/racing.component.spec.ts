import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ErgastService } from '../api.service';
import { ErgastServiceMock } from '../api.service.mock';

import { HomeComponent } from './racing.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [HomeComponent],
      providers: [{ provide: ErgastService, useClass: ErgastServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "F1 World Champions"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('F1 World Champions');
  });

  it('should contain "F1 World Champions"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('F1 World Champions');
  });

  it('should render 2 years', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const panels = bannerElement.querySelectorAll('button');
    expect(panels.length).toEqual(2);
    expect(panels[0]?.textContent?.trim()).toEqual('2005 Season');
    expect(panels[1]?.textContent?.trim()).toEqual('2006 Season');
  });
});