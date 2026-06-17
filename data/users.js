/*export const user = {
    standard: {
        username: 'standard_user',
        password: 'secret_sauce',
        canLogin: true
    },

    locked: {
        username: 'locked_out_user',
        password: 'secret_sauce',
        canLogin: false
    }
};*/
import { expect } from '@playwright/test';

export const users = [
    {
        username: 'standard_user',
        password: 'secret_sauce',
        canLogin: true
    },
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        canLogin: false
    }
];