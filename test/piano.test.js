import {Key, Piano} from '../src/js/piano/piano_key'

test('Create key', () => {
    const key = new Key(1);
    expect(key.colors.black).toBe("#000");
    expect(key.colors.white).toBe("#FFF");
    expect(key.note).toBe(1);
});


test('Create piano', () => {
    const piano = new Piano(0, 15);

    expect(piano.key_count).toBe(16);

    piano.initialize();

    let keys_map =  piano.keys.map(x => x.type);
    let keys = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1];

    expect(keys_map).toEqual(keys);
});

test('Create keys of piano', () => {
    const piano = new Piano(0, 15, "test");

    expect(piano.key_count).toBe(16);

    piano.initialize();

    let keys_map =  piano.keys.map(x => x.type);
    let keys = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1];
    expect(keys_map).toStrictEqual(keys);
});