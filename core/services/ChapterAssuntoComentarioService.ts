import { faker } from '@faker-js/faker';
import { ChapterAssuntoComentario } from '../../models/ChapterAssuntoComentario';

function obterChaptersAssuntoComentario() {
    var lista = [];

    for (let index = 0; index < faker.number.int({min:3, max:8}); index++) {

        var item: ChapterAssuntoComentario = {
            id: faker.number.int(100000),
            key: index,
            title: faker.lorem.sentence(),
            description: faker.lorem.paragraph(),
            author: {
                id:	faker.string.uuid(),
                userName: faker.person.firstName(),
                normalizedUserName:	faker.person.firstName(),
                normalizedEmail: faker.person.fullName(),
                emailConfirmed:	faker.datatype.boolean(),
                passwordHash: faker.string.octal(),
                securityStamp: faker.string.octal(),
                concurrencyStamp: faker.string.octal(),
                phoneNumber: faker.phone.imei(),
                phoneNumberConfirmed: faker.datatype.boolean(),
                twoFactorEnabled: faker.datatype.boolean(),
                lockoutEnd: faker.location.streetAddress(),
                lockoutEnabled:	faker.datatype.boolean(),
                accessFailedCount: 0,
                cpf: faker.person.fullName(),
                foto: undefined,
                nomeCompleto: faker.person.fullName(),
                apelido: faker.person.firstName(),
                email: faker.person.middleName(),
                dataNascimento:	faker.phone.imei(),
                telefone: faker.phone.imei(),
                dataCadastro: faker.phone.imei(),
                status:	1,
                senacCoin: undefined
            },
            time: faker.date.birthdate({min:0, max: 2, mode: 'age'}).toLocaleString().split(',')[0],
            views: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 10),
            like: Math.floor(Math.random() * 100),
            unlike: Math.floor(Math.random() * 100),
            respondida: faker.datatype.boolean(),
            curtida: false,
            descurtida: false,
        };

        lista.push(item);
    }

    return lista;
}

export{ obterChaptersAssuntoComentario }