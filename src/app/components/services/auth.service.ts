import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;
    constructor(private firebaseAuth: AngularFireAuth) {
        this.user = firebaseAuth.authState;
    }

    login(email: string, password: string) {
        return this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then((data: Response) => {
                return data;
            });
    }
}