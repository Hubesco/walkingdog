import { Injectable } from '@angular/core';

@Injectable()
export class SecurityContextHolder {

  private currentUser: User;

  constructor() {
    if (localStorage.getItem('currentUser') != null) {
      this.setCurrentUser(localStorage.getItem('currentUser'));
    }
  }

  public getCurrentUser(): User {
    return this.currentUser;
  }


  public setCurrentUser(json: any) {
    this.currentUser = new User(
      json.uuid,
      json.email,
      json.dogUuid,
      json.dogName,
      json.dogGender,
      json.dogBreed,
      json.dogBirthdate,
      false
      );
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  public isAuthenticated(): boolean {
    return this.currentUser && this.currentUser.isAuthenticated();
  }

}

export class User {

  constructor(
    private uuid: string,
    private email: string,
    private dogUuid: string,
    private dogName: string,
    private dogGender: string,
    private dogBreed: string,
    private dogBirthDate: string,
    private walking: boolean) {

  }

  public isAuthenticated(): boolean {
    return (this.uuid !== 'undefined');
  }

  public isWalking(): boolean {
    return this.walking;
  }

  public getUuid(): string {
    return this.uuid;
  }

  public getDogName(): string {
    return this.dogName;
  }

  public getDogUuid(): string {
    return this.uuid;
  }

  public walk(): boolean {
    this.walking = true;
    return this.isWalking();
  }

  public stop(): boolean {
    this.walking = false;
    return this.isWalking();
  }

}