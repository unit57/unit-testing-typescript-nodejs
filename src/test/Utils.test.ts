import {Utils} from '../app/Utils'

describe('Utils test suite', ()=>{
    test('first test', ()=>{
        const result = Utils.toUpperCase('abc')
        expect(result).toBe('ABC')
    })
    test('parse simple URL', ()=>{
        const parsedUrl = Utils.parseUrl('http://localhost:3000/login')
        expect(parsedUrl.href).toBe('http://localhost:3000/login')
        expect(parsedUrl.port).toBe('3000')
        expect(parsedUrl.protocol).toBe('http:')
        expect(parsedUrl.query).toEqual({})
    })

    test('parse url with query', ()=>{
        const parsedUrl = Utils.parseUrl('http://localhost:3000/login?user=user&password=pass')
        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }
        expect(parsedUrl.query).toEqual(expectedQuery)
    })
})