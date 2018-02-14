import { Action } from '@ngrx/store';


export const DISPLAY_LOADING = '[Core] Display Loading';
export const HIDE_LOADING = '[Core] Hide Loading';


export class DisplayLoading implements Action {
    readonly type = DISPLAY_LOADING;

    constructor() {}
}

export class HideLoading implements Action {
    readonly type = HIDE_LOADING;

    constructor() {}
}


export type Actions = 
    | DisplayLoading
    | HideLoading;