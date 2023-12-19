import { Component } from '@angular/core';
import {
  OAuthService,
  NullValidationHandler,
  AuthConfig,
} from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Recipe app';
}

/*
export class AppComponent {
  title = 'Recipe app';
  constructor(private oauthService: OAuthService) {
    this.configure();
  }
  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/realms/dive-dev',
    redirectUri: window.location.origin,
    clientId: 'angular-front',
    responseType: 'code',
    // at_hash is not present in JWT token
    disableAtHashCheck: true,
    showDebugInformation: true,
    scope: 'openid',
  };

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin().then(() => {
      if (!this.oauthService.hasValidAccessToken()) {
        this.oauthService.initCodeFlow();
      } else {
        this.oauthService.loadUserProfile().then((userProfile) => {
          console.log(JSON.stringify(userProfile));
        });
      }
    });
  }

  get token() {
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims : null;
  }
}*/
