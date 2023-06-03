import { faker } from '@faker-js/faker';
import { obterTags } from './TagService';
import { ChapterAssunto } from '../../models/ChapterAssunto';

const allTags: Tag[] = obterTags();


function obterChaptersAssunto() {
    return(chaptersAssunto)
}

function adicionarChapterAssunto(assunto: ChapterAssunto) {
    chaptersAssunto.push(assunto)
}

interface Tag {
    id: number,
    nome: string
}

const randomTag = (): Tag => {
    const generateRandomTag = () => {
        return allTags.find(t => t.id === faker.number.int({min:1, max:10}))
    }
    do{
        var tag: Tag | undefined = generateRandomTag();
    }while (tag === undefined);
    return(tag);
}

function fakerChaptersAssunto() {
    var lista = [];

    for (let index = 0; index < 15; index++) {
        var tags: Tag[] = []

        for (let j = 0; j < faker.number.int({min:1,max:3}); j++) {
            let tag: Tag = randomTag();
            if(!tags.includes(tag)){
                tags.push(tag);
            }
        }

        var item: ChapterAssunto = {
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
            tags,
            time: faker.date.birthdate({min:0, max: 2, mode: 'age'}).toLocaleString().split(',')[0],
            views: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 10),
            like: Math.floor(Math.random() * 100),
            unlike: Math.floor(Math.random() * 100),
            respondida: faker.datatype.boolean()
        };

        lista.push(item);
    }

    return lista;
}
const chaptersAssunto: ChapterAssunto[] = fakerChaptersAssunto();

export{ obterChaptersAssunto, adicionarChapterAssunto }