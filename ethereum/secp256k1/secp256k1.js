//引入包
const secp256k1 = require("secp256k1/elliptic")
const createKeccakHash =  require("keccak")


// 生成私钥
//const privateKey = crypto.randomBytes(32)
var privateKey = new Buffer([00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])
var privateKey = new Buffer([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
//a1: c8,dc,36,bd,47,77,b7,c5
//a2: 5,b6,70,1b,ef,fc,58,44
//a3: 3a,69,ed,7d,43,37,72,0c
//a4: 7a,8c,ea,cb,53,1f,d5,4c
//200,220,54,189,71,119,183,197,5,182,112,27,239,252,88,68,58,105,237,125,67,55,114,12,122,140,234,203,83,31,213,76
var privateKey = new Buffer([200,220,54,189,71,119,184,0,5,182,112,27,239,252,88,64,58,105,237,125,67,55,114,0,122,140,234,203,83,31,212,0])
var privateKey = new Buffer([200,220,54,189,71,119,183,197,5,182,112,27,239,252,88,68,58,105,237,125,67,55,114,12,122,140,234,203,83,31,213,76])
//var privateKey = new Buffer([122,140234,203,83,31,213,76,58,105,237,125,67,55,114,12,5,182,112,27,239,252,88,68,200,220,54,189,71,119,183,197])
//var privateKey = new Buffer([44,43,25,91,79,30,60,90,30,41,11,57,21,93,58,42,56,52,49,81,33,88,45,03,64,09,28,72,17,27,16,43,54,89,39,28,16,77,24])
// 生成公钥
//privateKey = Buffer.from('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'hex')

const publicKey1 = secp256k1.publicKeyCreate(privateKey, false)
const publicKey = publicKey1.slice(1)
// 生成地址
const address = createKeccakHash("keccak256").update(publicKey).digest().slice(-20)
//eb9336047cecfeac76c8adb0791aef142de94470784d08982e6ee539baa94ffc5ea18dce92864cbb4b588beebb26902dfb3de92564299105a4608ca5eeb2a262
// 查看结果
var pv = privateKey.toString('hex')
var pb1 = publicKey1.toString('hex')
var pb = publicKey.toString('hex')
var ad = address.toString('hex')
console.log("pv: " + pv)
console.log("pb1: " + pb1)
console.log("pb: " + pb)
console.log("ad: " + ad)
//[122,140,234,203,83,31,213,76]  big-ending   7a8ceacb531fd54c
/*
pv: 7a8ceacb531fd54c 3a69ed7d4337720c 05b6701beffc5844 c8dc36bd4777b7c5
pb1: 40c5b699688a9245cc16aa15b5d87aac44dc94251cd2b2bf47288a3cb91a237d2969a5eeae9cee00b703d21cb98f5f0b2a20fa85fe591f11e57520fab4067a3b
pb: c5b699688a9245cc16aa15b5d87aac44dc94251cd2b2bf47288a3cb91a237d2969a5eeae9cee00b703d21cb98f5f0b2a20fa85fe591f11e57520fab4067a3b
ad: a30d26474354887ecdd59c63939362b27e6c0aef*/
