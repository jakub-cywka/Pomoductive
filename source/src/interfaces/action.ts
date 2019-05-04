import { Types } from '../enums/types';

export interface Action<Payload = any> {
    type: Types;
    payload: Payload;
};