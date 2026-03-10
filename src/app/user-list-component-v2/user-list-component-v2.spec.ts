import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponentV2 } from './user-list-component-v2';

describe('UserListComponentV2', () => {
  let component: UserListComponentV2;
  let fixture: ComponentFixture<UserListComponentV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponentV2],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponentV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
