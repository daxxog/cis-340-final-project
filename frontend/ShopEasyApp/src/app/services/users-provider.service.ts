import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { GetUser } from '../api/models/get-user';
import { Customer } from '../api/models/customer';
import { UserManagementService } from '../api/services/user-management.service';


@Injectable({
  providedIn: 'root'
})
export class UsersProviderService {
    private _getUsersPromise: Promise<Array<GetUser>>;
    private _getUsers: Array<GetUser> = [];
    private _getUsersLoaded: boolean = false;

    constructor(
        private userManagementService: UserManagementService
    ) {
        this._getUsersPromise = this.reload(); // we can call this function again to reload changes to users
    }

    async reload(): Promise<Array<GetUser>> {
        return new Promise(resolve => {
            const observable = this.userManagementService.apiUserManagementGet$Json();
            this._getUsersLoaded = false;
            (this._getUsersPromise = lastValueFrom(observable)).then(getUsers => {
                this._getUsers = getUsers;
                this._getUsersLoaded = true;
                resolve(this._getUsers);
            });
        });
    }

    async findUser(c: Customer): Promise<GetUser | undefined> {
        const getUsers = await this._getUsersPromise;
        return getUsers.filter(u => u.customerId === c.id)[0];
    }

    private _syncUsernameValidityChecker(getUsers: Array<GetUser>, username: string): boolean {
        // username must not exist
        return getUsers.filter(u => u.username === username).length === 0;
    }

    async userNameValidityChecker(username: string): Promise<boolean> {
        const getUsers = await this._getUsersPromise;
        return this._syncUsernameValidityChecker(getUsers, username);
    }

    syncUsernameValidityChecker(username: string): boolean {
        return this._getUsersLoaded && this._syncUsernameValidityChecker(this._getUsers, username);
    }
}
