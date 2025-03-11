const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./codes.db');

const records = [
    { email: 'kqbtkhqm@demo.net', code1: '9s8wifz3', code2: 'ocahuosl' },
    { email: 'jatutjni@demo.net', code1: '44dou7np', code2: 'ndvokk7h' },
    { email: 'lesyabbq@test.com', code1: 'swwx0d03', code2: 'i9t059sq' },
    { email: 'ululbwfd@demo.net', code1: 'ya687lot', code2: 'bwvaooi9' },
    { email: 'vmpvsvay@test.com', code1: 'omuyr496', code2: 'upikg9lf' },
    { email: 'mhfooqsy@demo.net', code1: '5u8kysmr', code2: 'caixr1pr' },
    { email: 'rdhbycxe@demo.net', code1: 'rncwfp8l', code2: 'ij92hn5j' },
    { email: 'jhbvqxpw@demo.net', code1: '53f6t4jy', code2: '4hg6wh37' },
    { email: 'vmhmlhbj@sample.org', code1: 'np3teqqt', code2: 'oi9s6eu1' },
    { email: 'partendb@test.com', code1: 'fyawd8rh', code2: 'p3pb8m3g' },
    { email: 'bsjfxpbf@sample.org', code1: 'dudy7pyc', code2: 'sutqaaxb' },
    { email: 'zntwgczd@test.com', code1: 'ms00ug7j', code2: 'gi5ilmzw' },
    { email: 'vofxyonj@demo.net', code1: 'zfw2rx2v', code2: '8xywcg3y' },
    { email: 'ebzbulwv@demo.net', code1: 'voygfsan', code2: 'j4qdfh6k' },
    { email: 'smtsvdci@sample.org', code1: '7may31w8', code2: '4l49y6i2' },
    { email: 'edajjkgt@example.com', code1: 'kdrc4c5a', code2: 'j870w89x' },
    { email: 'oyshetry@example.com', code1: 'elogyj7h', code2: 's00gsvxd' },
    { email: 'ynnxpsqx@example.com', code1: 'ntq0soox', code2: 'lomkswa7' },
    { email: 'moyftird@demo.net', code1: 'vug1khnm', code2: '2qm2jnxb' },
    { email: 'ilgjwgsq@example.com', code1: '4gf5khv0', code2: 'riwttp1e' },
    { email: 'utyktzlk@example.com', code1: 'ntoa83lp', code2: 'mcoq870r' },
    { email: 'zkowbrax@sample.org', code1: 'mvk81upt', code2: 'nhlosu6w' },
    { email: 'nyuzwdkh@demo.net', code1: 'meka125s', code2: '2srtxnfe' },
    { email: 'gkmwbxwn@test.com', code1: '5q9karzy', code2: 'u2xy30jy' },
    { email: 'bduisxel@test.com', code1: 'pf30h34u', code2: 'ldwxljbh' },
    { email: 'qyxmjjdd@test.com', code1: '2mnh6fx4', code2: 'rtxot38a' },
    { email: 'rzcfpruh@demo.net', code1: '6imp29ag', code2: 'fwqzyc0g' },
    { email: 'jfrfitfu@sample.org', code1: 'eizxkigx', code2: '2ak7oe8o' },
    { email: 'ejwkbnua@test.com', code1: '2gauk1ll', code2: 'asla8q4k' },
    { email: 'lqwfibna@sample.org', code1: 'kxws8mxr', code2: '6ky8ef8g' },
    { email: 'ihqyckaf@example.com', code1: 'vc4tz3o4', code2: 'hgtj7ups' },
    { email: 'oodhqhgi@demo.net', code1: 'e3op58e5', code2: 'ibt72p6q' },
    { email: 'vofsdveo@test.com', code1: 'dy3eni5l', code2: '6luane6j' },
    { email: 'iazfivyn@sample.org', code1: 'f0oyb9o1', code2: 'jbx0b78h' },
    { email: 'cpvipiid@demo.net', code1: '9v7q90nz', code2: 'ikgg0sqw' },
    { email: 'yfneufuh@example.com', code1: '2ciari5f', code2: 'd7hgdsqh' },
    { email: 'jbdgzejg@sample.org', code1: '3urtkmx4', code2: '768m5rpk' },
    { email: 'fmhjnhok@example.com', code1: 'sdj7snpw', code2: 's8dm2n7s' }
];

records.forEach(({ email, code1, code2 }) => {
    db.run("INSERT INTO codes (email, code1, code2) VALUES (?, ?, ?)", [email, code1, code2], (err) => {
        if (err) console.error('Error inserting data:', err.message);
    });
});

db.close();
