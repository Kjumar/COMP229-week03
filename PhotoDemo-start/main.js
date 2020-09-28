//import {Photo, MattedPhoto, FramedPhoto} from './photo.js';
const photo = require('./photo.js');

let photo1 = new photo.Photo(8, 10);
console.log(photo1.toString());

let photo2 = new photo.Photo(20, 30);
console.log(photo2.toString());

let mattedPhoto1 = new photo.MattedPhoto(8, 10, 'blue');
console.log(mattedPhoto1.toString());

let mattedPhoto2 = new photo.MattedPhoto(20, 30, 'red');
console.log(mattedPhoto2.toString());

let framedPhoto1 = new photo.FramedPhoto(8, 10, 'metal', 'modern');
console.log(framedPhoto1.toString());

let framedPhoto2 = new photo.FramedPhoto(20, 30, 'wood', 'traditional');
console.log(framedPhoto2.toString());