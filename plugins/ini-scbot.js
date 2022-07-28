import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*SAYA NYARI ESCE? Follow Ig Dulu Bwang*\nSilahkan follow github saya dibawah ,Terimakasih`
conn.sendHydrated(m.chat, str, wm, pepe, @cilllzlpaa'', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)
}
handler.command = ['sc']

export default handler
