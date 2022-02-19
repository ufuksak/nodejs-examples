import {Cat} from '../model/cat.entity';

export const catsProviders = [
    {
        provide: 'CATS_REPOSITORY',
        useValue: Cat,
    },
];
